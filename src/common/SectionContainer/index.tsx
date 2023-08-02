import React, {ReactElement} from "react";
import "./index.scss";

const SectionContainer = (content): ReactElement => (
    <div className="section-container">
        {content.children}
    </div>
);

export default SectionContainer;