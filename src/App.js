import React from "react";
import {Switch,Route,Link} from "react-router-dom";

import 'antd/dist/antd.css';
import './App.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Donate from './pages/Donate/Donate';
import Search from './pages/Search/Search'

import logoIcon from './images/logo-white.png'
import { Layout,Menu } from 'antd';
import Project from "./pages/Project/Project";
import FoodBank from "./pages/FoodBank/FoodBank";
import Shop from "./pages/Shop/Shop";

const { Header, Footer, Content } = Layout;



function App() {
  return (
    
  <Layout style={{height:"100vh"}}>
  <Header>
      <img className='logo' alt='Charitable' src={logoIcon} />
  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>

        <Menu.Item key="1"> <Link to="/Open-data-cw2">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/Open-data-cw2/about">About</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/Open-data-cw2/contact">Contact</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/Open-data-cw2/donate">Donate</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/Open-data-cw2/shop">Shop</Link></Menu.Item>
       
      </Menu>
  </Header>
  <Content style ={{width:'100%',background:'white'}}>
        <Switch>
          <Route path="/Open-data-cw2" exact component={Home} />
          <Route path="/Open-data-cw2/about" component={About} />
          <Route path="/Open-data-cw2/contact"  component={Contact} />
          <Route path="/Open-data-cw2/donate" component={Donate} />
          <Route path="/Open-data-cw2/search" component={Search} />
          <Route path="/Open-data-cw2/addProject" component={Project} />
          <Route path="/Open-data-cw2/foodbank" component={FoodBank}/>
          <Route path="/Open-data-cw2/shop" component={Shop}/>
        </Switch>
  </Content>
  <Footer style={{ textAlign: 'center' }}>Charitable ©2021 Created by Group 9</Footer>
  </Layout>
  
    

  );
}

export default App;
