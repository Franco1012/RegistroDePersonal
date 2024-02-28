import React from 'react';
import styled from 'styled-components';

const photos = [
    'https://media.revistaad.es/photos/642697fb4893b87ae5d53c7c/16:9/w_3999,h_2249,c_limit/Foto%20Galeria.jpg',
    'https://maderamen.com.ar/todo-madera/wp-content/uploads/sites/3/2018/01/galeria.jpg',
    'https://fotos.perfil.com/2022/10/09/trim/1280/720/galerias-cordobesas-arteba-1433382.jpg',
    'https://www.galeriaspacifico.com.ar/storage/virtual_tour_images/162614052260ecef6a3a72f60ecef6a3a732.jpg',
    'https://reconstruirhoy.com.ar/wp-content/uploads/2020/10/60-2-scaled.jpg',
    'https://indiehoy.com/wp-content/uploads/2022/07/Ignacio-Tamborenea-en-Local-de-artes-recientes.jpg',
    'https://1819.es/wp-content/uploads/2023/08/Las-Mejores-Galerias-de-Arte-Online-en-Espana.jpg',
    'https://latexmagazine.com/wp-content/uploads/2021/05/%E2%80%98SECOND-SMILE-ES-LA-EXPOSICION-VIRTUAL-DE-OBRAS-SURREALISTAS.jpg',
    // Agrega más URL de fotos aquí
];
const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-gap: 10px;
`;


const StyledImg = styled.img`
  width: 100%;
  height: 200px; /* Altura fija para todas las imágenes */
  object-fit: cover; /* Escala la imagen para que ocupe todo el contenedor manteniendo la relación de aspecto */
  border: 1px solid #ddd; /* Agrega un borde de 1px sólido con color gris */
  border-radius: 5px; /* Agrega bordes redondeados */
  transition: transform 0.3s ease; /* Agrega una transición suave al transform */
  
  &:hover {
    transform: scale(1.05); /* Aumenta ligeramente el tamaño de la imagen al hacer hover */
  }
`;


const PhotoGallery = () => {
  return (
    <GalleryContainer>
      {photos.map((photo, index) => (
        <StyledImg key={index} src={photo} alt={`Descripción de la imagen ${index}`} />
      ))}
    </GalleryContainer>
  );
};

export default PhotoGallery;
