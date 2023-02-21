import moment from 'moment/moment';
import React, { useContext, useState } from 'react';
import baseUrl from '../../../config';
import { AuthContext } from '../../Context/Authprovider';
import ShareModal from './ShareModal';

const Share = ({refetch}) => {
    const { user } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)


    const handlePosts = (e) => {
        e.preventDefault()
        const postText = e.target.postText.value
        const now = moment();
        const userPost = {
            userId: user?.uid,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            userText: postText,
            likes: [],
            postTime: now
        }
        // console.log(userPost)


        fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userPost)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            // .then(()=>refetch())
            .catch(err => console.error(err))

        setIsOpen(false)
    }
    return (
        <div className='flex gap-3 p-6 items-center'>
            <div>
                <img src={user?.photoURL} className='rounded-full h-12' alt="" />
            </div>

            <div className='w-9/12'>

                {/* modal_open      */}
                <a href="#my-modal-2" onClick={() => setIsOpen(true)}>
                    <input type="" disabled placeholder='share your views ...' className='w-full h-14 p-5 bg-slate-200 hover:bg-slate-200 cursor-pointer' />
                </a>
            </div>


            {
                isOpen &&
                <ShareModal handlePosts={handlePosts} setIsOpen={setIsOpen}></ShareModal>
            }


        </div>
    );
};

export default Share;