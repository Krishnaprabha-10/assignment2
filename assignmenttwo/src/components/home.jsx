import React,{useState} from 'react';
import Navbar from './navbar';
import './home.css';

function Home(){
    const [color, setcolor] = useState(["yellow text"]);


    return(
        <div className="homeScreen">
            <Navbar/>
            <h1 className="header">Hitchhiking logo is in {color}!</h1>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal <br/>manera que logró hacer un libro de textos especimen. <br/>No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, <br/>y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, <br/>el cual incluye versiones de Lorem Ipsum.
            </p>
            <br/>
            <img src="https://www.shutterstock.com/vectors" alt="hitching"/>
            <br/>
            <a href="https://www.shutterstock.com/">link of the imagesite</a>
                    </div>
    );
}
export default Home;