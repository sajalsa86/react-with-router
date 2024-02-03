
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    // console.log(friend);
    const { id, name, username, email, phone } = friend;
    return (
        <div className='bg-fuchsia-200 shadow border-4 border-orange-800 p-4 m-4 rounded-lg'>
            <h3><span className='font-bold'>Name :</span> {name}</h3>
            <p><span className='font-bold'>User Name :</span> {username}</p>
            <p><span className='font-bold'>Email :</span> {email}</p>
            <p><span className='font-bold'>Phone :</span> {phone}</p>
            <div className="mt-4 flex justify-center items-center">
                <Link to={`/friend/${id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default Friend;