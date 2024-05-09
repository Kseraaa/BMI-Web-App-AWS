import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faChartPie} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import './hover-underline.css';

const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigate = useNavigate();

return (
            <AppBar position="static" color='grey'>
                <Container maxWidth="x1">
                    <Toolbar disableGutters>

                            {/* FANCIER button */}
                            <Button 
                                onClick={() => {navigate("/home");}}
                            >
                                <Avatar
                                    sx={{ width: 70, height: 65 }}
                                    variant="square"
                                    src="/img/BMI-1-green-rmbg.png"
                                />
                        
                                <Typography
                                    variant="h4"
                                    noWrap
                                    color="black"
                                    fontWeight="600">
                                    <div>BMI Calculator</div>
                                </Typography>

                            </Button> 

                        {/* Box for menu (when minimized window) */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            {/* menuicon */}
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                            {/* menu */}
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/analyze");}}>
                                        <Typography textAlign="center" color="black">ANALYZE<FontAwesomeIcon icon={faChartPie}></FontAwesomeIcon></Typography>
                                    </Box>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/contact");}}>
                                        <Typography textAlign="center" color="black">CONTACT<FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon></Typography>
                                    </Box>
                                </MenuItem>
                            </Menu>
                        </Box>

                        {/* box for app bar buttons */}
                        <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }}} className="hover-underline">
                                <nav>
                                    <a href='/analyze'><div className='font-nav'>ANALYZE <FontAwesomeIcon icon={faChartPie}></FontAwesomeIcon></div></a>
                                    <a href='/contact'><div className='font-nav'>CONTACT <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon></div></a>
                                </nav>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
    );
}
export default NavBar;
