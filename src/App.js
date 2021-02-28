import React from "react";
import { Grid } from "@material-ui/core";
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <Grid container direction="column" spacing={5} >
      <Grid item container>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8}>
          <Content />
        </Grid>
        <Grid item xs={1} md={2} />
      </Grid>
    </Grid >
  );
}

export default App;
