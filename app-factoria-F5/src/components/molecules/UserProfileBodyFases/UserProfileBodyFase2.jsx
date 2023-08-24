import "./userProfileBodyFases.css";
import UserProfileSubcategoryCard from "../../atoms/UserProfileSubcategoryCard/UserProfileSubcategoryCard";


function UserProfileBodyFase2() {
  return (
    <>
      <section>
        <h4 className="tab-fase-category-title">ACTIVIDADES</h4>
        <UserProfileSubcategoryCard
          subsection_title={"Sesión informativa"}
          checkbox={true}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"Ejercicios Free CodeCamp"}
          subsection_response={"freecodecamp.com/elsapato"}
          checkbox={true}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"Talleres F5"}
          checkbox={true}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"Talleres Pre-Bootcamp"}
          checkbox={true}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"Jornada Puertas Abiertas"}
          checkbox={true}
        ></UserProfileSubcategoryCard>
       
      </section>
    </>
  );
}

export default UserProfileBodyFase2;
