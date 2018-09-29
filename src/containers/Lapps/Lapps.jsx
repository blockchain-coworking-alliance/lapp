import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Button,
  Paper,
  Grid,
  Typography,
  Icon,
} from '@material-ui/core';

import AppList from './AppList';
import './Lapps.css';
import SectionHeader from './SectionHeader';
import bgImage from './background.jpg'
import banner from '../../resource/banner_lapp_island.jpg';
import banner_sm from '../../resource/banner_lapp_island-sm.jpg';

import BottomSection from '../../components/BottomSection';
import ItemCard from '../../components/ItemCard';
import HomeFooter from '../../components/footer';

const styles = theme => ({
  root: {
   position: 'relative',
  },
  textWarpper: {
    float: 'left',
    position: 'absolute',
    right: '5%',
    top: '5%',
    width: '60%',
    textAlign: 'right',
  },
  paper: {
    height: 140,
    width: '100%',
  },
  yo: {
    display: 'flex'
  },
  bannerImage: {
    width: '100%',
  }
});

class Lapps extends Component {
  render() {
    const { classes, items } = this.props;
    const lastestLapps = items.filter(item => item.temp_category !== 'Concept').reverse().slice(0, 6);
    const conceptLapps = items.filter(item => (item.temp_category === 'Concept')).reverse().slice(0, 6);
    const editorLapps = items.filter(item => (item.temp_category === 'Editor')).reverse().slice(0, 6);

    return (
      <div>
        <div className={classes.root}>
          <img id='img-lg' src={banner}  className={classes.bannerImage} />
          <img id='img-sm' src={banner_sm}  className={classes.bannerImage} />
        </div>

        <SectionHeader
          title='Lastest'
          category='Lastest'
        />
        <Grid
          container
          spacing={16}
        >
          {lastestLapps.map((item, idx) => (
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

        <SectionHeader
          title={'Editor\'s Picks'}
          category='Editor'
        />
        <Grid
          container
          spacing={16}
          className={classes.demo}
        >
          {editorLapps.map((item, idx) => (
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

        <SectionHeader
          title='Concept'
          category='Concept'
        />
        {/* <Grid
          container
          spacing={16}
          className={classes.demo}
        >
          {conceptLapps.map((item, idx) => (
            <ItemCard
              key={idx}
              name={item.name}
              summary={item.summary}
              thumbnail={item.logo}
              category={item.temp_category}
            />
          ))}
        </Grid> */}
        <BottomSection />
        <HomeFooter />
      </div>
    );
  }
}

Lapps.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array,
};

Lapps.defaultProps = {
  items: [],
}

const mapStateToProps = state => {
  return {
    items: state.items.allItems,
  };
};

export default connect(mapStateToProps, null)(withStyles(styles)(Lapps));
