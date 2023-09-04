import React,{ReactElement} from "react";
import SectionContainer from "../../../common/SectionContainer";
import { locationIcon } from "../../../assets/images";
import { useTranslation } from 'react-i18next';
import "./index.scss";

const PersonalInfo = (): ReactElement => {
    const { t } = useTranslation('homepage');
    return(
        <SectionContainer>
            <div className="personal-info">
                <h1 className="info-title">{t("name")}</h1>
                <div className="info-location">
                    <img src={locationIcon} alt="location" className="location-icon"/>
                    <p className="location-detail">{t("location")}</p>
                </div>
                <p className="info-intro">{t("intro")}</p>
            </div>
        </SectionContainer>
    );
};

export default PersonalInfo;