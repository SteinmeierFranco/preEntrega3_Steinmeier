const jugadores= [
    {nombre: "franco",edad:20, posicion:"delantero",},
    {nombre: "Joaquin",edad:20, posicion:"mediocampista",},
    {nombre: "Felipe",edad:22, posicion:"Defensor",},
    {nombre: "Tobias",edad:21, posicion:"arquero",},
];
localStorage.setItem("jugadores",JSON.stringify(jugadores))

const agregarjugador= (nombre,edad,posicion)=>{
    let jugadoresJson= localStorage.getItem("jugadores")
    let jugadores= JSON.parse(jugadoresJson)

     let nuevojugador={
      nombre: nombre,
        edad: edad,
        posicion: posicion
    }
    jugadores.push(nuevojugador)
    localStorage.setItem("jugadores",JSON.stringify(jugadores))
   }
   
let club= []
let contenedor=document.getElementById("contenedor")
let botonincorporaciones= document.getElementById("boton")
let botonborrar= document.getElementById("boton1")



botonborrar.addEventListener("click",()=>{
    localStorage.clear();
    location.reload();
})

const agregar = (jugadorseleccionado) => {
    let jugadorExistente = false;

    for (let j of jugadores) {
        if (j.nombre === jugadorseleccionado.nombre && jugadorseleccionado.edad === jugadorseleccionado.edad && jugadorseleccionado.posicion === jugadorseleccionado.posicion) {
            jugadorExistente = true;
            break; 
        }
    }

    if (!jugadorExistente) {
        club.push(jugadorseleccionado);
    }

    console.log(club);
};

jugadores.forEach((jugador)=>{
    let div= document.createElement("div")
    div.innerHTML= `
    <h2>nombre:${jugador.nombre}</h2>
    <p>edad: ${jugador.edad}</p>
     <c>${jugador.posicion} </c>
     <button id= "boton${jugador.nombre}">adquirir jugador </button>
    `;
    contenedor.append(div);
    

let botonadquirir = document.getElementById(`boton${jugador.nombre}`);
botonadquirir.addEventListener("click", () => agregar(jugador.nombre,jugador.edad,jugador.posicion));
console.log(jugador)
})

botonincorporaciones.addEventListener("click",()=>{
    club.forEach((jugadorincorporado)=> {
        let div= document.createElement("div")
        div.innerHTML= `
        <h2>nombre:${jugadorincorporado.nombre}</h2>
        <p>edad: ${jugadorincorporado.edad}</p>
         <c>${jugadorincorporado.posicion} </c>
        `;
        document.body.append(div);  
    }); 
});