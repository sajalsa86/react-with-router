
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts)
    return (
        <div className='bg-pink-100 w-4/5 m-auto rounded-md shadow-md p-4'>
            <h2 className='text-3xl text-center text-fuchsia-800 font-bold'>All the Post are here: <span className='text-orange-700'>{posts.length}</span></h2>
            <div className='grid grid-cols-3 gap-3'>
                {posts.map(post => <Post
                    key={post.id}
                    post={post}
                ></Post>)}
            </div>
        </div>
    );
};

export default Posts;