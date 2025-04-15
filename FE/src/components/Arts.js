import React from 'react'
import I1 from '../images/IMAGE1.jpg'
import I2 from '../images/IMAGE2.jpg'
import I3 from '../images/IMAGE3.jpg'
import I4 from '../images/IMAGE4.jpg'
import I5 from '../images/IMAGE5.jpg'
import I6 from '../images/IMAGE6.jpg'
import I7 from '../images/IMAGE7.jpg'
import I8 from '../images/IMAGE8.jpg'
import I9 from '../images/IMAGE9.jpg'
import I10 from '../images/IMAGE10.jpg'
import { Container, Grid, Icon, IconButton, Paper, Typography, makeStyles } from '@material-ui/core';
import BackgroundImage from '../images/cerulean-blue-curve-background_53876-99563.avif'

const styles = makeStyles(theme => ({
    paper: {
        margin: '10px',
        margin: '0 15vw',
        borderRadius: '20px',
        padding: '20px',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
    },
    div: {
        textAlign: 'center'
    },
    profilePic: {
        height: '200px',
        width: '200px',
        margin: '10px',
        border: '1px solid black',
        borderRadius: '20px',
        objectFit: 'cover', // ensures clean image cropping
        transition: 'all 0.3s ease-in-out', // smooth hover transition
        '&:hover': {
            transform: 'scale(1.1)',  // smooth zoom effect
            border: '3px solid black',
        }
    }
    
}));

const Arts = () => {
    const classes = styles()
    const imageUrls = [I1, I2, I3, I4, I5, I6, I7, I8, I9, I10];
    return (<>
        <Paper className={classes.paper}>
            <div className={classes.div}>        
                {imageUrls.map((imageUrl) => (
                <img src={imageUrl} className={classes.profilePic}></img>
            ))}
            </div>

        </Paper>
    </>
    )
}

export default Arts