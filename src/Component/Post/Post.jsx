import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Post = ({ post }) => {
    // console.log(post)
    const navigate = useNavigate();
    const navigateBtnHandler = () => navigate(`/post/${id}`);
    const { id, title } = post;
    return (
        <div className='mt-5 bg-slate-400 border border-orange-950 rounded-md p-4'>
            <h3><span className='font-bold'>Title : </span>{title}</h3>
            <div className="mt-4 flex justify-left items-center">
                <Link to={`/post/${id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    See Post
                </Link>
                <Link to={`/post/${id}`}> <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Detail</button></Link>
                <button onClick={navigateBtnHandler} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">More</button>
            </div>
        </div>

    );
};

export default Post;