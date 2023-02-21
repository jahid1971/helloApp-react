import React from 'react';

const Sidebar = ({ user }) => {
    return (
        <div className='mt-12'>
            <div>
                <img src={user?.photoURL} className="w-8/12 mx-auto rounded-full" alt="" />
            </div>
            <div className='text-center text-lg font-medium mt-4'>
                {user?.displayName}
            </div>
        </div>
    );
};

export default Sidebar;