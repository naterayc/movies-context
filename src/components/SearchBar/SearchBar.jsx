import React, { useState } from 'react';
import { Input } from '../../styled-components/StyledInput';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SearchBar = () => {

    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    }
    return (
        <Container>
            <Input type="text" placeholder="Search movies" value={query} onChange={handleChange} />
            <Link to={`/search/${query}`} className="search-btn">Search</Link>
        </Container>
    );
}
export default SearchBar;