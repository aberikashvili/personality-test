import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';

import { Layout, Menu, theme } from 'antd';
import { HomeOutlined, FileDoneOutlined } from '@ant-design/icons';
import './App.scss';
import BreadCrumbs from './components/ui/BreadCrumbs';
import Spinner from './components/ui/Spinner';

const HomePage = lazy(() => import('./pages/HomePage'));
const TestsPage = lazy(() => import('./pages/TestsPage'));
const TestPage = lazy(() => import('./pages/TestPage'));

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <Layout>
      <Header className="App__Header">
        <div className="App__Logo">PERSONALITY TEST</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
          items={[
            { icon: <HomeOutlined />, key: '/', label: 'HOME', onClick: () => navigate('/') },
            {
              icon: <FileDoneOutlined />,
              key: '/tests',
              label: 'TAKE A TEST',
              onClick: () => navigate('/tests')
            }
          ]}
        />
      </Header>
      <Content className="App__Layout">
        <BreadCrumbs />
        <div className="App__Layout-Content" style={{ background: colorBgContainer }}>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tests" element={<TestsPage />} />
              <Route path="/tests/:id" element={<TestPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </div>
      </Content>
      <Footer className="App__Footer">Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;
