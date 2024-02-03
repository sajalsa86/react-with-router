
import { useLoaderData } from 'react-router-dom';
import handlerGoBack from '../Utilitis/Navigation';

const FriendDetail = () => {
    const details = useLoaderData();
    const { goBack } = handlerGoBack();
    // console.log(details)
    const { address, company, website } = details;
    const { street, suite, city, zipcode } = address;
    const { name, catchPhrase, bs } = company;
    return (
        <div className='bg-fuchsia-300 w-4/5 m-auto rounded-md shadow-md p-4'>
            <h2 className='mb-5 text-3xl text-center text-fuchsia-700 font-bold'>My Friend Details Page</h2>
            <div className='grid grid-cols-3 gap-3'>
                <div className='bg-pink-100 rounded-full p-5 text-center'>
                    <h2 className='mb-4 w-36 mx-auto rounded-md bg-slate-400 p-1 font-bold text-3xl text-slate-700'>Address</h2>
                    <p><span className='font-bold'>Street : </span>{street}</p>
                    <p><span className='font-bold'>Suite : </span>{suite}</p>
                    <p><span className='font-bold'>City : </span>{city}</p>
                    <p><span className='font-bold'>Zipcode : </span>{zipcode}</p>
                </div>
                <div className='bg-pink-100 rounded-full p-5 text-center'>
                    <h2 className='mb-4 w-36 mx-auto rounded-md bg-slate-400 p-1 font-bold text-3xl text-slate-700'>Company</h2>
                    <p><span className='font-bold'>Name : </span>{name}</p>
                    <p><span className='font-bold'>CatchPhrase: </span>{catchPhrase}</p>
                    <p><span className='font-bold'>Bs : </span>{bs}</p>

                </div>
                <div className='bg-pink-100 rounded-full p-5 text-center'>
                    <h2 className='mb-4 w-36 mx-auto rounded-md bg-slate-400 p-1 font-bold text-3xl text-slate-700'>Website</h2>
                    <p><span className='font-bold'>Website: </span>{website}</p>
                </div>
                <button onClick={goBack} className='bg-lime-700 hover:bg-lime-400 font-bold rounded py-2 px-2'>Go Back</button>
            </div>
        </div>
    );
};

export default FriendDetail;