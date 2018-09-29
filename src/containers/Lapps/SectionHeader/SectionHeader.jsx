import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

import {
  Button,
  Paper,
  Typography,
  Grid,
  Icon,
} from '@material-ui/core';

const styles = theme => ({
  wrapper: {
    display: 'flex',
    marginTop: theme.spacing.unit * 6,
    verticalAlign: 'text-bottom',
  },
  font: {
    fontSize: '1rem',
  }
});

const SectionHeader = (props) => {
  const { classes, title, category } = props;
  return (
    <div className={classes.wrapper}>
      <Typography variant="title">
        {`${title}`}&nbsp;
      </Typography>
      <Link to={`/lapps/category/${category}`} style={{ textDecoration: 'none' }}>
        <Typography variant="caption"  className={classes.font}>
          view all
          <Icon className={classes.icon} fontSize='inherit'>chevron_right</Icon>
        </Typography>
      </Link>
    </div>
  );
};

SectionHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(SectionHeader);
