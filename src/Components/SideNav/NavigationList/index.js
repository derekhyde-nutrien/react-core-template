import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListSubheader  from '@material-ui/core/List';
import ListItem from '@material-ui/core/List'; 
import ListItemText from '@material-ui/core/List';

import './styles.scss';

const NavigationList = (props) => {
  return (
    <List className="nav-link" component="nav" subheader={<ListSubheader component="div">Menu</ListSubheader>}>
      <ListItem component={NavLink} exact to="/" button>
        <ListItemText primary="Demo" />
      </ListItem>
    </List>
  );
}

export default NavigationList;