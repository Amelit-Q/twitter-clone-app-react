import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { theme } from '../theme';
import './../styles/signin.scss';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    flex: '0 0 50%',
    backgroundColor: '#71C9F8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  blueSideBigTwitterIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350%',
    height: '350%',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    overflow: 'hidden',
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 25,
  },
}));

export const SignIn = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigTwitterIcon} />
        <ul className={classes.blueSideListInfo}>
          <li>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Follow your interests.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <PeopleAltOutlinedIcon className={classes.blueSideListInfoIcon} />
              Hear what people are talking about
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <ChatBubbleIcon className={classes.blueSideListInfoIcon} />
              Join the conversation.
            </Typography>
          </li>
        </ul>
      </section>

      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
          <Typography variant="h4" className={classes.loginSideTitle}>
            See what’s happening in the world right now
          </Typography>
          <Typography>
            <b>Join Twitter today.</b>
          </Typography>
          <br />
          <Button style={{ marginBottom: 10 }} variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
          <Button variant="outlined" fullWidth>
            Log in
          </Button>
        </div>
        1.24
      </section>
    </div>
  );
};
