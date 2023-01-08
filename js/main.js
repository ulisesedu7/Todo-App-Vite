// Imports de nuestro modulos
import Items from "./modules/add-remove.js";
import ToDoItem from "./modules/item-constructor.js";
import LocalStorage from "./modules/local-storage.js";

// Imports de los estilos
import '../assets/styles/style.scss';


// Constantes iniciales
const main = document.getElementById('main');
const form = document.getElementById('form');

const inputDescription = document.getElementById('todo-item');

const itemsContainer = document.getElementById('todo-cont');

// Llamar data si existe en cuando cargue la pagina
Items.displayItems();

// Evento de escucha de la forma
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Evento de escucha main para ingresar elementos
main.addEventListener('keypress', (e) => {
  // Obtener los valores
  const description = inputDescription.value;

  // Validacion
  if(description == '') {
     // Vacia por ahora para luego llamar la funcion validadora
  }

  // Mandar los valores
  if(e.key === 'Enter' && description != '') {
    const item = new ToDoItem(false, description);

    // Agrear un nuevo todo
    Items.addItem(item);

    // Agregarlo al Local Storage
    LocalStorage.addItem(item);

    // Limpiar la input
    Items.clearInput();
  }
});

// Evento de escucha para remover elementos
itemsContainer.addEventListener('click', (e) => {
  // Remover Elemento
  if(e.target.classList.contains('remove')){
    Items.removeItem(e.target);

    LocalStorage.removeItem(
      e.target.parentElement.previousElementSibling.lastElementChild.textContent,
    );
  }
});
