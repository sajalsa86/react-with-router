// src/components/NotFound.tsx

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
                <p className="text-lg text-gray-600">
                    The page you are looking for might have been removed or does not exist.
                </p>
            </div>
        </div>
    );
};

export default NotFound;
