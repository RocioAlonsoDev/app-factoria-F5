import NavbarAppAtom from "../../components/atoms/NavbarAppAtom/NavbarAppAtom"
import BootcampCardAtom from "../../components/atoms/BootcampCardAtom/BootcampCardAtom"
import './RPqueriesPage.css';
import { Link } from "react-router-dom";

export default function RPqueriesPage () {
    return(
        <>
            <NavbarAppAtom name_greeting='Ana'></NavbarAppAtom>
            <main className="rp-queries-main">
                <section className="queries">
                    <h2 className="rp-queries-title">Procesos abiertos</h2>
                    <Link to='/procesos-abiertos' className="link-decoration">
                        <BootcampCardAtom title='Femcoders Norte P3' date='Octubre 2023'></BootcampCardAtom>
                    </Link>
                </section>
                <section className="queries">
                    <h2 className="rp-queries-title">Postulantes</h2>
                    <ul className="queries-list">
                        <li><Link to='/consultas/postulantes'>Ver todos los postulantes</Link></li>
                        <li>Crear ficha de postulante</li>
                    </ul>
                </section>
                <section className="queries">
                    <h2 className="rp-queries-title">Procesos cerrados</h2>
                    <ul className="queries-list">
                        <li>Femcoders P2</li>
                        <li>Digital Academy P3</li>
                    </ul>
                </section>
            </main>
            
            
        </>
    )
}