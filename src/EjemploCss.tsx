import AppCSS from './App.module.css'

export default function EjemploCss(){

    const subtitlo = "Esto es un subtitulo";

    const duplicar = (valor : number) => valor * 2 ;

    const imgURL = "https://cdn.pixabay.com/photo/2022/12/26/19/57/champagne-7679665_960_720.jpg";

    const cuadradoAzul = {
        backgroundColor : 'blue', 
        width : '50px', 
        height: '50px', 
        marginLeft: '1rem'
    }

    return (
        <>
        <h1 className='rojo'>Hola mundo!</h1>
        <div className='cuadradoRojo'></div>
        <div style={{backgroundColor : 'green', width : '50px', height: '50px', marginLeft: '1rem'}}></div>
        <div style={cuadradoAzul}></div>
        <h3 style={{color: 'blue'}}>{subtitlo.toUpperCase()}</h3>
        
        <h4 className='color'>Index css El doble de 3 es {duplicar(3)}</h4>
        <h4 className={AppCSS.color}>App.module css El doble de 3 es {duplicar(3)}</h4>
        <div>
            <input type="checkbox" checked={true} /> Esto es un checkbox
        </div>
        <img src={imgURL} alt="img muestra" />
        </>
    )
}