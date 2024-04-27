
import React from 'react';

const MiComponente = (props) => {
return (
<div>
<h1>{props.titulo}</h1>
<p className='display-4'>{props.contenido}</p>
</div>
);
}

export default MiComponente;
