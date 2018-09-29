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
  const { _tag } = props.match.params;

  console.log(props.items, _tag);
  const items = props.items.filter(item => {
    const tagList = item.tags.split(', ');
    console.log(tagList, _tag, tagList.includes(_tag));
    return tagList.includes(_tag);
  });

  return (
    <div>
      <Typography
        component='h1'
        variant='display3'
        gutterBottom
      >
        {_tag}
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
            category={item.temp_tag}
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
