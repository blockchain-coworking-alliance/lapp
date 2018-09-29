import React from 'react';
import PropTypes from 'prop-types';

import ImageAvatar from './ImageAvatar';
import blue from '@material-ui/core/colors/blue';

import nonceLogo from '../../resource/space_nonce.png';
import hashhubLogo from '../../resource/space_hashhub.jpg';
import starfishLogo from '../../resource/space_Starfish_Logo_Horizontal Network-100.jpg';

import aliciaMaintainer from '../../resource/maintainer_alicia.jpg';
import kojiMaintainer from '../../resource/maintainer_koji.jpg';
import seeunMaintainer from '../../resource/maintainer_seeeun.jpg';
import cryptomangnaniManintainer from '../../resource/maintainer_cryptomangnani.jpeg';

import {
  Paper,
  Grid,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import MediaCard from './MediaCard';

const styles = theme => ({
  profile: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
  },
  jumbotron: {
    padding: '1em',
    marginBottom: '1em',
    backgroundColor: blue[50],
  },
  section: {
    padding: '1em',
    marginBottom: '1em',
  },
  row: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

const About = (props) => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.jumbotron}>
        <Typography
          variant="display1"
          component="h1"
        >
          Catalyst Blockchain Alliance
        </Typography>
        <Typography
          component="p"
        >
          We are Catalyst, a group of ecosystem builders around the globe who build blockchain coworking spaces and are experimenting with new models of autonomous incubation and collaborative networks. Our vision is to work together across different regions to propel the growth of new technology in the blockchain space, as well as promote community led initiatives for more openness and a decentralized future.
        </Typography>
      </Paper>

      <div className={classes.section}>
        <Typography
          variant="headline"
          component="h1"
        >
          Hub
        </Typography>
        <Typography
          component="p"
        >
          Starfish Network, a pioneering blockchain hub in San Francisco has defined a “hub” for blockchain communities as an openly accessible network and physical space that enables collaboration, learning, and innovation. A hub is a protocol-agnostic, community of communities.
        </Typography>

        <Grid container className={classes.profile} spacing={16}>
          <MediaCard
            sm={4} xs={12}
            title='HashHub'
            description={
              <Typography component="p">
                At HashHub, we are committed to taking blockchain to the next stage. We aim to nurture quality blockchain projects and technology and become the hub linking Japan and the rest of the world. HashHub not only provides support for resident projects, but also assembles an in-house development team to deliver cutting edge projects ourselves, taking the initiative and leading by example.
              </Typography>
              }
            logo={hashhubLogo}
            website='https://hashhub.tokyo/en'
          />
          <MediaCard
            sm={4} xs={12}
            title='nonce'
            description={
              <Typography component="p">
                nonce is a distributed network of independent business units and self-sovereign individuals dedicated to blockchain and humans. As revolutionary as blockchain technology is, we need a revolutionary way of living and working. We are a community operating out of a open (re)source co-living, co-working space in Korea. Our mission is to curate, connect, cultivate trustworthy people building trustless technologies - future rebels who stay true to decentralization.
              </Typography>
            }
            logo={nonceLogo}
            website='https://nonce.community/'
          />
          <MediaCard
            sm={4} xs={12}
            title='Starfish'
            description={
              <Typography component="p">
                Starfish Network builds blockchain hubs, learning networks and new incubation structures. The organization launched their location "Starfish Mission" in San Francisco in April of 2018. Starfish Mission features a coworking community, 20+ impact-driven monthly industry events, developer training bootcamps, advisory services and resources for blockchain builders and leaders. The Starfish Network is also expanding its web of hubs to Berlin and Los Angeles.
              </Typography>
            }
            logo={starfishLogo}
            website='https://www.starfish.network/'
          />
          {/* <MediaCard /> */}
        </Grid>
      </div>

      <div className={classes.section}>
        <Typography
          variant="headline"
          component="h1"
        >
          Maintainers
        </Typography>
        {/* <Typography
          component="p"
        >
          We are the “Open network initiative”(temp name), an alliance of blockchain focused co-working spaces and incubation centers in Asia and America. Our vision is to work together across different regions to push the new technology in the blockchain space forward as well as promote community lead initiatives for more openness and decentralized future.
        </Typography> */}

        <Grid container className={classes.profile} spacing={16}>
          <MediaCard
            sm={3} xs={12}
            logo={kojiMaintainer}
            title='Koji Higashi'
            description={
              <React.Fragment>
                <Typography component="p">
                  Working in the cryptocurrency space full-time since 2014 after developing an interest in Bitcoin.
                </Typography>
                <br />
                <Typography component="p">
                  Not only active in blockchain media/project operations in Japan, but also involved in the development of token-based services and is known as a token economy pioneer in Japan. Graduated UC Berkeley in 2012.
                </Typography>
              </React.Fragment>
              }
            twitter='https://twitter.com/Coin_and_Peace'
            website='https://www.kojihigashi.info/'
            linkedin='https://www.linkedin.com/in/koji-higashi-14434a154/'
          />
          <MediaCard
            sm={3} xs={12}
            logo={seeunMaintainer}
            title='See Eun Ha'
            description={
              <React.Fragment>
                <Typography component="p">
                  Co-Founder of nonce and CEO of Studio Decentral (formerly The Blockchainers), the first Korean blockchain/cryptocurrency media.
                </Typography>
                <br />
                <Typography component="p">
                  Blockchain/Cryptocurrency and Hip-Hop till infinity. 100% human and a citizen of planet Earth.
                </Typography>
              </React.Fragment>
            }
            twitter='https://twitter.com/s3unha'
            website='http://dpsyphle.ninja/'
            linkedin='https://www.linkedin.com/in/see-eun-ha'
          />
          <MediaCard
            sm={3} xs={12}
            logo={aliciaMaintainer}
            title='Alicia Ferratusco'
            description={
              <React.Fragment>
                <Typography component="p">
                  Alicia is the co-founder and growth lead at Starfish, an collaborative and educational ecosystem dedicated to accelerating the growth of the blockchain industry.
                </Typography>
                <br />
                <Typography component="p">
                  Designing and building out Starfish’s infrastructure allows Alicia to combine her expertise in strategic consulting with a passion for sustainability and decentralization.
                </Typography>
              </React.Fragment>
            }
            twitter='https://twitter.com/realaliciafe'
            linkedin='https://www.linkedin.com/in/aliciaferratusco/'
          />
          <MediaCard
            sm={3} xs={12}
            logo={cryptomangnaniManintainer}
            title='Crypto Mangnani'
            description={
              <Typography component="p">
                 Speaker of Lore, resident of nonce. Eager to listen and learn!
              </Typography>
            }
            website='https://medium.com/@cryptomangnani'
          />
        </Grid>
      </div>

      <div className={classes.section}>
        <Typography
          variant="headline"
          component="h1"
        >
          Contributors
        </Typography>
        <Typography
          component="p"
        >
          contribution needed
        </Typography>

        {/* <div className={classes.row}>
          <ImageAvatar />
          <ImageAvatar />
          <ImageAvatar />
          <ImageAvatar />
          <ImageAvatar />
          <ImageAvatar />
        </div> */}
      </div>
      <hr />
    </div>
  )
}


About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
