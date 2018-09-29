import React from 'react';
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

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    flexGrow: 1,
    width: '100%',
    backgroundColor: blue[50],
  },
  item: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const BottomSection = (props) => {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Grid container spacing={24}>
        <Grid
          item
          sm={6}
          xs={12}
          className={classes.item}
        >
          <Button href='https://docs.google.com/forms/d/1J18wghG1Pd9j_3AkTgaNgCgJ5YFdEE-4PxCZ8RtNxkE/edit?usp=sharing' target='_blank'>
            <Icon>create</Icon>
            Add Lapp
          </Button>
          <Typography component="p">
            Let us know exciting Lightning Apps.
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.item}>
          <Button href="http://eepurl.com/dBJeLn" target='_blank'>
            <Icon>email</Icon>
            Subscribe
          </Button>
          <Typography component="p">
            if you would like to hear from us?
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

BottomSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomSection);
