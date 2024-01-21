import React from "react";

function Terstimonio(){
  return ( 
    <div className='contenedor-testimonio'>
      <img className="imagen-testimonio" 
        src={require('../imagenes/waifu.png')  }  alt="foto de waifu" />
      
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Falcu la latooor;</p>
        <p className="cargo-testimonio" >Ingeniera en spotify</p>
        <p className="texto-terstimonio" >lorem123Aprende los fundamentos de React en este curso desde cero.    Crearás cuatro proyectos paso a paso y aprender
        </p>

      </div>
    </div>
  );
}

export default Terstimonio;