import NavbarAppAtom from "../../components/atoms/NavbarAppAtom/NavbarAppAtom"
import BootcampCardAtom from "../../components/atoms/BootcampCardAtom/BootcampCardAtom"
import './RPqueriesPage.css';
import { Link } from "react-router-dom";

export default function RPqueriesPage () {
    return(
        <>
            <NavbarAppAtom></NavbarAppAtom>
            <main className="rp-queries-main">
                <section className="queries">
                    <h2 className="rp-queries-title">Procesos abiertos</h2>
                    <BootcampCardAtom title='Femcoders Norte P3' date='Octubre 2023'></BootcampCardAtom>
                </section>
                <section className="queries">
                    <h2 className="rp-queries-title">Postulantes</h2>
                    <ul className="queries-list">
                        <Link to='/consultas/postulantes'><li>Ver todos los postulantes</li></Link>
                        <li>Crear ficha de postulante</li>
                    </ul>
                </section>
            </main>
            
            
        </>
    )
}