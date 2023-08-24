import "./userProfileBodyFases.css";
import UserProfileSubcategoryCard from "../../atoms/UserProfileSubcategoryCard/UserProfileSubcategoryCard";


function UserProfileBodyFase3() {
  return (
    <>
      <section>
        <h4 className="tab-fase-category-title">DOCUMENTACIÓN</h4>
        <UserProfileSubcategoryCard
          subsection_title={"Titulación - Archivo adjunto"}
          show_archive={true}
          subsection_archive_link={''}
          checkbox={true}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"DNI - Archivo adjunto"}
          show_archive={true}
          subsection_archive_link={''}
          checkbox={true}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"Padrón - Archivo adjunto"}
          show_archive={true}
          subsection_archive_link={''}
          checkbox={true}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"Vida laboral - Archivo adjunto"}
          show_archive={true}
          subsection_archive_link={''}
          checkbox={true}
        ></UserProfileSubcategoryCard>
        <UserProfileSubcategoryCard
          subsection_title={"Curriculum - Archivo adjunto"}
          show_archive={true}
          subsection_archive_link={''}
          checkbox={true}
        ></UserProfileSubcategoryCard>
               
      </section>
    </>
  );
}

export default UserProfileBodyFase3;
