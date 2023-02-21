import React from "react";
import { faCommentDots, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostCard = ({ post, handleLike, timeElapsed, currentUserLike, loadCommentsData }) => {
    return (
        <div>
            <div className="flex gap-3 items-center">
                <div>
                    <img
                        src={post?.userPhoto}
                        className="rounded-full h-12"
                        alt=""
                    />
                </div>
                <div className=" flex flex-col gap-0">
                    <div className="text-lg font-medium">{post?.userName}</div>
                    <div className="text-sm">{timeElapsed}</div>
                </div>
            </div>

            <div className="mt-3 px-10 ">{post?.userText}</div>

            <div className="flex justify-between px-10 mt-2 ">
                <div>
                    <div
                        className="text-xl cursor-pointer flex  gap-1  "
                        onClick={handleLike}
                    >
                        <FontAwesomeIcon
                            icon={faThumbsUp}
                            className={
                                currentUserLike ? "text-primary" : "text-black"
                            }
                        />
                        <div className="text-base">{post?.likes.length}</div>
                    </div>
                </div>

                {/* open commentModal */}
                <div className="text-xl"  onClick={() => loadCommentsData(post._id)}>
                    <a href={`#${post?._id}`}>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
