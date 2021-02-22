import React from "react";
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
						<SidebarLink to="home" onClick={() => props.toggle()}>
							Home
						</SidebarLink>
						<SidebarLink to="about" onClick={() => props.toggle()}>
							About
						</SidebarLink>
						<SidebarLink to="dashboards" onClick={() => props.toggle()}>
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
