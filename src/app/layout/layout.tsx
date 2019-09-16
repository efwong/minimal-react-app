import * as React from 'react';
import { Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Home from '../home/home';
import About from '../about/about';
import { Route } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';

export default function Layout() {
  // const classes = useStyles();
  // state = { :  }
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const drawer = (
    <ClickAwayListener onClickAway={handleDrawerClose}>
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>App Name</Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant='persistent' anchor='left' open={open}>
          <div>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem
              button
              component={Link}
              to='/'
              onClick={handleDrawerClose}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem
              button
              component={Link}
              to='/about'
              onClick={handleDrawerClose}
            >
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary='About' />
            </ListItem>
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))} */}
          </List>
        </Drawer>
      </div>
    </ClickAwayListener>
  );

  return (
    <BrowserRouter>
      <div>
        {drawer}
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </div>
    </BrowserRouter>
    // <div>
    //   layout
    //   <div>
    //     <Button variant='contained' color='primary'>
    //       Hello World
    //     </Button>
    //   </div>
    // </div>
  );
}
