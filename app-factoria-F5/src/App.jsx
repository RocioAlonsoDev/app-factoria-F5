// import './App.css';
// import RegistrationFormPage from '../src/views/RegistrationFormPage/RegistrationFormPage';
// import SignInSuccessPage from '../src/views/SignInSuccessPage/SignInSuccessPage';
// import LandingPage from '../src/views/LandingPage/LandingPage';
// import SearchFilterPage from "./views/SearchFilterPage/SearchFilterPage";
import UserProfileTabsAtom from "./components/atoms/UserProfileTabsAtom/UserProfileTabsAtom";
import UserProfileBodyFase1 from "./components/molecules/UserProfileBodyFases/UserProfileBodyFase1";
import UserProfileBodyFase2 from "./components/molecules/UserProfileBodyFases/UserProfileBodyFase2";
import UserProfileBodyFase3 from "./components/molecules/UserProfileBodyFases/UserProfileBodyFase3";

function App() {
  return (
    <>
      {/* <RegistrationFormPage></RegistrationFormPage> */}
      {/* <SignInSuccessPage></SignInSuccessPage> */}
      {/* <LandingPage></LandingPage> */}
      {/* <SearchFilterPage></SearchFilterPage> */}
      <UserProfileTabsAtom
        element_fase1={<UserProfileBodyFase1></UserProfileBodyFase1>}
        element_fase2={<UserProfileBodyFase2></UserProfileBodyFase2>}
        element_fase3={<UserProfileBodyFase3></UserProfileBodyFase3>}
      ></UserProfileTabsAtom>
    </>
  );
}
export default App;
