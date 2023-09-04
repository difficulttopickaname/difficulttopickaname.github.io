import React, {ReactElement} from "react";
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import "./i18n";  // to initialize i18n

const App = (): ReactElement => (
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
)

export default App;