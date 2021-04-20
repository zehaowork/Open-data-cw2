import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import 'antd/dist/antd.css';
import './App.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Donate from './pages/Donate/Donate';

import logoIcon from './images/logo-white.png'
import { Layout,Menu } from 'antd';

const { Header, Footer, Content } = Layout;



function App() {
  return (
    <Router>
  <Layout style={{height:"100vh"}}>
  <Header>
      <img className='logo' alt='Charitable' src={logoIcon} />
  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

        <Menu.Item key="1"> <Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/contact">Contact</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/donate">Donate</Link></Menu.Item>
      </Menu>
  </Header>
  <Content style ={{width:'100%',background:'white'}}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact"  component={Contact} />
          <Route path="/donate" component={Donate} />
        </Switch>
  </Content>
  <Footer style={{ textAlign: 'center' }}>Charitable ©2021 Created by Group 9</Footer>
  </Layout>
  </Router>
    

  );
}

export default App;
