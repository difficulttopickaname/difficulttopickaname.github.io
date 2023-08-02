import React,{ReactElement} from "react";
import SectionContainer from "../../../common/SectionContainer";
import "./index.scss";

const PersonalInfo = (): ReactElement => {
    return(
        <SectionContainer>
            <div className="personal-info">
                <h1 className="homepage-title">Minhan Tang</h1>
                <p className="homepage-location"></p>
            </div>
        </SectionContainer>
    )
}

export default PersonalInfo;