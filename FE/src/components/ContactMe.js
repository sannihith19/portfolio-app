import React from 'react';
import { IconButton, Paper, makeStyles } from '@material-ui/core';
import ProfilePic from '../images/us.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BackgroundImage from '../images/cerulean-blue-curve-background_53876-99563.avif';
import GitHubIcon from '@mui/icons-material/GitHub';


const useStyles = makeStyles(() => ({
    bodyPaper: {
        margin: '20px auto',
        maxWidth: '600px',
        borderRadius: '20px',
        padding: '20px',
        backgroundColor: '#91C6CF',
    },
    contactMeDiv: {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        border: '2px solid black',
        borderRadius: '10px',
        height: '40vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePic: {
        height: '120px',
        width: '120px',
        borderRadius: '50%',
        marginBottom: '10px',
        objectFit: 'cover',
        border: '2px solid white'
    },
    iconButton: {
        color: '#000',
        margin: '0 5px',
        '&:hover': {
            color: '#1976d2'
        }
    }
}));

const ContactMe = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.bodyPaper}>
            <div className={classes.contactMeDiv}>
                <img src={ProfilePic} alt="Sannihith's profile" className={classes.profilePic} />
                <div>
                    <IconButton className={classes.iconButton} onClick={() => window.open('https://instagram.com/sannihith9', '_blank')}>
                        <InstagramIcon fontSize="large" />
                    </IconButton>
                    <IconButton className={classes.iconButton} onClick={() => window.open('https://www.facebook.com/sanni.hith.9/', '_blank')}>
                        <FacebookIcon fontSize="large" />
                    </IconButton>
                    <IconButton className={classes.iconButton} onClick={() => window.open('https://www.linkedin.com/in/baba-sri-sannihith-dharanikota-01959b1a7/', '_blank')}>
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                    <IconButton className={classes.iconButton} onClick={() => window.location = 'mailto:bdharanikota@islander.tamucc.edu'}>
                        <EmailIcon fontSize="large" />
                    </IconButton>
                    <IconButton className={classes.iconButton} onClick={() => window.open('https://github.com/sannihith19', '_blank')}>
                        <GitHubIcon fontSize="large" />
                    </IconButton>

                </div>
            </div>
        </Paper>
    );
};

export default ContactMe;
