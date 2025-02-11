import React, { useState } from "react";
import styled from "styled-components";
import backgroundprods from '../../Assets/backgroundprods.jpg';

// Definimos las categorías
const categories = [
  "Todos",
  "Guantes",
  "Vendas",
  "Remeras",
  "Pantalones",
  "Botellas",
  "Cascos",
  "Varios",
];

// Productos de ejemplo
const products = [
  {
    id: 1,
    name: "Guantes Pro Series",
    price: "$89.99",
    image: "https://http2.mlstatic.com/D_NQ_NP_802931-MLA81869721975_012025-O.webp",
    category: "Guantes",
  },
  {
    id: 2,
    name: "Vendas Premium",
    price: "$24.99",
    image: "https://http2.mlstatic.com/D_NQ_NP_765776-MLA51655301143_092022-O.webp",
    category: "Vendas",
  },
  {
    id: 3,
    name: "Botella Proyec",
    price: "$29.99",
    image: "https://sportotalar.vtexassets.com/arquivos/ids/487528/250-19192-NEGRO_1.png?v=638405750615230000",
    category: "Botellas",
  },
  {
    id: 4,
    name: "Casco RDX",
    price: "$70.99",
    image: "https://wholesale.rdxsports.com/hubfs/head%20guard%205-min-1.png",
    category: "Cascos",
  },
 {
    id: 5,
    name: "Pantalon RDX",
    price: "$70.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlsjGLOZCGcyWk67eGRcvo6DEpzfy12AsJjQ&s",
    category: "Pantalones",
  },
  {
    id: 6,
    name: "Remera",
    price: "$40.99",
    image: "https://http2.mlstatic.com/D_NQ_NP_878223-MLA53567058497_022023-O.webp",
    category: "Remeras",
  },
];

// Styled Components
const Section = styled.section`
  background: url(${backgroundprods}) no-repeat center center/cover;
  padding: 3rem 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: yellow;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

const ProductCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 25rem;
  display:flex;
  justify-content:center;
   align-items:center;
   flex-direction: column;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 15px;
  border:1px solid black;
`;

const ProductName = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
  width:100%;
  padding-bottom:10px;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #28a745;
  font-weight: bold;
`;

const CategoryFilter = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 15px;
  margin-bottom: 2rem;
  padding-bottom: 10px;
  width: 100%;
  max-width: 1200px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background:rgb(100, 100, 100);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
   
  }
`;

const CategoryButton = styled.button`
  background: ${(props) => (props.active ? "yellow" : "black")};
  color: ${(props) => (props.active ? "black" : "white")};
  border: 2px solidrgb(238, 255, 0);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: bold;
  white-space: nowrap;
  margin-bottom:5px;
  

  &:hover {
    background:yellow;
    color: black;
    border-color:rgb(255, 255, 255);
  }
`;

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <Section>
      <Title>Nuestros Productos</Title>

      {/* Filtro de Categorías */}
      <CategoryFilter>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryFilter>

      {/* Grid de Productos */}
      <Grid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductCard>
        ))}
      </Grid>
    </Section>
  );
}