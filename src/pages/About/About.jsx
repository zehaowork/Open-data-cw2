import React from 'react';
import { Typography,Divider } from 'antd';
import Banner from '../../images/About us.jpg'
import './About.css';
export default function About(){
    const {Title} =Typography;
    return (<div className="about-content">
        <div className="banner-section" >
        <div className="all-banner-mask"></div>
        <img alt="banner" className='banner' src={Banner} />
        <div className="banner-text" >About Charitable</div>
        </div>
        <Divider />
        <Title level={2}>Who We are</Title>
    <div className="info-text"><Typography.Text>
    We are a company that has a mission to help bridge the gap between the people that want to help the society and the opportunities to help the world we live in. The amount of donation has increased by £800 from last year. During this COVID pandemic, when the NHS requested for 250,000 volunteers to help them, 750,000 people signed up to volunteer in 24 hours. This shows that humanity exists and together we can help our community, country and the whole world to become a better place to live. 
    
    </Typography.Text>
    <p></p>
    <p>On this website you can search for:</p>
    <ul>
  <li>The nearest food bank to your home and what they need</li>
  <li>Projects around the world that you can donate money to</li>
  <li>Charities near your home</li>
  <li>Volunteering projects from our users</li>
</ul>
    </div>
    
    <Title level={2}>Acknowledgments</Title>
    <div className="info-text"><Typography.Text>
    Our aim is to help everyone live a better life. We believe that, by helping each other the world will be a better place to live. Together we can remove the problems in this world such as hunger, poverty. lack of education and many more! So join us in this mission to make the world a better place to live in!
    </Typography.Text></div>

    </div>)
}
