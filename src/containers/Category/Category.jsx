import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Button,
  Paper,
  Grid,
  Typography,
} from '@material-ui/core';

import ItemCard from '../../components/ItemCard';
import BottomSection from '../../components/BottomSection';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  paper: {
    height: 140,
    width: '100%',
  },
  yo: {
    display: 'flex'
  }
});

const title = {
  Lastest: 'Lastest',
  editor: 'Editor\'s Picks',
  Concept: 'Concepts',
};

const Category = (props) => {
  const { classes } = props;
  const { _category } = props.match.params;

  let items = [];
  if (_category === 'Lastest') {
    items = props.items;
  } else {
    items = props.items.filter(items => items.temp_category === _category);
  }

  return (
    <div>
      <Typography
        component='h1'
        variant='display3'
        gutterBottom
      >
        {title[_category]}
      </Typography>

      <Grid
        container
        spacing={16}
        className={classes.demo}
      >
        {items.map((item, idx) => (
          <ItemCard
            {...item}
            key={idx}
            name={item.name}
            summary={item.summary}
            thumbnail={item.logo}
            category={item.temp_category}
          />
        ))}
      </Grid>
      <BottomSection />
    </div>
  );
};


const mapStateToProps = state => {
  return {
    items: state.items.allItems,
  };
};

export default connect(mapStateToProps, null)(withStyles(styles)(Category));
