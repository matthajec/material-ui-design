import React from 'react';
import CoffeeCard from './CoffeeCard';
import { Grid } from '@material-ui/core';
import productsData from './constants';

const Content = () => {
  return (
    <Grid container spacing={5}>
      {productsData.map((productDetails, index) => (
        <Grid item container key={index} xs={12} sm={6} md={4}>
          <Grid item xs={12}>
            <CoffeeCard {...productDetails} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;