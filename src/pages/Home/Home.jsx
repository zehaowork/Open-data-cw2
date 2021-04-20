import React from 'react';
import { Button, Space } from 'antd';
import './Home.css';

export default function Home(){
    return (<div>
        <div className="image-placeholder"> Image</div>
        <p>You can either search for foodbanks near you to donate to. Or, you can search for projects worldwide to donate to.</p>
        <div className="flex-gap" >
            <Button type="primary" className="large-button">Search for foodbanks</Button>
            <Button type="primary" className="large-button">Search for projects</Button>
        </div>
    </div>)
}
