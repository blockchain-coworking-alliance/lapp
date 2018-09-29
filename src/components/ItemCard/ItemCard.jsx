import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 345,
    height: 310,
    '&:hover': {
      boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

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

function ItemCard(props) {
  const { classes, tags } = props;
  const imageUrl = props.thumbnail || `https://dummyimage.com/600x400/ffffff/000000&text=${props.name}`;
  const tagList = tags.split(', ');
  return (
    <Grid item lg={2} sm={4} xs={6}>
      <Link to={`/lapps/${props.name}`} style={{ textDecoration: 'none' }}>
      <Card className={classes.card}>
        <CardHeader
          style={{ backgroundColor: COLOR_SET[tagList[0]]}}
          title={
            <div>
              <Typography variant="subheading" component="h2">
                {props.name}
              </Typography>

            </div>
          }
        />
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            {props.summary}
          </Typography>
        </CardContent>
      </Card>
      </Link>
    </Grid>
  );
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  summary: PropTypes.string,
  thumbnail: PropTypes.string,
  category: PropTypes.string,
  tags: PropTypes.string,
};

ItemCard.defaultProps = {
  name: 'Loading...',
  summary: 'Loading...',
  thumbnail: 'https://dummyimage.com/600x400/ffffff/000000&text=Loading',
  category: 'Lastest',
  tags: '',
}

export default withStyles(styles)(ItemCard);
