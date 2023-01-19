import React from 'react';
import { Link } from "react-router-dom";

function Inicio(props) {
    return (
        <>
        <div>
            {/* -- SECCIÓN SOBRE MÍ  */}
            {/* <div id='sobremi'>
                <div>Contenedor foto</div>
                <div>
                    <p>Sobre Mi</p>
                    <h2>Hola! Soy <span>Daniela Franco</span></h2>
                    <h3>Desarrollador Web</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore delectus eaque, autem numquam exercitationem ullam animi facilis suscipit doloribus voluptatibus sapiente</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore delectus eaque, autem numquam exercitationem ullam animi facilis suscipit doloribus voluptatibus sapiente</p>
                    <a href="">Descargar CV</a>
                </div>
            </div> */}


                {/* SECCIÓN SERVICIOS */}
                <div id='servicios'>
                <h3>MIS SERVICIOS</h3>

                <div>  {/* fila */}
                <div>Servicio</div>
                <div>Servicio</div>
                <div>Servicio</div>
                <div>Servicio</div>
                <div>Servicio</div>
                <div>Servicio</div>
                <div>Servicio</div>
                </div>
                </div>

            {/* SECCIÓN HABILIDADES */}
            <div>
                <h1>Habilidades</h1>
                <div className="skill">
            <div className="info">
                <p> <span className="lista"> </span>Html & Css</p>
                <span className="porcentaje">95%</span>
            </div>

            <div className="barra">
                <div className="" id="html"></div>
            </div>
        </div>            
        </div>
        {/* SECCIÓN PORTAFOLIO */}
        <div id="portafolio">
        <h3 className="titulo-seccion">Mis Proyectos</h3>
            <div className="proyecto">
                <div className="overlay"></div>
                <img src="img/proyecto1.jpg" alt=""/>
                <div className="info">
                    <h4>Descripcion Proyecto</h4>
                    <p>Diseño Web</p>
                </div>
            </div>
        </div>

            </div>

        </>
    );
}

export default Inicio;