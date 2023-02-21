import { async } from "@firebase/util";
import axios from "axios";
import moment from "moment/moment";
import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import baseUrl from "../../../config";
import { AuthContext } from "../../Context/Authprovider";
import CommentModal from "./CommentModal";
import PostCard from "./PostCard";

const PostSection = ({ post }) => {
    const { user } = useContext(AuthContext);
    const { postTime } = post;
    const [showModal, setShowModal] = useState(false);
    const timeElapsed = moment(postTime).fromNow();
    // console.log(post);

    const currentUserLike = post?.likes.find((like) => like === user?.uid);

    const handleLike = () => {
        let addLike;
        currentUserLike ? (addLike = false) : (addLike = true);

        axios
            .patch(`${baseUrl}/updateLikes`, {
                addLike: addLike,
                filterId: post._id,
                like: user?.uid,
            })
            .then((data) => console.log(data))
            // .then(() => refetch())
            .catch((err) => console.log(err));
    };

    // const {commentsData,setCommentsData} = useState([])  ;

    //  const commentApi = async (postId) => {
    //      const response = await axios.get(`${baseUrl}/getComments/${postId}`)
    //      return console.log(response.data, 'responseeeeeeeeeeeeeeee')
    //  } ;
    const [fetchData, setFetchData] = useState(false);
    const [queryId, setQueryId] = useState(null);

    const loadCommentsData = (postId) => {
        setQueryId(postId);
        setFetchData(true);
        console.log(queryId, ' queruidd')
    };
     const { data: commentsData = [], refetch } = useQuery({
        queryKey: [queryId],
        queryFn: async () => {
            const response = await axios
                .get(`${baseUrl}/getComments/${queryId}`)
                .then((res) => res.data)
                .then(setFetchData(false))
                return response
        },
        enabled: fetchData,
        onSuccess: (data) => console.log("finallyyyyy", data),
    });

    return (
        <div className="bg-white p-8">
            <PostCard
                currentUserLike={currentUserLike}
                handleLike={handleLike}
                post={post}
                timeElapsed={timeElapsed}
                loadCommentsData={loadCommentsData}
            ></PostCard>
            <div>
                {/* {showModal && ( */}
                <CommentModal
                    currentUserLike={currentUserLike}
                    handleLike={handleLike}
                    post={post}
                    refetchComments ={refetch}
                    timeElapsed={timeElapsed}
                    commentsData={commentsData}
                    loadCommentsData={loadCommentsData}
                ></CommentModal>
                {/* )} */}
            </div>
        </div>
    );
};

export default PostSection;
