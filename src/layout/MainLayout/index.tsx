import React, {ReactElement} from "react";
import "./index.scss";

const MainLayout = (elements): ReactElement => {
    return(
        <div className="mainLayout">
            {elements.children}
        </div>
    )
}

export default MainLayout;