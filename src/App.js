import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import DemandRegister from './pages/DemandRegister';
import ProjectRegister from './pages/ProjectRegister.js';
import Users from './pages/Users';
import Goods from './pages/Goods';
import MyInfo from './pages/MyInfo.js';
import Header from './components/common/Header.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:page_type" element={<Users />} />
        <Route path="/register/demand" element={<DemandRegister />} />
        <Route path="/register/project" element={<ProjectRegister />} />
        <Route path="/goods/detail" element={<Goods />} />
        {/* page_type : myOrder || orderDetail || myRegister || registerDetail || formManage*/}
        <Route path="/myinfo/:page_type" element={<MyInfo />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
