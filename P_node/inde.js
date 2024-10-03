const corrupcion = document.getElementById('corrupcion');


function random(){

    
    return Math.floor(Math.random() * 500)
    
}


function ObternerApi(){
    const url = 'https://rickandmortyapi.com/api/character/';
    urls = url + random()
    fetch(urls)
        .then((res) => {
            if(!res.ok){
                console.log("Ocurrio un error al obtener");
            }
            return res.json();
        })
        .then((data) => {
            const objetos = data
            console.log(data);
            AgregarHtml(objetos);
           
        })

        .catch((error) => {
            console.error(error);
        })
}

function AgregarHtml(datos){
    corrupcion.innerHTML = ` 
    <div class="card2">
    <div class="contenedor-imagen">
    <img src="${datos.image} " >
    </div>
    <div class="options">
        <p>Nombre : ${datos.name}</p>
        <p>Especie : ${datos.species}</p>
        <p>Especie : ${datos.species}</p>
        <p>Creado  : ${datos.name}</p>
        <button onclick="ObternerApi()">tocar</button>
    </div>
    </div>
    
    `
}


ObternerApi();





