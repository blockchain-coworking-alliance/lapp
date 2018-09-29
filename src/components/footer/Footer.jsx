import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import {
  Button,
  Paper,
  Typography,
  Grid,
  Icon,
} from '@material-ui/core';

import { Link } from 'react-router-dom'

import nonceLogo from '../../resource/space_nonce.png';
import hashhubLogo from '../../resource/space_hashhub.jpg';
import starfishLogo from '../../resource/space_Starfish_Logo_Square Main Network-100.jpg';

const styleSheet = theme => ({
  rootPaper: {
    marginTop: theme.spacing.unit * 3,
    flexGrow: 1,
    width: '100%',
  },
  root: {
    ...theme.mixins.gutters(),
    width: '100%',
    textAlign: 'center',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoItem: {
    margin: 'auto',
    width: '50%',
  }
});

function HomeFooter(props) {
  const { classes } = props;

  return (
    <Paper className={classes.rootPaper}>
      <Grid container className={classes.root} spacing={24}>
        <Grid item xs={12} className={classes.item}>
          <Typography variant="title" align="center">
            Powered by
            <Icon>flash_on</Icon>
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.item}>
          <img src={nonceLogo} className={classes.logoItem} />
        </Grid>
        <Grid item xs={4} className={classes.item}>
          <img src={hashhubLogo} className={classes.logoItem} />
        </Grid>
        <Grid item xs={4} className={classes.item}>
          <img src={starfishLogo} className={classes.logoItem} />
        </Grid>
      </Grid>
    </Paper>
  );
}

HomeFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(HomeFooter);
