import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
	SidebarContainer,
	CloseIconWrapper,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SidebarBtn,
	SidebarBtnLink,
} from "./SidebarElems";
const Sidebar = (props) => {
	return (
		<>
			<SidebarContainer isOpen={props.isOpen} onClick={() => props.toggle()}>
				<CloseIconWrapper onClick={() => props.toggle()}>
					<CloseIcon />
				</CloseIconWrapper>

				<SidebarWrapper>
					<SidebarMenu>
						<SidebarLink
							smooth={true}
							duration={500}
							spy={true}
							exact="true"
							offset={-66}
							to="home"
							onClick={() => props.toggle()}
						>
							Home
						</SidebarLink>
						<SidebarLink
							smooth={true}
							duration={500}
							spy={true}
							exact="true"
							offset={-66}
							to="about"
							onClick={() => props.toggle()}
						>
							About
						</SidebarLink>
						<SidebarLink
							to="dashboards"
							smooth={true}
							duration={500}
							spy={true}
							exact="true"
							offset={-66}
							onClick={() => props.toggle()}
						>
							Dashboards
						</SidebarLink>
					</SidebarMenu>
					<SidebarBtn>
						<SidebarBtnLink to="/signup">Get Started</SidebarBtnLink>
					</SidebarBtn>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
