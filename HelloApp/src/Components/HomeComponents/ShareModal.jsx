import React from 'react';

const ShareModal = ({ handlePosts }) => {
   
    return (

        <div className="modal" id="my-modal-2">
            <div className="modal-box">
                <form onSubmit={handlePosts}>
                    <textarea className='w-full input h-44 border border-slate-400' name="postText" id="" cols="30" rows="10"></textarea>
                    <div className="modal-action flex justify-between">

                        <a href="#" className="btn btn-error">Cancel</a>
                        <button type='submit' className="btn btn-primary">
                            Post
                        </button>

                    </div>
                </form>
            </div>
        </div>

    );
};

export default ShareModal;