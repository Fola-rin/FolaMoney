import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import {
	DashboardSectionItem,
	DashboardSectionItemContentHeader,
	DashboardSectionItemContentIcon,
	DashboardSectionItemContentBody,
	DashboardSectionItemContentBtn,
} from "./DashboardSectionElems";
const DashboardItem = (props) => {
	useEffect(() => {
		AOS.init({});
	}, []);
	return (
		<>
			<DashboardSectionItem
				data-aos={props.direction}
				data-aos-duration={props.duration}
			>
				<DashboardSectionItemContentIcon src={props.icon} />
				<DashboardSectionItemContentHeader>
					{props.header}
				</DashboardSectionItemContentHeader>
				<DashboardSectionItemContentBody>
					Displaying {props.topic} related data in intutitive charts and graphs.
				</DashboardSectionItemContentBody>
				<DashboardSectionItemContentBtn to="/education">
					Learn More!
				</DashboardSectionItemContentBtn>
			</DashboardSectionItem>
		</>
	);
};

export default DashboardItem;
