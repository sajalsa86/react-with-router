import { useState } from "react";
import useInputState from "../../Hooks/UseInputState";

const HookForm = () => {
    const [error, setError] = useState(null);
    const nameState = useInputState('Sajal Hossain');
    const emailState = useInputState(''); // Provide an empty string as the default value
    const passwordState = useInputState(''); // Provide an empty string as the default value

    const handleSubmit = e => {
        e.preventDefault();
        const password = passwordState.value;
        if (password.length < 6) {
            setError('Your Password must be 6 characters or longer')
        } else {
            setError('');
            console.log("Name:", nameState.value);
            console.log("Email:", emailState.value);
            console.log("Password:", passwordState.value);
        }
    };
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Hook Form with React and Router</h3>
            <form onSubmit={handleSubmit}>
                <input
                    {...nameState}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name here"
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                    {...emailState}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email here"
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                    {...passwordState}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
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
        </div>
    );
};

export default HookForm;
//