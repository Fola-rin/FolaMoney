import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
	AboutSectionContainer,
	AboutSectionWrapper,
	AboutContentConatiner,
	AboutContent,
	AboutContentHeader,
	AboutContentBody,
	// AboutContentBtnWrapper,
	// AboutContentBtn,
	AboutVectorContainer,
	AboutContentVector,
} from "./AboutSectionElems";

import homeVector from "../../assets/DataInfo.svg";

const AboutSection = () => {
	useEffect(() => {
		AOS.init({});
	}, []);
	return (
		<>
			<AboutSectionContainer id="about">
				<AboutSectionWrapper>
					<AboutContentConatiner>
						<AboutContent>
							<AboutContentHeader data-aos="fade-up" data-aos-duration="500">
								About
							</AboutContentHeader>
							<AboutContentBody data-aos="fade-up" data-aos-duration="1000">
								It’s hard to come up with content, so enjoy the lorem ipsum
								text. Contrary to popular belief, Lorem Ipsum is not simply
								random text. It has roots in a piece of classical Latin
								literature from 45 BC, making it over 2000 years old. Richard
								McClintock, a Latin professor at Hampden-Sydney College in
								Virginia, looked up one of the more obscure Latin words,
								consectetur, from a Lorem Ipsum passage, and going through the
								cites of the word in classical literature, discovered the
								undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
								1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
								and Evil) by Cicero, written in 45 BC. This book is a treatise
								on the theory of ethics, very popular during the Renaissance.
								The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
								comes from a line in section 1.10.32.
							</AboutContentBody>
						</AboutContent>
					</AboutContentConatiner>
					<AboutVectorContainer data-aos="fade-up" data-aos-duration="2000">
						<AboutContentVector src={homeVector} alt="Home illsutation" />
					</AboutVectorContainer>
				</AboutSectionWrapper>
			</AboutSectionContainer>
		</>
	);
};

export default AboutSection;
