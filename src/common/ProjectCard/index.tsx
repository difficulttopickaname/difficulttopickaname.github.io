import React, {ReactElement} from "react";
import {ProjectInterface} from "../../assets/interfaces";
import { useTranslation } from "react-i18next";
import "./index.scss";

interface ProjectCardProps {
    project: ProjectInterface;
    key: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project, key}): ReactElement => {
    const {t} = useTranslation("homepage");
    return(
        <div className="project-card" id={key}>
            <h2 className="project-title">{project.title}</h2>
            <div className="card-type">
                <p className="project-type">{project.type}</p>
                <p className="project-year">{project.year}</p>
            </div>
            <p className="project-shortDesc">{project.shortDescription}</p>
            <span className="project-detailBtn">{t("details")}</span>
        </div>
    );
};

export default ProjectCard;