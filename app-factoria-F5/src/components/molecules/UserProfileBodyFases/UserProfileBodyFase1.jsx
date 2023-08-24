import "./userProfileBodyFases.css";
import UserProfileSubcategoryCard from "../../atoms/UserProfileSubcategoryCard/UserProfileSubcategoryCard";
import SearchResultButtonAtom from "../../atoms/SearchResultButtonAtom/SearchResultButtonAtom";

function UserProfileBodyFase1() {
  return (
    <>
      <section>
        <h4 className="tab-fase-category-title">INFO CONTACTO</h4>
        <UserProfileSubcategoryCard
          subsection_title={"Correo electrónico"}
          subsection_response={"elsapato@ejemplo.com"}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"Móvil"}
          subsection_response={"+34 123 456 789"}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"Dirección"}
          subsection_response={"C/ Río Bonito 2, Patones, Madrid"}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"Edad"}
          subsection_response={"25años"}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"DNI"}
          subsection_response={"12345678P"}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"Género"}
          subsection_response={"Mujer"}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"Pronombre"}
          subsection_response={"Femenino"}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"Formación de interés"}
          subsection_response={
            <SearchResultButtonAtom
              search_result_button_atom_style={"user-profile-bootcamp-interest"}
              result_name={"Femcoders P3"}
            ></SearchResultButtonAtom>
          }
        ></UserProfileSubcategoryCard>
      </section>
    </>
  );
}

export default UserProfileBodyFase1 ;
