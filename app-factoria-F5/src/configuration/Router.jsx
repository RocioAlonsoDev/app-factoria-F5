import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import Acces from "../views/Acces/Acces";
import RegistrationFormPage from "../views/RegistrationFormPage/RegistrationFormPage";
import SignInSuccessPage from "../views/SignInSuccessPage/SignInSuccessPage";
import SearchFilterPage from "../views/SearchFilterPage/SearchFilterPage"
import UserProfilePage from "../views/UserProfilePage/UserProfilePage";
import RPqueriesPage from "../views/RPqueriesPage/RPqueriesPage";
import OpenProcedure from "../views/OpenProcedure/OpenProcedure";


const Router= () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<LandingPage/>}></Route>
                <Route path='/acceso' element= {<Acces/>}></Route>
                <Route path='/registro' element={<RegistrationFormPage></RegistrationFormPage>}></Route>
                <Route path='/registro-exitoso' element={<SignInSuccessPage></SignInSuccessPage>}></Route>
                <Route path='/consultas' element={<RPqueriesPage></RPqueriesPage>}></Route>
                <Route path='/consultas/postulantes' element={<SearchFilterPage></SearchFilterPage>}></Route>
                <Route path='/procesos-abiertos' element={<OpenProcedure></OpenProcedure>}></Route>
                <Route path='/usuario' element={<UserProfilePage></UserProfilePage>}></Route>
                {/* <Route path='/screens' element= {<Screens/>}></Route> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;