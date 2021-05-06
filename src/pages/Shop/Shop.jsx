import React from 'react'
import './Shop.css'
import {Card} from 'antd'
import Banner from '../../images/foobankbanner.png'
export default function Shop(){
    const {Meta} = Card;

    const data =[{title:'goods',price:"2.00"},{title:'goods',price:"2.00"},{title:'goods',price:"2.00"},{title:'goods',price:"2.00"},{title:'goods',price:"2.00"},{title:'goods',price:"2.00"},{title:'goods',price:"2.00"}];
    const renderShopList = data.map((item)=>{
        return <div className='shop-item'>
            <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80" />}
      >
        <Meta title={item.title} description={"£"+item.price} />
      </Card>
        </div>
    })  
    return<div className='shop-content' >
           <div className="banner-section" >
       <div className='food-bank-banner-mask'></div>
        <img alt="banner" className='banner' src={Banner} />
        <div className="banner-text" >Shop</div>
        </div>
       <div className='shop-list'>
       {renderShopList}
       </div>
    </div>
}