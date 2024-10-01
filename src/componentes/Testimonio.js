import React from 'react';

function Testimonio() {
    return (
        <div className='contenedor-testimonio'>
            <img 
                className='imagen-testimonio' // Clase opcional para estilos
								src={require('../imagenes/karina.png') }// Reemplaza con la ruta de tu imagen
                alt='foto de karina' />
            <h3 className='nombre-testimonio'>Nombre del Testigo</h3>
            <p className='texto-testimonio'>
                "Aquí va el contenido del testimonio. Una breve descripción de la experiencia que se quiere compartir."
            </p>
        </div>
    );
}

export default Testimonio;
