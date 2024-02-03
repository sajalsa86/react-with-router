
const Form = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Submitted Name:', name);
        console.log('Submitted email:', email);
        console.log('Submitted password:', password);

    };
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Simple Form with React and Router</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name here"
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email here"
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
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
        </div>
    );
};

export default Form;
