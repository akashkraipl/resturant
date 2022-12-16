import React from 'react';
import FoodCard from './FoodCard/FoodCard';
import { Container } from '@mui/system';
import Pagination from '@mui/material/Pagination';

const FoodCards = () => {
  return (
    <>
      <Container style={{ display: "flex", flexWrap: "wrap" }} >
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </Container>
      <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10vh" }}>
        <Pagination count={10} variant="outlined" color="primary" />
      </Container>
    </>
  )
}

export default FoodCards
