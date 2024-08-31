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
    const body = document.querySelector('body');
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

//test

const test = document.querySelector('#tet1');

test.addEventListener('click',()=>{
    
})