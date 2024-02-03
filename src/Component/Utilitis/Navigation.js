// Navigation.js

import { useNavigate } from 'react-router-dom';

const handlerGoBack = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return { goBack };
};

export default handlerGoBack;
