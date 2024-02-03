import { useEffect, useRef, useState } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        const password = passwordRef.current.value;
        if (password.length < 6) {
            setError('Your Password must be 6 characters or longer')
        } else {
            setError('');
            console.log(nameRef.current.value);
            console.log(emailRef.current.value);
            console.log(passwordRef.current.value);
        }

    };
    useEffect(() => {
        nameRef.current.focus();
    }, [])
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Ref Form with React and Router</h3>
            <form onSubmit={handleSubmit}>
                <input
                    ref={nameRef}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name here"
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                    ref={emailRef}
                    defaultValue={'sajalsm86@gmail.com'}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email here"
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                    ref={passwordRef}
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
        </div>
    );
};

export default RefForm;