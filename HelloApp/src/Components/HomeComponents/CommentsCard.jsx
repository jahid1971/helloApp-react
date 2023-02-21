import React, { useState } from "react";

const CommentsCard = ({ comment }) => {
    const [commentText, setCommentText] = useState("");
    const [longComment, setlongComment] = useState(() => comment?.commentText.length > 100 ? true : false);

    return (
        <div>
            <div className=" flex gap-2 ">
                <div className="">
                    <img
                        src={comment?.userPhoto}
                        className="rounded-full h-11"
                        alt=""
                    />
                </div>
                <div className="bg-slate-200 p-3 rounded-md w-fit">
                    <div className="text-base font-semibold">
                        {comment?.userName}
                    </div>

                    <div className="text-base">
                        {longComment ?
                            <span>
                                {comment?.commentText.slice(0, 100)}
                                <a className="link-hover font-semibold cursor-pointer" onClick={() => setlongComment(!longComment)}>
                                    ...Read more
                                </a>
                            </span>
                            :
                            comment?.commentText

                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentsCard;
