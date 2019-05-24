import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import getRoutes from '../router';
import { withStyles } from '@material-ui/core/styles';
import Main from './Main';
//import SideNav from './SideNav';
import NavBar from './NavBar';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
});

const theme = createMuiTheme({
  palette:{
    primary:{
      main: green[700]
    }
  }
});


const Root = (props) => {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <NavBar />
        {/*<SideNav />*/}
        <Main>
          { getRoutes() }
        </Main>
      </div>
    </MuiThemeProvider>
  );
}

Root.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Root);