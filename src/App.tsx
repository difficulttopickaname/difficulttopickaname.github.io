import React, {ReactElement} from "react";
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

const App = (): ReactElement => (
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
)

export default App;