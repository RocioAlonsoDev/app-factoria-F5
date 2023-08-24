import PropTypes from 'prop-types';
import './searchResultButtonAtom.css';


const SearchResultButtonAtom = ({ result_name, onClick }) => {
  return (
    <button className='search-result-button-atom' onClick={onClick}> {result_name} </button>
  );
};

SearchResultButtonAtom.propTypes = {
  result_name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchResultButtonAtom;