import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
	DashboardSectionContainer,
	DashboardSectionHeader,
	DashboardSectionBody,
	DashboardSectionWrapper,
} from "./DashboardSectionElems";
import DashboardItem from "./DashboardItem";
import education from "../../assets/education.svg";
import sales from "../../assets/sales.svg";
import banking from "../../assets/bank.svg";
import shopping from "../../assets/shopping.svg";

const DashboardSection = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<>
			<DashboardSectionContainer id="dashboards">
				<DashboardSectionWrapper>
					<DashboardSectionHeader data-aos="fade-up" data-aos-duration="500">
						Dashboards
					</DashboardSectionHeader>
					<DashboardSectionBody>
						<DashboardItem
							icon={education}
							header="Education"
							topic="education"
						/>
						<DashboardItem icon={banking} header="Banking" topic="banking" />
						<DashboardItem icon={shopping} header="Shopping" topic="shopping" />

						<DashboardItem icon={sales} header="Sales" topic="sales" />
					</DashboardSectionBody>
				</DashboardSectionWrapper>
			</DashboardSectionContainer>
		</>
	);
};

export default DashboardSection;
