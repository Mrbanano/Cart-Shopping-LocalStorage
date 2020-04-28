//variables 
const car = document.getElementById('carrito');
const course = document.getElementById('lista-cursos');
const listCourse = document.querySelector('#lista-carrito tbody');

//listener 
EventListener();


function EventListener(){

    course.addEventListener('click',addCar);
}

//funciones 
function addCar (e){
    e.preventDefault();
    //delegation add
    if(e.target.classList.contains('agregar-carrito')){
        const course= e.target.parentElement.parentElement;
        //send data course
        readDataCouse(course);
    }
}

//leer curso

//read data course
function readDataCouse (course){
    const infoCourse ={
        imagen: course.querySelector('img').src,
        title:course.querySelector('h4').textContent,
        price: course.querySelector('.precio span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    insertCar(infoCourse);
}

//insert Car 

function insertCar(course){
    const row =  document.createElement('tr');
    row.innerHTML= `
        <td>
            <img src="${course.imagen}"/>
        </td>
        <td>
           ${course.title}
        </td>
        <td>
           ${course.price}
        </td>
        <td>
           <a href="#" class="borrar-curso" data-id="${course.id}">X</a>
        </td>
    `;
    listCourse.appendChild(row);
}




