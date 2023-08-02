import React, {ReactElement} from "react";
import "./index.scss";

import {
    PersonalInfo
} from "../../components/HomePage";

const HomePageLayout = (): ReactElement => {
    return(
        <div className="homepage">
            <PersonalInfo />
        </div>
    )
}

export default HomePageLayout;