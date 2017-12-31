import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onChange, value, children, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" onChange={onChange} value={value} />
    <button type="submit">{children}</button>
  </form>
);

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;
