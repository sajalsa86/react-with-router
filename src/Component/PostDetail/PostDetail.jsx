
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const navigate = useNavigate();
    const handleGoBack = () => navigate(-1);
    const myPostDetails = useLoaderData();
    const { id, body } = myPostDetails
    return (
        <div className='bg-fuchsia-200 w-4/5 m-auto rounded-md shadow-md p-4'>
            <h2 className='text-3xl text-center text-fuchsia-800 font-bold'>Post Details</h2>
            <div className='w-2/4 m-auto mt-5 bg-slate-400 border rounded-2xl p-5'>
                <h3><span className='font-bold'>User id : </span>{id}</h3>
                <p><span className='font-bold'>Post : </span>{body}</p>
                <button onClick={handleGoBack} className='bg-lime-700 mt-2 py-2 px-3 rounded-md hover:bg-lime-500'>Go Back</button>
            </div>
        </div>
    );
};

export default PostDetail;

