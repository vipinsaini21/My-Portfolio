import React from 'react';
import './footer.css';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
	return (
		<div className='footer'>
			<div>
				<Typography variant='h5'>About Me</Typography>
				<Typography>
					Hey, my name is Vipin Saini. I am a Full-Stack Developer and a
					Computer Enthusiast.
				</Typography>
				<Link to='/contact' className='footerContactBtn'>
					<Typography>Contact Us</Typography>
				</Link>
			</div>
			<div>
				<Typography variant='h6'>Social Media</Typography>
				<a href='https://github.com/vipinsaini21/' target='black'>
					<BsGithub />
				</a>
				<a href='https://www.instagram.com/vipin_saini_21/' target='black'>
					<BsInstagram />
				</a>
				<a href='https://www.linkedin.com/in/vipinsaini21/' target='black'>
					<BsLinkedin />
				</a>
			</div>
		</div>
	);
};

export default Footer;
