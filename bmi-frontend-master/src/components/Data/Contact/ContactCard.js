import { Box, Card, CardContent, CardActionArea, CardMedia, Typography, Grid} from '@mui/material';

function ContactCard() {
    return(
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection:'row',
                    // border: '1px dashed grey',
                    align: "center",
                    background: 'linear-gradient(#dfe2e8  90%)',
                    mx: 2,
                    mt: 2,
                    mb: 2,
                    p: 1,
                    pt: 2,
                    pb: 2,
                    
                }}
            >
                
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={2.38}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    width="500"
                                    image="/img/peek.png"
                                    alt="1"
                                />
                                <CardContent>
                                    <Typography sx={{fontFamily:'Inconsolata',fontSize: 18}}variant="body1" color="black"  >
                                        Name: Krittamet Rungrueangthip <br />
                                        Phone: 093 6346883 <br />
                                        Email: 6410110012@psu.ac.th <br />
                                        Department of Computer Engineering 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={2.38 } >
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    width="500"
                                    image="/img/bat.png"
                                    alt="2"
                                />
                                <CardContent>
                                    <Typography sx={{fontFamily:'Inconsolata',fontSize: 18}}variant="body1" color="black">
                                        Name: Thanapat Duongkaew <br />
                                        Phone: 091 8618713 <br />
                                        Email: 6410110204@psu.ac.th <br />
                                        Department of Computer Engineering
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={2.38}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    width="500"
                                    image="/img/toey.jpg"
                                    alt="4"
                                />
                                <CardContent>
                                    <Typography sx={{fontFamily:'Inconsolata',fontSize: 18}}variant="body1" color="black">
                                        Name: Patinya Limhao <br/>
                                        Phone: 061 1855153 <br />
                                        Email: 6410110294@psu.ac.th <br />
                                        Department of Computer Engineering
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Card sx={{ bgcolor:"#000000" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="700"
                        width="700"
                        image="/img/mor.jpg"
                        alt=""
                    />
                </CardActionArea>
            </Card>
            
        </div>
    )
};

export default ContactCard;
