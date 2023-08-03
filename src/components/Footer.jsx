import React from "react";
import {
	AiFillGithub,
	AiFillInstagram,
	AiFillLinkedin,
	AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<div>
				<img
					src={"https://avatars.githubusercontent.com/u/79266193?v=4"}
					alt='Founder'
				/>

				<h2>Vipin Saini</h2>
				<p>Motivation is temporary, but discipline last forever.</p>
			</div>

			<aside>
				<h2>Social Media</h2>

				<article>
					<a href='https://github.com/vipinsaini21' target={"blank"}>
						<AiFillGithub />
					</a>
					<a href='https://www.linkedin.com/in/vipinsaini21/' target={"blank"}>
						<AiFillLinkedin />
					</a>
					<a href='https://www.instagram.com/vipin_saini_21/' target={"blank"}>
						<AiFillInstagram />
					</a>
				</article>
			</aside>
			<a href='#home'>
				<AiOutlineArrowUp />
			</a>
		</footer>
	);
};

export default Footer;
