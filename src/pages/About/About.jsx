import React from 'react';
import { Typography,Divider } from 'antd';
import Banner from '../../images/banner.jpeg'
import './About.css';
export default function About(){
    const {Title} =Typography;
    return (<div className="about-content">
        <div className="banner-section" >
        <img alt="banner" className='banner' src={Banner} />
        <div className="banner-text" >About Charitable</div>
        </div>
        <Divider />
        <Title level={2}>Who We are</Title>
    <div className="info-text"><Typography.Text>
    Our aim is to help everyone live a better life. We believe that, by helping each other the world will be a better place to live. Together we can remove the problems in this world such as hunger, poverty. lack of education and many more! So join us in this mission to make the world a better place to live in!
    </Typography.Text></div>
    <Title level={2}>What we do</Title>
    <div className="info-text"><Typography.Text>
    Our aim is to help everyone live a better life. We believe that, by helping each other the world will be a better place to live. Together we can remove the problems in this world such as hunger, poverty. lack of education and many more! So join us in this mission to make the world a better place to live in!
    </Typography.Text></div>
    <Title level={2}>Acknowledgments</Title>
    <div className="info-text"><Typography.Text>
    Our aim is to help everyone live a better life. We believe that, by helping each other the world will be a better place to live. Together we can remove the problems in this world such as hunger, poverty. lack of education and many more! So join us in this mission to make the world a better place to live in!
    </Typography.Text></div>

    </div>)
}
