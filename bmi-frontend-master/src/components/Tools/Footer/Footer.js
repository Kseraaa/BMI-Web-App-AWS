import { Container, Box } from '@mui/material';
import React from 'react';
import './Footer.css'
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components'

function FooterBar() {
    return(
            <div className="main-footer">
            <div className='container'>
                <div className='row'>
                    <table width="100%">
                        <tr>
                            {/* column1 */}
                            <td>
                            <Container maxWidth="auto">
                                    <div className='col'>
                                        <h2>Contact Us</h2>
                                        <ul className='list-unstyled'>
                                            <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
                                                <Avatar
                                                    sx={{ width: 180, height: 150 }}
                                                    variant="square"
                                                    src="/img/BMI-1-green-rmbg.png"
                                                />
                                            </Box><br/>
                                        </ul>
                                    </div>
                            </Container>
                            </td>

                            <td>
                            <Container maxWidth="auto">
                                    <div className='col'>
                                        <ul className='list-unstyled'>
                                            <Box sx={{fontSize:25,mx: "auto" }}>
                                                BMI Calculator
                                            </Box><br/>
                                            <div>BMI Calculator Website</div>
                                            <div>YEAR : 2 | GROUP NAME : Kai Sook</div>
                                            <div>Department of Computer Engineering</div>
                                            <div>Prince of Songkla University</div>
                                            <div>Songkla, Thailand</div>
                                        </ul>
                                    </div>
                            </Container>
                            </td>

                            {/* column3 */}
                            <td>
                            
                            <Container maxWidth="auto">
                                    <Box>
                                    <br/>
                                    <br/>
                                    </Box>
                                <Box sx={{fontSize:25,mx: "auto" }}>
                                    BMI Calculator
                                </Box><br/>
                                <Box sx={{fontSize:25,mx: "auto" ,fontFamily:"Sarabun"}}>
                                    By Kai Sook GROUP
                                </Box>
                                <ul className='list-unstyled'>
                                            <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
                                                <Avatar
                                                    sx={{ width: 150, height: 70 }}
                                                    variant="square"
                                                    src="/img/chicken-logo.png"
                                                />
                                </Box><br/>
                            </ul>

                            </Container>
                            </td>

                            {/* column4 */}
                            <td>
                            <FooterContainer maxWidth="auto">
                                <div className='col'>
                                    <h2>About Us</h2>
                                    <ul className='list-unstyled'>
                                        <div style={{ textDecoration: 'none' }}><a href='/home'>BMI Calculator</a></div><br/>
                                        <div style={{ textDecoration: 'none' }}><a href='/contact'>Contact</a></div>
                                        <Box>
                            <br/>
                            <br/>
                            </Box>
                                    </ul>
                                </div>
                            </FooterContainer>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default FooterBar ;

const FooterContainer = styled.footer`
    a {
        text-decoration: none;
        color:  var(--mainWhite);
    }
    a:hover {
        color:  var(--mainWhite);
    }
    `;
