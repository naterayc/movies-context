import { useState } from 'react';

const useHandleChange = () => {
    
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    return { query, handleChange };

}

export default useHandleChange;
