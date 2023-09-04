import React, {ReactElement} from "react";
import { useTranslation } from 'react-i18next';
import SectionContainer from "../../../common/SectionContainer";
import {ProjectInterface} from "../../../assets/interfaces";
import ProjectCard from "../../../common/ProjectCard";
import "./index.scss";

const ProjectOverview = (): ReactElement => {
    const {t} = useTranslation("projectpage");
    const projects: ProjectInterface[] = t("projects", {returnObjects: true});
    console.log(projects);
    return(
        <SectionContainer>
            <div className="project-overview">
                {projects.map((projectElement, index) => (
                    <ProjectCard project={projectElement} key={index}/>
                ))}
            </div>
        </SectionContainer>
    );
};

export default ProjectOverview;