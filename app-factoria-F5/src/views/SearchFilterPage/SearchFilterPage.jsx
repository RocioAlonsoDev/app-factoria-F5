import './searchFilterPage.css';
import NavbarAtomApp from '../../components/atoms/NavbarAppAtom/NavbarAppAtom'
import FooterAtom from '../../components/atoms/FooterAtom/FooterAtom';
import SearchFilterSectionMolecule from '../../components/molecules/SearchFilterSectionMolecule/SearchFilterSectionMolecule';
import UserCardsList from '../../components/molecules/UserCardsList/UserCardsList'

function SearchFilterPage() {
        
  return (
    <>
            <NavbarAtomApp name_greeting={'Ana'}/>
            <main className='search-filter-main'>
            <SearchFilterSectionMolecule className='search-filter-molecule-container'/>
            <UserCardsList/>
            </main>
            <FooterAtom logo={false}></FooterAtom>
    </>
  )
}

export default SearchFilterPage;