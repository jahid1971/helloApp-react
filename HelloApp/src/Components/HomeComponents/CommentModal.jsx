import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import baseUrl from "../../../config";
import { AuthContext } from "../../Context/Authprovider";
import CommentsCard from "./CommentsCard";
import PostCard from "./PostCard";

const CommentModal = ({
    post,
    commentsData,
    refetchComments,
    handleLike,
    timeElapsed,
    currentUserLike,
}) => {
    const { user } = useContext(AuthContext);

    const handlePostComment = (e) => {
        e.preventDefault();
        const commentText = e.target.commentText.value;
        console.log(commentText);
        const comment = {
            userId: user?.uid,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            postId: post?._id,
            commentText: commentText,
        };

        axios
            .post(
                `${baseUrl}/postComment`,
                {
                    newComment: comment,
                },
                {
                    headers: {
                        "content-type": "application/json",
                    },
                }
            )
            // .then((res) => res.data)
            .then((res) => {
                if (res.data.acknowledged) {
                    refetchComments();
                    e.target.commentText.value = "";
                    console.log(data);
                }
            });
    };
    console.log(commentsData);

    return (
        <div>
            <div className="modal " id={`${post?._id}`}>
                <div className="modal-box w-11/12  lg:w-6/12 max-w-5xl">

                    <PostCard post={post}></PostCard>

                    <div className="flex flex-col gap-3 w-full bg-red-50 p-6 mx-auto ">
                        {commentsData.map((comment) => (
                            <CommentsCard comment={comment} key={comment._id} ></CommentsCard>
                        ))}
                    </div>

                    <form
                        onSubmit={handlePostComment}
                        className="sticky bottom-0 bg-white"
                    >
                        <textarea
                            placeholder="Write your comment..."
                            className="w-full input h-10 border border-slate-400"
                            name="commentText"
                            id=""
                            cols="30"
                            rows="10"
                        ></textarea>
                        <div className="modal-action mt-1 flex justify-between">
                            <a href="#" className="btn btn-error">
                                Cancel
                            </a>
                            <button type="submit" className="btn btn-primary">
                                Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CommentModal;
