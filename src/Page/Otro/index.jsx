/*

Crear componente que va a mostrar 3 botones con los nombres rojo, azul, amarillo.
Si yo hago click en el rojo me va a mostrar el cuadro rojo
Si yo hago click en el azul me va a mostrar el cuadro azul
Si yo hago click en el amarillo me va a mostrar el cuadro amarillo

*/

import React,{ useState } from 'react'
import './ejer.css'
const Otro = () => {
    const [show,setShow]=useState(0)
    const handleShow=(color)=>{
        setShow(color)
    }
    return (
        <div>
            <div className="contenedor">
                <button className="btn rojo" onClick={()=>handleShow(1)}>{show ===1?'viendo ROJO':'Ver Rojo'}</button>
                <button className="btn azul" onClick={()=>handleShow(2)}>{show ===2?'viendo AZUL':'ver AZUL'}</button>
                <button className="btn amarillo" onClick={()=>handleShow(3)}>{show ===3?'viendo AMARILLO':'ver AMARILLO'}</button>
                <button className="btn " onClick={()=>handleShow(8)}>limpiar</button>
            </div>
            <div className="contenedor">
                {show===1&&(<div className="cuadrado rojo">rojo</div>)}
                {show===2&&(<div className="cuadrado azul">azul</div>)}
                {show===3&&(<div className="cuadrado amarillo">amarillo</div>)}
            </div>
            
        </div>
    )
}

export default Otro
