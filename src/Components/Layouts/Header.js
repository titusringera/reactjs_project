
import React,{useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import { IconContext } from 'react-icons';
import '../Navbar.css';
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:  '#3f51b5'
  },
    grow: {
      flexGrow: 1,
    },
    appMain: {
      marginLeft:'250px',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      left: '250px',
      width: '250px',
      height: '100%',
      backgroundColor: '#3f51b5'
    
  },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginLeft:'10%',
    // display: 'none',
    width:'20em',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    
    searchInput: {
        opacity: '1.6',
        
        padding: `5px ${theme.spacing(1)}px`,
        fontSize: '1.2rem',
        //width:'400px',
        color:'white',
        '&:hover': {
            backgroundColor: 'white',
            color:'black'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        },
        borderRadius: 10
    },
    mymenu: {borderRadius: 10,
      padding: `0px ${theme.spacing(0.2)}px`,
      color:'white',
      '&:hover': {
          backgroundColor: 'white',
          color:'black'
      },
      
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

  
}));
   
    function Header() {
      const classes = useStyles();
      const [sidebar, setSidebar] = useState(false);
    
      const showSidebar = () => setSidebar(!sidebar);
     
      const [anchorEl, setAnchorEl] = React.useState(null);
      const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    
      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
      const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
      };
    
      const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
      };
    
      const menuId = 'primary-search-account-menu';
      const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
      );
    
      const mobileMenuId = 'primary-search-account-menu-mobile';
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );
    return (
      <IconContext.Provider value={{ color: '#fff' }}>
        <AppBar position="static" className={classes.root}>
           
   
            <Toolbar>
                <Grid container
                    alignItems="center">
                      <Grid item>
                        <Link to='#' className='menu-bars'>
                          <FaIcons.FaBars onClick={showSidebar} 
                          />
                        </Link>
                      </Grid>
                      <Grid item sm></Grid>
                    <Grid item>
                          <InputBase
                              placeholder="Search Engineer"
                              className={classes.searchInput}
                              startAdornment={<SearchIcon fontSize="small" />}
                          />
                      </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="large" className={classes.mymenu} />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize="large"className={classes.mymenu} />
                            </Badge>
                        </IconButton>
                        <IconButton>
                        
                            <SettingsPowerIcon className={classes.mymenu} fontSize="large" color="action" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
         
   
   
        </nav>
        </AppBar>
        </IconContext.Provider>
    );
    }
    export default Header;