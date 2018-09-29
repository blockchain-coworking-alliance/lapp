import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Icon,
} from '@material-ui/core';

const styles = {
  card: {},
  media: {
    height: 0,
    paddingTop: '100%',
    backgroundSize: '100%',
  },
  icon: {

  }
};

function MediaCard(props) {
  const {
    classes,
    title,
    description,
    logo,
    sm,
    xs
  } = props;
  return (
    <Grid item sm={sm} xs={xs}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          {description}
        </CardContent>
        <CardActions>
          {props.website && (
            <Button size="small" color="primary" href={props.website} target='_blank'>
              <Icon
                className={classNames(classes.icon, 'fa fa-home')}
              />
            </Button>
          )}
          {props.linkedin && (
            <Button size="small" color="primary" href={props.linkedin} target='_blank'>
              <Icon
                className={classNames(classes.icon, 'fa fa-linkedin')}
              />
            </Button>
          )}
          {props.twitter && (
            <Button size="small" color="primary" href={props.twitter} target='_blank'>
              <Icon className={classNames(classes.icon, 'fa fa-twitter')} />
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

MediaCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.node,
  classes: PropTypes.object.isRequired,
  website: PropTypes.string,
  linkedin: PropTypes.string,
  tweeter: PropTypes.string,
  sm: PropTypes.number,
  xs: PropTypes.number,
};

MediaCard.defaultProps = {
  title: '',
  description: '',
  website: '',
  linkedin: '',
  tweeter: '',
  sm: 3,
  xs: 12,
};

export default withStyles(styles)(MediaCard);
