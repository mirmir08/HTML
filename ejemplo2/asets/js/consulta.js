
//let contenido = '<span style="background-color:BLUE;">HOLA MUNDA</span>';

//contenedor.innerHTML= contenido;


function consultar(){
    const pagSelected = document.getElementById("numeropagina");
    const numPage= pagSelected.value;


    fetch ("https://reqres.in/api/users?page=" + numPage)
        .then((response) => response.json())
        .then((usuarios) => mostrarusuarios(usuarios));
}


function mostrarusuarios(users){
    let contenedor= document.getElementById("contenedor");
    contenedor.innerHTML="";


    users.data.forEach(element => {
        let usuario = ` <selection class="usuarios">
                            <div class="tarjeta">
                                <h3>${element.id}</h3>
                                <img src="${element.avatar}" alt="">
                                <div>${element.email}</div>
                                <div>${element.first_name}</div>
                                <div>${element.last_name}</div>
                                <div>${element.email}</div>
                            
                            
                            </div>
        
        
                        </selection>
                        
        `;

        contenedor.innerHTML += usuario;
        
    });

}