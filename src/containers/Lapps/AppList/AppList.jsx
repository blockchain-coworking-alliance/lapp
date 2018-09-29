import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: '10px',
  },
  listItem: {
    width: '100%'
  },
});

class AppList extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Paper>
        <List className={classes.root}>
          {[0, 1, 2, 3,0, 1, 2, 3,0, 1, 2, 3,0, 1, 2, 3].map(value => (
            <ListItem
              key={value}
              dense
              button
              className={classes.listItem}
              component={Link}
              to={`/lapps/${value}`}
            >
              <Avatar alt="Remy Sharp" src="https://dummyimage.com/120x120/000/fff" />
              <ListItemText primary={`Line item ${value + 1}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  }
}

AppList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppList);
