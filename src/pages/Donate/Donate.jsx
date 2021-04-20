import React from 'react';
import { Button } from 'antd';

export default function Donate(){
    return (<div>
        <div className="image-placeholder"> Image</div>
        <p>Please donate to help us keep running CharitAble! Every contribution is valuable to us! Thanks in advance!</p>
        <div className="donate-padding">
        <Button type="primary">Donate</Button>

        </div>
    </div>)
}
