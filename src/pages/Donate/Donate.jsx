import React from 'react';
import { Typography,Divider } from 'antd';
import './Donate.css'
import Banner from '../../images/Support.jpg'
import DonateIcon from '../../images/donate.png'
export default function Donate(){
    const {Title} =Typography;
    return (<div className='donate-content' >
        <div className="banner-section" >
        <div className="all-banner-mask"></div>
        <img alt="banner" className='banner' src={Banner} />
        <div className="banner-text" >Support Us</div>
        </div>
        <Divider/>
        <Title level={2}>Donations</Title>
    <div className="info-text"><Typography.Text>
    Please donate to help us keep running CharitAble! Every contribution is valuable to us! Thanks in advance!
    </Typography.Text></div>
    <img alt='donate' className='donate-btn' src={DonateIcon} />
    </div>)
}
