import React, {ReactElement} from "react"
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import {
    MainLayout,
    HomePageLayout
} from '../layout';


const Router = () => (
    <MainLayout>
      <Routes>
        <Route path="/">
          <Route index element={<HomePageLayout />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </MainLayout>
)
/**
 * 
          <Route path="strategy" element={<StrategyPage />} />
          <Route path="mmr" element={<MMRpage />} />
          <Route path="rank/:id" element={<SummaryTablePage />} />
          <Route path="search" element={<SummaryTablePage />} />
          <Route path="performers/:serverId/:login" element={<ProfilePage />} />
 */

export default Router;