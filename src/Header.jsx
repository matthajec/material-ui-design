import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>Qui dolore nostrud ipsum ut elit ullamco</Typography>
        <IconButton color="inherit" aria-label="brrr cold">
          <AcUnitIcon />
        </IconButton>
      </Toolbar>
    </AppBar >
  );
};


export default Header;