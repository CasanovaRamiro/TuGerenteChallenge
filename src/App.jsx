import { useEffect, useState } from "react";
import "./App.css";
import itemList from "./assets/items.json";
import Search from "./components/Search/Search";
import ItemsContainer from "./components/ItemsContainer/ItemsContainer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

function App() {
  const [display, setDisplay] = useState(false);
  const [pageNumber, setPageNumber] = useState(20);
  const [users, setUsers] = useState([]);
  const [list, setList] = useState(users);

  //Reference to firestore collection
  const firestoreUserRef = collection(db, "users");

  //fetches Data from db
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(firestoreUserRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  console.log(users);
  //Modifies page number that will reflect on the number of items displayed
  const handlePagination = () => {
    if (pageNumber + 20 < list.length) {
      setPageNumber(pageNumber + 20);
    } else if (pageNumber > list.length || pageNumber + 5 > list.length) {
      setPageNumber(list.length);
    }
  };

  //Dispatches event when scrolling at the end
  //Used to add more items each time
  const handleScroll = (e) => {
    // console.log(e.target.documentElement.scrollTop);
    // console.log(window.innerHeight);
    // console.log(e.target.documentElement.scrollHeight);
    // console.log(Math.ceil(e.target.documentElement.scrollTop + window.innerHeight) );
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      handlePagination();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [pageNumber, list, users]);

  //  Filters arr of objects by query
  const handleSearch = (query) => {
    if (!query || query === "") {
      setList(users);
    } else {
      console.log(query);
      console.log(
        users.filter((e) =>
          e.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
      );
      setList(
        users.filter((e) =>
          e.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
      );
    }
  };
  return (
    <div className="App">
      <div
        className="container"
        onClick={() => {
          setDisplay(!display);
          setPageNumber(20);
        }}
      >
        <span>Drop Down Menu</span>
        <span style={{ marginLeft: "15px" }}>
          <strong>v</strong>
        </span>
      </div>
      {display && <Search handleSearch={handleSearch} />}

      {display && <ItemsContainer pageNumber={pageNumber} itemsList={list} />}
    </div>
  );
}
/**
Desarrollar usando reactjs un componente de tipo dropdown (o combobox)

CHECK- Al desplegarlo consultará a un servicio de firebase 
  buscando coincidencias según el texto escrito 
  (o sin filtro, en caso de que no se haya escrito texto).


CHECK- El modelo en firebase consistirá de los siguientes atributos:
  1. nombre
  2. razón social
  3. nit
  4. teléfono
  5. código


CHECK - Debe solicitar resultados paginados de 20 en 20, 
  y solo deberá traer la siguiente página cuando se esté 
  scrolleando cerca al final de la lista actual de resultados.


CHECK - Debe permitir parametrizar por qué atributo del objeto se buscará.
 La parametrización se debe hacer por código, no en tiempo de ejecución


CHECK- El primer resultado del dropdown debe ser una opción fija que al 
  darle click levante un pequeño pop-up, parte del componente, 
  que permita agregar un nuevo objeto con el texto ya ingresado, 
  pero permitiendo editarlo antes de guardar también.


- El proyecto debe correrse en un contenedor de docker
- Adjuntar también dentro del repositorio, capturas de pantalla de la solución funcionando
 */

export default App;
