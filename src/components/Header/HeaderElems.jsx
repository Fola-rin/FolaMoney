import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
	background: #fff;
	height: 66px;
	${"" /* margin-top: -80px; */}
	position:fixed;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	top: 0;
	z-index: 10;
	max-height: 17vh;
	box-shadow: 0 1px 8px 1px rgb(0 47 29 / 20%);

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1200px;
`;

export const NavLogoLink = styled(LinkRouter)`
	color: #21302a;
	cursor: pointer;
	text-decoration: none;
`;

export const NavLogo = styled.img`
	width: 160px;
	height: auto;
`;

export const MobileMenuIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		color: #21302a;
		font-size: 1.8rem;
		cursor: pointer;
	} ;
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 768px) {
		display: none;
	} ;
`;

export const NavItem = styled.li``;

export const NavLinks = styled(LinkScroll)`
	color: #21302a;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	height: 66px;
	&.active {
		border-bottom: 3px solid #0ba86b;
	}
`;
export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin: 0 30px;
	@media screen and (max-width: 768px) {
		display: none;
	} ;
`;
export const NavBtnLink = styled(LinkScroll)`
	padding: 10px 22px;
	text-decoration: none;
	background-color: #0ba86b;
	border: none;
	border-radius: 50px;
	color: #fff;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		color: #21302a;
		${"" /* #0ba86b */}
		background: #e9e9e9;
	}
`;
