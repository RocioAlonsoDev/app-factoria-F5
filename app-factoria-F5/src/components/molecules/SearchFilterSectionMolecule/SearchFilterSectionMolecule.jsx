// import PropTypes from 'prop-types';
import './searchFilterSectionMolecule.css';
import SearchResultButtonAtom from '../../atoms/SearchResultButtonAtom/SearchResultButtonAtom';
import filterIcon from '../../../assets/icons/filter.svg';

const SearchFilterSectionMolecule = () => {
  return (
    <>
        <section className='search-filter-section-container'>
            <div className='search-filter-container'>
                    <button className='filter-icon-container'>
                        <img src={filterIcon} className="filter-icon" alt="Icono filtro"/>
                    <div className='filter-notification'>
                    </div>
                    </button>
                <input type="text" id="search" placeholder='Buscar...'></input>
            </div>
            <div className='search-filter-result-container'>

                <div className='results-buttons-container'>
                    <SearchResultButtonAtom search_result_button_atom_style="search-result-button-atom" result_name="Digital Academy"></SearchResultButtonAtom>
                    <SearchResultButtonAtom search_result_button_atom_style="search-result-button-atom" result_name="FEM Norte"></SearchResultButtonAtom>
                    <SearchResultButtonAtom search_result_button_atom_style="search-result-button-atom" result_name="Digital Academy"></SearchResultButtonAtom>
                    <SearchResultButtonAtom search_result_button_atom_style="search-result-button-atom" result_name="FEM Norte"></SearchResultButtonAtom>
                </div>
            </div>
            <p className='total-results-text'>150 resultados</p>
        </section>
    </>
  );
};

// SearchResultButtonAtom.propTypes = {
//   result_name: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default SearchFilterSectionMolecule;