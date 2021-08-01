import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Icon, Tabs, Tab, Fade, AppBar, Toolbar,
  Paper, List, ListItem, ListItemText, IconButton
} from '@material-ui/core';
import logo from "../../../images/appBar/logo.png"
import { useHistory } from 'react-router-dom';


const NavigationItems = [
  { label: 'About', path: '/' },
  { label: 'Location', path: '/location' },
];

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: "#000000a6"
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: {
    padding: 0,
    minHeight: 'fit-content'
  },
  logo: {
    width: 200,
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(2),
      width: 150
    }
  },
  indicator: {
    backgroundColor: "#00aeef",
  },
  tabRoot: {
    minWidth: 0,
    opacity: 1,
    color: '#fff',
    fontSize: '16px',
    fontWeight: 200,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    '&:hover': {
      color: "#00aeef"
    }
  },
  selectedTab: {
    backgroundColor: "#00aeef",
    '&:hover': {
      color: "#fff"
    }
  },
  paper: {
    backgroundColor: "#000000a6",
    borderRadius: 0,
  },
  container: {
    position: "fixed",
    [theme.breakpoints.up('md')]: {
      marginTop: '60px',
    },
    marginTop: '47px',
    width: '100%'
  },
  listroot: {
    color: '#fff',
    '&$selected': {
      backgroundColor: "#00aeef",
      '&:hover': {
        color: '#fff',
        backgroundColor: "#00aeef",
      }
    },
    '&:hover': {
      color: "#00aeef",
    }
  },
  selected: {}
}));

export default function CustomAppBar() {

  const classes = useStyles();

  const router = useHistory();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(false);

  const [tabindex, setIndex] = React.useState(0);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(false);
  };

  const handleMobileMenuOpen = () => {
    if(mobileMoreAnchorEl === true) {
      setMobileMoreAnchorEl(false);
    }else {
      setMobileMoreAnchorEl(true);
    }
    
  };

  const renderMobileMenu = (
    <div className={classes.container}>
      <Fade in={mobileMoreAnchorEl}>
        <Paper elevation={10} className={classes.paper}>
          {NavigationItems.map((item, index) => (
            <List key={index}>
              <ListItem button
                selected={tabindex === index}
                onClick={() => { router.push(item.path); handleMobileMenuClose(); setIndex(index); }}
                classes={{ root: classes.listroot, selected: classes.selected }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            </List>
          ))}
        </Paper>
      </Fade>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={11}>
            <Toolbar className={classes.toolbar}>
              <img src={logo} alt="logo" className={classes.logo} />
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Tabs
                  value={tabindex}
                  onChange={(e, newValue) => {
                    setIndex(newValue);
                    const nav = NavigationItems[newValue];
                    router.push(nav.path);
                  }}
                  classes={{
                    indicator: classes.indicator,
                    flexContainer: classes.tabsFlexContainer,
                  }}
                >
                  {NavigationItems.map((item, index) => (
                    <Tab
                      key={index}
                      label={item.label}
                      classes={{
                        root: classes.tabRoot,
                        selected: classes.selectedTab,
                      }}
                    />
                  ))}
                </Tabs>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton onClick={() => handleMobileMenuOpen()} color="inherit">
                  <Icon>reorder</Icon>
                </IconButton>
              </div>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
