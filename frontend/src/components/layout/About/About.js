import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MetaData from "../MetaData";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div>
        <MetaData title="About Us" />
      </div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/ravian/image/upload/v1661074063/me_about2_m9fpt8.jpg"
              alt="Founder"
            />
            <Typography>Atif Jalal</Typography>
            {/* <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button> */}
            <span>
              This is a sample wesbite made by Atif Jalal. I am a final-year IT
              student at Bahria University. My main interest is in the field of
              programming. Innovative technological mind, presently working &
              learning as an MERN Developer. Able to work with a variety of
              technologies and software solutions. The valuable team member who
              has experience in diagnosing problems and developing solutions. I
              have three years of hands-on programming experience.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Social Accounts</Typography>
            <a href="https://www.facebook.com/atifjalall" target="blank">
              <FacebookIcon className="fbSvgIcon" />
            </a>
            <a href="https://instagram.com/atifjalall" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://linkedin.com/in/atifjalal" target="blank">
              <LinkedinIcon className="linkedinSvgIcon" />
            </a>
            <a href="https://github.com/in/atifjalall" target="blank">
              <GitHubIcon className="githubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
