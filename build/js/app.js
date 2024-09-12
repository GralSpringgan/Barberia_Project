const body = document.querySelector('body');

//---------------------APARTADO CARRUSEL-------------------//


const header = document.querySelector('.section-header');


function carruselImg(){

    arrayImg.forEach((img,index)=>{
    
        setTimeout(()=>{
            header.style.backgroundImage = `url(${img.src})`;
        },index*5000);
    
    }); 
};
carruselImg();
setInterval(carruselImg,arrayImg.length*5000);


//-----------------------APARATADO IMAGENES CURSOS Y SERVICIOS------------------------//
                //....................CURSOS.........................//

const contenedorCursos =  document.querySelector('.contenedor-cursos');

imgCursos.forEach(cursos=>{
    const divCursos = document.createElement('DIV');
    divCursos.classList.add('iconos');

    const img = document.createElement('IMG');
    img.src = `${cursos.img}`;
    img.alt = `${cursos.nombre}`;
    img.id = `${cursos.id}`;
    divCursos.appendChild(img);

    const label = document.createElement('LABEL')
    label.textContent = `${cursos.descripcion}`;
    divCursos.appendChild(label);

    contenedorCursos.appendChild(divCursos);

    img.onclick=()=> describirImg(cursos);

});

                //..................Servicios........................//


const contenedorServicios = document.querySelector('.servicios-contenedor');

imgServicios.forEach( servicios =>{
    const divServicios = document.createElement('DIV');
    divServicios.classList.add('iconosServicios');

    const img = document.createElement('IMG');
    img.src = `${servicios.img}`;
    img.alt = `${servicios.nombre}`;
    img.id=`${servicios.id}`;
    divServicios.appendChild(img);

    const label = document.createElement('LABEL');
    label.textContent = `${servicios.descripcion}`;
    divServicios.appendChild(label);

    contenedorServicios.appendChild(divServicios); 

    img.onclick=()=> describirImg(servicios);

})

//.....................funcion para el modal.................//

function describirImg(curso){

    const sectorModal = document.querySelector('.contenedor-servicios');
    //creando div que funciona como modal
    const modaldiv = document.createElement('DIV');
    modaldiv.classList.add('modal-descripcion');
    sectorModal.appendChild(modaldiv);
    //le saco la posibilidad de hacer scrool al usuario
    body.style.overflow= 'hidden';

    //crando div para insertar en el modal
    const div_modal = document.createElement('DIV');
    div_modal.classList.add('contenedor-info-modal');
    modaldiv.appendChild(div_modal);
    
    //crear div para la info/descripcion/botones
    //img
    const divImg = document.createElement('DIV');
    divImg.classList.add('img-modal');
    const img_div = document.createElement('IMG');
    img_div.src = `${curso.img}`
    img_div.classList.add('icono-modal');
    divImg.appendChild(img_div);
    div_modal.appendChild(divImg);

    //info
    const divInfo = document.createElement('DIV');
    divInfo.classList.add('info-modal');
    const parrafo_div = document.createElement('P');
    parrafo_div.classList.add('parrafo-modal');
    parrafo_div.textContent = `${curso.parrafo}`
    divInfo.appendChild(parrafo_div);
    div_modal.appendChild(divInfo);

    //btn
    const divBtn = document.createElement('DIV');
    divBtn.classList.add('btn-modal');
    const btnCerrar = document.createElement('BUTTON');
    btnCerrar.classList.add('btnCerrar');
    btnCerrar.textContent = 'Cerrar'.toUpperCase();
    divBtn.appendChild(btnCerrar);
    div_modal.appendChild(divBtn);

    //eventoBTN
    btnCerrar.addEventListener('click',()=>{
        body.style.overflow= 'auto';
        modaldiv.remove();
    })

}



//................................BOTONES REDES SOCIALES....................................

//instagram
const btnInstagram = document.querySelector('.instagram');

btnInstagram.addEventListener('click',()=>{
    window.location.href = "https://www.instagram.com/samir_seiden_barberoadomicilio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
})

//facebook
const btnFacebook = document.querySelector('.facebook');

btnFacebook.addEventListener('click',()=>{
    window.location.href = 'https://www.facebook.com/samir.lezcano.7';
})

//.......................MODAL-SOCIAL...........................//
const btnWhatsapp = document.querySelectorAll('.whatsapp');
const modal_social = document.querySelector('.modal-social');
const nombreUsuario = document.querySelector('#nombre');
const seleccionServicio = document.querySelectorAll('input[name="radio"]')
const cuidadUsuario = document.querySelector('#ciudad');
const formulario = document.querySelector('.formulario');
const contenedorBtn = document.querySelector('.contenedor-btnSocial');
const btnCerrar = document.querySelector('#Cancelar');
const datosWhat = {
    nombre:'',
    servicio:'',
    ciudad:'',
    telefono: 1149608913
};


//apertura y cierre
btnWhatsapp.forEach(btn=>{
    btn.addEventListener('click',()=>{
        body.style.overflow = 'hidden';
        modal_social.style.display = 'block';
    })
})

btnCerrar.addEventListener('click',()=>{
    modal_social.style.display  = 'none';
    body.style.overflow = 'auto';
})

//formulario
nombreUsuario.addEventListener('input',(e)=>{
    datosWhat.nombre = e.target.value;
});
cuidadUsuario.addEventListener('input',(e)=>{
    const msg = `, como referencia resido en la cuidad: ${e.target.value}`
    datosWhat.ciudad = msg;
})
seleccionServicio.forEach(radio =>{
    radio.addEventListener('change',(e)=>{
        datosWhat.servicio = e.target.value;
    })
})

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    //alertas
    verificacionFormulario();

})


function verificacionFormulario(){
    let radioCheck = false;
    let alertabool = false;

    seleccionServicio.forEach(radio=>{
        if(radio.checked){
            radioCheck = true
        }
    })

    if(!radioCheck || nombreUsuario.value.trim() === ""){
        noRepetir()
        alerta(alertabool);
        return;
    }else{
        alertabool = true;
        noRepetir()
        alerta(alertabool);
       
        setTimeout(() => {
            
            //whatsapp
            const msgWhatSapp = `Hola Samir, mi nombre es ${datosWhat.nombre} y estoy interesado en ${datosWhat.servicio}${datosWhat.ciudad}`
            const codificacion = encodeURIComponent(msgWhatSapp);
            const linkWhatSapp = `https://api.whatsapp.com/send?phone=${datosWhat.telefono}&text=${codificacion}`;
    
            window.location.href = linkWhatSapp;
    
            //reset obj
            resetDatos();
        },2000);
    }
}

function resetDatos(){
    Object.values(datosWhat) ='';
    nombreUsuario.textContent = '';
    cuidadUsuario.textContent = '';
}

function alerta(validacion){
    noRepetir()

    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta');
    formulario.insertBefore(alerta, contenedorBtn);

    const alertParrafo = document.createElement('P');
    alertParrafo.classList.add('alerta-parrafo');
    alerta.appendChild(alertParrafo);

    if(!validacion){
        alertParrafo.textContent = 'El campo nombre debe estar lleno y un servicio seleccionado';
    }else{
        alerta.classList.add('exito')
        alertParrafo.textContent = 'Datos cargado correctamente';
    }
}

function noRepetir(){
    const alerta = document.querySelector('.alerta');
    if(alerta){
        alerta.remove();
    }
}



