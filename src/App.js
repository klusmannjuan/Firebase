import React,{useEffect} from "react";
import { collection, getDocs } from "firebase/firestore"; 
import db from "./firebase/firebaseConfig";


const App = () => {

    useEffect(() => {

        const obtenerDatos = async() => {
        const datos = await getDocs(collection(db, 'usuarios'));
        datos.forEach((documento) => {
            console.log(documento.data());
        });

        }

        obtenerDatos();
    }, []);

    return (
        <h1>Firebase</h1>
    );
}

export default App;