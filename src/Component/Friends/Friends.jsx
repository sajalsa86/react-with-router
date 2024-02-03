
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();

    return (
        <div className='bg-purple-300 w-4/5 m-auto rounded-md shadow-md p-4'>
            <h2 className='text-3xl text-center text-fuchsia-800 font-bold'>These are my all friends : <span className='text-fuchsia-950'>{friends.length}</span></h2>
            <div className='grid grid-cols-3 gap-1'>
                {friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                ></Friend>)}
            </div>
        </div>
    );
};

export default Friends;