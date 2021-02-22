import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
	FooterContainer,
	FooterLinksContainer,
	FooterWrap,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialIcons,
	SocialLogo,
	WebsiteRights,
	SocialIconLink,
	Logo,
} from "./FooterElems";
import logo from "../../assets/logo.png";
const Footer = () => {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About us</FooterLinkTitle>
							<FooterLink to="/construction">FAQ</FooterLink>
							<FooterLink to="/construction">Lorem Ipsum</FooterLink>
							<FooterLink to="/construction">Terms & Conditions</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Contact us</FooterLinkTitle>
							<FooterLink to="/construction">Phone</FooterLink>
							<FooterLink to="/construction">Electronic Mail</FooterLink>
							<FooterLink to="/construction">Text Messaging</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Content</FooterLinkTitle>
							<FooterLink to="/construction">Services</FooterLink>
							<FooterLink to="/construction">Pictures</FooterLink>
							<FooterLink to="/construction">Videos</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Important</FooterLinkTitle>
							<FooterLink to="/construction">Family</FooterLink>
							<FooterLink to="/construction">Anuoluwapo</FooterLink>
							<FooterLink to="/construction">Arsenal</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={scrollToTop}>
							<Logo src={logo} />
						</SocialLogo>
						<WebsiteRights>
							FolaMoney © {new Date().getFullYear()} All rights reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="/" target="_blank" aria-label="Facebook">
								<FaInstagram />
							</SocialIconLink>

							<SocialIconLink href="/" target="_blank" aria-label="Instagram">
								<FaFacebook />
							</SocialIconLink>

							<SocialIconLink href="/" target="_blank" aria-label="Twitter">
								<FaTwitter />
							</SocialIconLink>

							<SocialIconLink
								href="//www.LinkedIn.com"
								target="_blank"
								aria-label="LinkedIn"
							>
								<FaLinkedinIn />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
