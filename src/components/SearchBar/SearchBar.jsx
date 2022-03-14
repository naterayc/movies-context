import React from 'react';
import { Input } from '../../styled-components/StyledInput';
import { Container } from '../../styled-components/Container';
import { Link } from 'react-router-dom';
import useHandleChange from '../../Custom Hooks/UseHandleChange';

const SearchBar = () => {

    const { query, handleChange } = useHandleChange();

    return (
        <Container>
            <Input type="text" placeholder="Search movies" value={query} onChange={handleChange} />
            <Link to={`/search/${query}`} className="search-btn">Search</Link>
        </Container>
    );
}
export default SearchBar;