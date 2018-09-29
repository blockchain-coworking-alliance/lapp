import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Icon,
} from '@material-ui/core';
import logo from '../../resource/logo_lapp_island.jpg';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    textDecoration: 'none',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navButton: {
    color: 'white',
  },
  navLinkWrapper: {
    textDecoration: 'none',
  }
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.flex} style={{color: 'white'}}>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <Icon>flash_on</Icon>
              Lapp Island
            </Typography>
          </Link>
          <NavLink
            to="/about"
            className={classes.navLinkWrapper}
          >
            <Button className={classes.navButton}>
              About
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Navbar));
