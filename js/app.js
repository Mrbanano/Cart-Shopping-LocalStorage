//variables 
const car = document.getElementById('carrito');
const course = document.getElementById('lista-cursos');
const listCourse = document.querySelector('#lista-carrito tbody');
const emptyCarBtn = document.getElementById('vaciar-carrito');

//listener 
EventListener();


function EventListener(){
    //add car
    course.addEventListener('click',addCar);
    //delete car 
    car.addEventListener('click',deleteCar);
    //empty car 
    emptyCarBtn.addEventListener('click',emptyCar);
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
            <img src="${course.imagen}" width=100/>
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

//delete car 

function deleteCar(e){
    e.preventDefault();
    
    let couse;
    if (e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
    }
}

//empty car 
function emptyCar(){
    while(listCourse.firstChild){
        listCourse.removeChild(listCourse.firstChild);
    }
}
