
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Contact = () => {
    const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />;

    return (
        <div className='bg-purple-300 w-4/5 m-auto rounded-md shadow-md p-4'>
            <h2 className='text-3xl text-center text-fuchsia-800 font-bold'>This is Contact page</h2>
            <Link to={'https://www.facebook.com/'} target='_blank' className='bg-pink-400 py-2 px-3 rounded active:bg-green-500'>
                {facebookIcon} Facebook
            </Link>
        </div>
    );
};

export default Contact;
