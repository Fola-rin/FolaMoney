import React from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
	Nav,
	NavbarContainer,
	NavLogoLink,
	NavLogo,
	MobileMenuIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from "./HeaderElems";

import logo from "../../assets/logo.png";
const HeaderElems = (props) => {
	// const [scrollNav, setScrollNav] = useState(false);

	// const changeNavColor = () => {

	// }
	const scrollToTop = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogoLink to="/" onClick={scrollToTop}>
						<NavLogo src={logo} alt="Fola money logo" />
					</NavLogoLink>
					<MobileMenuIcon onClick={() => props.toggle()}>
						<FaBars />
					</MobileMenuIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="/" onClick={scrollToTop}>
								{" "}
								Home
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="about"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-66}
							>
								About
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="dashboards"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-66}
							>
								{" "}
								Dashboards
							</NavLinks>
						</NavItem>
						<NavBtn>
							<NavBtnLink to="/signup">Get started</NavBtnLink>
						</NavBtn>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default HeaderElems;
