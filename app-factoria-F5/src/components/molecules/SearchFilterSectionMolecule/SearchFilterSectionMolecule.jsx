// import PropTypes from 'prop-types';
import './searchFilterSectionMolecule.css';
import SearchResultButtonAtom from '../../atoms/SearchResultButtonAtom/SearchResultButtonAtom';
import filterIcon from '../../../assets/icons/filter.svg';

const SearchFilterSectionMolecule = () => {
  return (
    <>
        <section className='search-filter-section-container'>
            <div className='search-filter-container'>
                    <div className='filter-icon-container'>
                        <img src={filterIcon} className="filter-icon" alt="Icono filtro"/>
                    <div className='filter-notification'>
                    </div>
                    </div>
                <input type="text" id="search" placeholder='Buscar...'></input>
            </div>
            <div className='search-filter-result-container'>

                <div className='results-buttons-container'>
                    <SearchResultButtonAtom result_name="Digital Academy"></SearchResultButtonAtom>
                    <SearchResultButtonAtom result_name="FEM Norte"></SearchResultButtonAtom>
                    <SearchResultButtonAtom result_name="Digital Academy"></SearchResultButtonAtom>
                    <SearchResultButtonAtom result_name="FEM Norte"></SearchResultButtonAtom>
                    <SearchResultButtonAtom result_name="Digital Academy"></SearchResultButtonAtom>
                    <SearchResultButtonAtom result_name="FEM Norte"></SearchResultButtonAtom>
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