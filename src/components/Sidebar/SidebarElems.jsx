import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #fff;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIconWrapper = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const CloseIcon = styled(FaTimes)`
	color: #21302a;
`;

export const SidebarWrapper = styled.div`
	color: #21302a;
	padding: 2rem;
`;

export const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4, 70px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(4, 60px);
	} ;
`;
export const SidebarLink = styled(LinkScroll)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #21302a;
	cursor: pointer;

	&:hover {
		color: #0ba86b;
		transition: 0.2s ease-in-out;
	}
	&:focus {
		outline: none;
	}
`;

export const SidebarBtn = styled.div`
	display: flex;
	justify-content: center;
`;
export const SidebarBtnLink = styled(LinkRouter)`
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
		background: #e9e9e9;
	}

	&:focus {
		outline: none;
	}
`;
