import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

function ImageAvatar(props) {
  const { classes } = props;
  return (
    <Avatar
      alt="Adelle Charles"
      src="https://dummyimage.com/64x64/000/fff"
      className={classes.avatar}
    />
  );
}

ImageAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatar);
