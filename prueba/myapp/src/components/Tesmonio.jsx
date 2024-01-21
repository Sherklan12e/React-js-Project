import React from "react";
import '../Estilos/Testimonio.css'
export function Testimonio(Props){
  return ( 
    <div className='contenedor-testimonio'>
      <img className="imagen-testimonio" 
        src={require(`../imagenes/waifu-${Props.imagen}.png`)  }  alt="foto de waifu" />
      
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{Props.name} en {Props.pais} </p>
        <p className="cargo-testimonio" > {Props.cargo}  en {Props.empresa} </p>
        <p className="texto-terstimonio" >{Props.testimonio}
        </p>
        <p> id del elememnto {Props.id}</p>

      </div>
    </div>
  );
}

