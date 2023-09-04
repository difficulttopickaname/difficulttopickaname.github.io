import React, {ReactElement} from "react";
import "./index.scss";

import {
    PersonalInfo,
    ProjectOverview
} from "../../components/HomePage";

const HomePageLayout = (): ReactElement => {
    return(
        <div className="homepage">
            <PersonalInfo />
            <ProjectOverview />
        </div>
    )
}

export default HomePageLayout;