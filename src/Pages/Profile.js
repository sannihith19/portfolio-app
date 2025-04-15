import React, {useState} from 'react'
import { Paper, Typography, makeStyles } from '@material-ui/core';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as FaIcons from 'react-icons/fa'
import * as HiIcons from 'react-icons/hi'
import ContactMe from '../components/ContactMe';
import AboutMe from '../components/AboutMe';
import Arts from '../components/Arts';

const styles = makeStyles(theme => ({
  typography: {
    textAlign: 'center',
    fontSize: '35px',
    fontFamily: 'calibri',
  },
  body: {
    height: '90.5vh',
    width: '100vw',
    backgroundColor: '#E4E4E4'

  },
  paper: {
    margin: '10px',
    borderRadius: '20px'
  },
}));

const Profile = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = styles()
  return (<section className={classes.body}>
    <Typography className={classes.typography}>MY PROFILE</Typography>
    <hr style={{ margin: '10px', height: '1px', backgroundColor: '#000' }} />
    <Paper className={classes.paper}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab icon={<FaIcons.FaUserAlt />} iconPosition='start' label="About Me" />
        {/* <Tab icon={<HiIcons.HiAcademicCap />} iconPosition='start' label="Academics" /> */}
        <Tab icon={<FaIcons.FaPaintBrush />} iconPosition='start' label="Arts" />
        <Tab icon={<HiIcons.HiMail />} iconPosition='start' label="Contact Me" />
      </Tabs>
    </Paper>
    {value === 0 && <AboutMe/>}
    {value === 1 && <Arts/>}
    {value === 2 && <ContactMe/>}
  </section>
  )
}

export default Profile