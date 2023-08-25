// import PropTypes from 'prop-types';
import './searchFilterSectionMolecule.css';
// import SearchResultButtonAtom from '../../atoms/SearchResultButtonAtom/SearchResultButtonAtom';
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
            <p className='total-results-text'>6 resultados</p>
        </section>
    </>
  );
};

// SearchResultButtonAtom.propTypes = {
//   result_name: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default SearchFilterSectionMolecule;