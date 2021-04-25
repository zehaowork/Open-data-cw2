import React from 'react';
import { Button, Space } from 'antd';
import './Home.css';
import axios from 'axios'

export default function Home(){
   
    const testApi = ()=>{
        axios.get('https://us-central1-open-data-cw2.cloudfunctions.net/getRankedNeedsDataNew').then(result=>{
            console.log(result.data)
        })
    };

    return (<div>
        <div className="image-placeholder"> Image</div>
        <p>You can either search for foodbanks near you to donate to. Or, you can search for projects worldwide to donate to.</p>
        <div className="flex-gap" >
            <Button onClick={()=>{testApi();}} type="primary" className="large-button">Search for foodbanks</Button>
            <Button type="primary" className="large-button">Search for projects</Button>
        </div>
    </div>)
}
