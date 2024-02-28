import React from "react";
import styled from "styled-components";
import PhotoGallery from "./PhotoGallery";


const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledH1 = styled.h1`
  flex: 1 1 100%;
  text-align: center;
  font-size: 2.5rem; /* Tamaño de fuente */
  color: #333; /* Color del texto */
  margin-bottom: 20px; /* Margen inferior */
  text-transform: uppercase; /* Convertir texto en mayúsculas */
  letter-spacing: 2px; /* Espaciado entre letras */
`;
const Nosotros = () => {
  return (
    <div>
      <StyledDiv>
        <StyledH1>Nosotros</StyledH1>
      </StyledDiv>
      <PhotoGallery />
    </div>
  );
};

export default Nosotros;
