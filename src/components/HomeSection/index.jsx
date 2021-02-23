import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import AOS from "aos";
import "aos/dist/aos.css";

import {
	HomeSectionContainer,
	HomeSectionWrapper,
	HomeContentConatiner,
	HomeContent,
	HomeContentHeader,
	HomeContentBody,
	HomeContentBtnWrapper,
	HomeContentBtn,
	HomeVectorContainer,
	HomeContentVector,
} from "./HomeSectionElems";

import homeVector from "../../assets/home-vector.png";

const HomeSection = () => {
	useEffect(() => {
		AOS.init({});
	}, []);
	return (
		<>
			<HomeSectionContainer id="home">
				<HomeSectionWrapper>
					<HomeContentConatiner>
						<HomeContent>
							<HomeContentHeader data-aos="fade-up" data-aos-duration="500">
								Welcome to FolaMoney!
							</HomeContentHeader>
							<HomeContentBody data-aos="fade-up" data-aos-duration="1000">
								Check out our large collection of dashboards made with react,
								using dummy data APIs’ from alll over the internet.
							</HomeContentBody>
							<HomeContentBtnWrapper
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								<HomeContentBtn
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
									offset={-66}
									to="about"
								>
									Learn More
								</HomeContentBtn>
								<HomeContentBtn
									to="dashboards"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
									offset={-66}
								>
									Dashboards
								</HomeContentBtn>
							</HomeContentBtnWrapper>
						</HomeContent>
					</HomeContentConatiner>
					<HomeVectorContainer data-aos="fade-up" data-aos-duration="3000">
						<HomeContentVector src={homeVector} alt="Home illsutation" />
					</HomeVectorContainer>
				</HomeSectionWrapper>
			</HomeSectionContainer>
		</>
	);
};

export default HomeSection;
