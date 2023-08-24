import NavbarAtomApp from "../../components/atoms/NavbarAppAtom/NavbarAppAtom"
import UserProfileBannerAtom from "../../components/atoms/UserProfileBannerAtom/UserProfileBannerAtom";
import UserProfileTabsAtom from "../../components/atoms/UserProfileTabsAtom/UserProfileTabsAtom";
import FooterAtom from "../../components/atoms/footerAtom/FooterAtom";
import UserProfileBodyFase1 from "../../components/molecules/UserProfileBodyFases/UserProfileBodyFase1";
import UserProfileBodyFase2 from "../../components/molecules/UserProfileBodyFases/UserProfileBodyFase2";
import UserProfileBodyFase3 from "../../components/molecules/UserProfileBodyFases/UserProfileBodyFase3";


function UserProfilePage() {
    return (
      <>
        <NavbarAtomApp name_greeting={'Ana'}/>
        <main>
          <UserProfileBannerAtom user_profile_name={"Elsa Patacky"}></UserProfileBannerAtom>
          <UserProfileTabsAtom
            element_fase1={<UserProfileBodyFase1></UserProfileBodyFase1>}
            element_fase2={<UserProfileBodyFase2></UserProfileBodyFase2>}
            element_fase3={<UserProfileBodyFase3></UserProfileBodyFase3>}
          ></UserProfileTabsAtom>
        </main>
        <FooterAtom logo={false}></FooterAtom>
      </>
    );
  }
  export default UserProfilePage;