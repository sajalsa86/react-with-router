// eslint-disable-next-line react/prop-types, no-unused-vars
const ReusableForm = ({ children, handleSubmit, submitBtnText = "Submit" }) => {
    // eslint-disable-next-line no-unused-vars
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };
        handleSubmit(data);
    };
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Reusable Form with React and Router</h3>
            {children}
            <form onSubmit={handleLocalSubmit}>
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
                    value={submitBtnText}
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                />
            </form>
        </div>
    );
};

export default ReusableForm;
