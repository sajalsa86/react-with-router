import { useState } from "react";

const StateFullForm = () => {
    const [name, setName] = useState('Sajal Hossain');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Your Password must be 6 characters or longer')
        } else {
            setError('');
            console.log(name, email, password);
        }
    };

    const handleNameChange = e => {
        setName(e.target.value);
    };
    const handleEmailChange = e => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">StateFull Form with React and Router</h3>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleNameChange}
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name here"
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                    onChange={handleEmailChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email here"
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                    onChange={handlePasswordChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    required
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />

                <input
                    type="submit"
                    value="Submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                />
            </form>
            {
                error && < p className="bg-red-300 p-2 rounded mt-2">{error}</p>
            }
        </div >
    );
};

export default StateFullForm;