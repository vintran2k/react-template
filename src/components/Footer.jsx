import React from 'react';
import { ReactComponent as LinkedinLogo } from '../assets/linkedinLogo.svg';
import { ReactComponent as GithubLogo } from '../assets/githubLogo.svg';

const Footer = () => {
	return (
		<div className="Footer">
			<p className='copyright'>&copy; Powered by vintran</p>
			<div className="Footer-links">
				<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
					<LinkedinLogo className="Link-logo" />
				</a>
				<a target="_blank" rel="noreferrer" href="https://github.com/vintran2k">
					<GithubLogo className="Link-logo" />
				</a>
			</div>
		</div>
	);
};

export default Footer;