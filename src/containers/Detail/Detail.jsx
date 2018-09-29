import React from 'react';
import PropTypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import {
  getItem,
  unSelectItem,
} from '../../actions/ActionCreator';

import kojiMaintainer from '../../resource/maintainer_koji.jpg';
import seeunMaintainer from '../../resource/maintainer_seeeun.jpg';

import {
  Button,
  Chip,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from '@material-ui/core';

const COLOR_SET = {
  Explorer: '#C9E8FD',
  'Merchant Service': '#FFD969',
  Wallet: '#B388FF',
  Games: '#9FA8DA',
  Media: '#FFB74D',
  Marketplace: '#65BFDA',
  Exchange: '#A99A97',
  Implementation: '#E87F6B',
  Tipping: '#FEEDC1',
  'Developer Tools': '#4FB5FF',
}

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  chip: {
    margin: theme.spacing.unit,
  },
  chipWrapper: {
    padding: theme.spacing.unit,
  }
});

class Detail extends React.Component {
  componentDidMount() {
    const lappName = this.props.match.params._lapp;
    this.props.getItem(lappName);
  }
  componentWillUnmount() {
    console.info('asdaf');
    this.props.unSelectItem();
  }

  handleNewComment(comment) {
    window.console.info(comment, `New comment posted with id ${comment.id} and message: ${comment.text}`);
  }

  renderTagChip = (tags) => {
    const { classes } = this.props;
    if (tags === '' || tags.length === 0) {
      return null;
    }

    const tagList = tags.split(', ');
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.chipWrapper}>
            {tagList.map(tag => {
              return (
                <Link to={`/lapps/tags/${tag}`} style={{ textDecoration: 'none' }}>
                  <Chip label={tag} className={classes.chip} style={{ backgroundColor: COLOR_SET[tag]}}/>
                </Link>
              )
            })}
          </Paper>
        </Grid>
      </Grid>
    )
  }

  render () {
    const {
      classes,
      selectedItem,
    } = this.props;

    if (!selectedItem) {
      return null;
    }

    const disqusShortname = 'lapp-island';
    const disqusConfig = {
      identifier: selectedItem.name,
      url: `http://lappis.land/#${this.props.match.url}`,
      title: this.props.match.params._lapp,
      onNewComment: this.handleNewComment,
    };

    return (
      <div>
        <Paper className={classes.paper}>
          <Grid container spacing={24}>
            <Grid item md={3} sm={4} xs={12}>
              <img
                style={{ width: '100%' }}
                src={selectedItem.logo || `https://dummyimage.com/600x400/ffffff/000000&text=${selectedItem.name}`}
              />
            </Grid>
            <Grid item md={9} sm={8} xs={12}>
              <Typography
                variant="headline"
                component="h4"
              >
                {selectedItem.name}
              </Typography>
              <Typography
                component="p"
                className={classes.paper}
              >
                {selectedItem.description || selectedItem.summary}
              </Typography>
              <Button
                variant="outlined"
                href={selectedItem.link}
                target={'_blank'}
                className={classes.button}
              >
                Link
              </Button>
            </Grid>
          </Grid>
        </Paper>
        {this.renderTagChip(selectedItem.tags)}
        {/* review */}
        {selectedItem.review_See_Eun || selectedItem.review_Koji ? (
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.chipWrapper}>
                {selectedItem.review_Koji ? (
                  <List>
                    <ListItem className={classes.listItem}>
                      <Avatar alt="koji's review" src={kojiMaintainer} />
                      <ListItemText primary={ selectedItem.review_Koji || 'no review yet'} />
                    </ListItem>
                  </List>
                ) : null}
                {selectedItem.review_See_Eun ? (
                  <List>
                    <ListItem className={classes.listItem}>
                      <Avatar alt="See eun's review" src={seeunMaintainer} />
                      <ListItemText primary={ selectedItem.review_See_Eun || 'no review yet'} />
                    </ListItem>
                  </List>
                ) : null}
              </Paper>
            </Grid>
          </Grid>
        ) : null}
        {/* <DiscussionEmbed
          shortname={disqusShortname}
          config={{
            identifier: selectedItem.name,
            url: `http://lappis.land/#${this.props.match.url}`,
            title: this.props.match.params._lapp,
            onNewComment: this.handleNewComment,
          }}
        /> */}
      </div>
    );
  }
}

Detail.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    selectedItem: state.items.selectedItem,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      getItem,
      unSelectItem,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Detail));
