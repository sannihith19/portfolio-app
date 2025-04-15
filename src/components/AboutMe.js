
import React from 'react'
import {  Paper, makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
    paper: {
        margin: '10px',
        borderRadius: '20px',
        padding: '20px',
    },
}));

const AboutMe = () => {
    const classes = styles()
    return (
        <Paper className={classes.paper}>
            <h1>About Me</h1>
            <p>Hello, I'm <strong>Baba Sri Sannihith Dharanikota</strong>, a <strong>Student</strong> at <strong>Texas A&M University, Corpus Christi</strong>. I'm passionate about learning new things, and I'm dedicated to my education and personal development.</p>
            <h2>Academic Pursuits</h2>
            <p>I'm currently pursuing my major in <strong>Computer Science</strong> at Texas A&M University, Corpus Christi. As a student, I'm committed to expanding my knowledge and gaining valuable insights into rapidly evolving technologies. My aim is to excel academically and use my education to make a positive impact on the world.</p>
            <h2>Hobbies and Interests</h2>
            <p>Outside of my academic pursuits, I enjoy a variety of hobbies and interests. Some of my favorite activities include:</p>
            <ul>
                <li><strong>Technology:</strong> I'm intrigued by the ever-evolving world of technology and enjoy staying up-to-date with the latest innovations.</li>
                <li><strong>Watching Anime:</strong> I'm a dedicated anime viewer and enjoy exploring a wide range of anime series and genres.</li>
                <li><strong>Exploring Nature:</strong> I find solace in spending time outdoors, whether it's hiking, camping, or simply enjoying the beauty of nature.</li>
            </ul>
            <h2>Let's Connect</h2>
            <p>I'm always open to making new connections, sharing experiences, and learning from others. If you'd like to connect with me, discuss shared interests, or simply learn more about my academic journey, please feel free to reach out to me. Check out Contact Me page for contact info.</p>
        </Paper>
    );
}

export default AboutMe