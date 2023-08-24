import PropTypes from 'prop-types';
import './searchResultButtonAtom.css';


const SearchResultButtonAtom = ({ search_result_button_atom_style, result_name, onClick }) => {
  return (
    <button className={search_result_button_atom_style} onClick={onClick}> {result_name} </button>
  );
};

SearchResultButtonAtom.propTypes = {
  search_result_button_atom_style: PropTypes.any.isRequired,
  result_name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchResultButtonAtom;