import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import baseUrl from "../../../config";
import PostSection from "../../Components/HomeComponents/PostSection";
import Share from "../../Components/HomeComponents/Share";
import Sidebar from "../../Components/HomeComponents/Sidebar";
import { AuthContext } from "../../Context/Authprovider";

const Home = () => {
    const { user } = useContext(AuthContext);
    // const [allPosts,setAllposts] = useState([])

    const { data: allPosts = [] } = useQuery({
        queryKey: ["all-posts"],
        queryFn: () => fetch(`${baseUrl}`).then((res) => res.json()),
        onSuccess: (data) => console.log("Data loaded successfully:", data),
    });

    return (
        <div className="md:w-9/12 w-11/12 flex gap-3 mx-auto py-6">
            <section className="lg:w-4/12 w-full bg-white shadow-md ">
                <Sidebar user={user}></Sidebar>
            </section>

            <section className="w-full lg:8/12  flex flex-col gap-4">
                <div className="bg-white">
                    <Share></Share>
                </div>

                <div className=" flex flex-col gap-4">
                    {allPosts?.map((post) => (
                        <PostSection post={post} key={post._id}>
                            {/* {" "} */}
                        </PostSection>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
