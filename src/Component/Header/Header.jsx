
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <header className='bg-pink-200 w-4/5 m-auto rounded-md shadow-md p-4 my-4'>
            <nav className='flex justify-center gap-5'>
                <ActiveLink to="/" className="text-2xl text-blue-500 hover:text-blue-700">Home</ActiveLink>
                <ActiveLink to="/friends" className="text-2xl text-blue-500 hover:text-blue-700">Friends</ActiveLink>
                <ActiveLink to="/about" className="text-2xl text-blue-500 hover:text-blue-700">About</ActiveLink>
                <ActiveLink to="/contact" className="text-2xl text-blue-500 hover:text-blue-700">Contact</ActiveLink>
                <ActiveLink to="/posts" className="text-2xl text-blue-500 hover:text-blue-700">Posts</ActiveLink>
                <ActiveLink to="/form" className="text-2xl text-blue-500 hover:text-blue-700">Form</ActiveLink>
                <ActiveLink to="/stateFull" className="text-2xl text-blue-500 hover:text-blue-700">StateFullForm</ActiveLink>
                <ActiveLink to="/refForm" className="text-2xl text-blue-500 hover:text-blue-700">Ref Form</ActiveLink>
                <ActiveLink to="/hookForm" className="text-2xl text-blue-500 hover:text-blue-700">Hook Form</ActiveLink>
                <ActiveLink to="/reusableForm" className="text-2xl text-blue-500 hover:text-blue-700">ReusableForm</ActiveLink>
            </nav>
        </header>
    );
};

export default Header;
