import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="h-40">
        <div className="palette">
          <div className="color"><span>Sábado 4 de octubre, Trevelin 21 hs Calle Roca 528, Valor de las entradas: $25 mil anticipadas; 30 mil en puerta. 
            Reservas al +54 9 2945 547842,
            </span></div>

          <div className="color"><span>
            Sábado 4 de octubre, Parque Nacional Los Alerces 10hs charlas y musica folclorica Valor: $ 25 mil con inscripción, info al +54 9 2945 547842, 
            10hs Excursión Sendero El Portezuelo, desde Puerto Limonao registro previo 
            12hs Caminata sendero Pinturas Rupestres

            </span></div>
          <div className="color"><span> Domingo 5 de octubre, Esquel 19 hs Centro Cultural Melipal
            Función del Ciclo de Cine y Filosofía “Lo que una imagen puede”. 
            Se proyectará la película “El país de las maravillas”, de Alice Rohrwacher
            </span></div>
          <div className="color"><span> Lunes 6 de octubre, Esquel 19 hs Hotel Sol del Sur
            Charla informativa: Herramientas de gestión para emprendimientos turísticos. 
            Invita: Tecnicatura Superior en Turismo, ISET 815 </span></div>
          <div className="color"><span>Martes 7 de octubre, Esquel 19 hs Edificio de Aulas de la Sede Esquel de la UNPSJB</span></div>
        </div>
        <div className='h-150'>
          <span className='bg-blue-200'>ACTIVIDADES DEL DIA DEL TURISMO!!!</span>
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
            <path d="M4 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S5.5 9.83 5.5 9 4.83 7.5 4 7.5zm10 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5z" />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    height: 100px;
    width: 1250px;
    border-radius: 1em;
    overflow: hidden;
    box-shadow: 0 10px 20px #dbdbdb;
    font-family: sans-serif;
  }

  .palette {
    display: flex;
    height: 86%;
    width: 100%;
  }

  .color {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    transition: flex 0.1s linear;
  }

  .color span {
    opacity: 0;
    transition: opacity 0.1s linear;
  }

  .color:nth-child(1) {
    background: #264653;
  }

  .color:nth-child(2) {
    background: #2a9d8f;
  }

  .color:nth-child(3) {
    background: #e9c46a;
  }

  .color:nth-child(4) {
    background: #f4a261;
  }

  .color:nth-child(5) {
    background: #e76f51;
  }

  .color:hover {
    flex: 2;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .color:hover span {
    opacity: 1;
  }

  #stats {
    height: 14%;
    width: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5em;
    box-sizing: border-box;
    color: #bebebe;
  }

  #stats svg {
    fill: #bebebe;
    transform: scale(1.2);
  }`;

export default Card;
