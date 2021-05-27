import React from 'react'
import './Shop.css'
import {Card,Rate} from 'antd'
import Banner from '../../images/Shop.jpg'
export default function Shop(){
    const {Meta} = Card;

    const data =[{title:'Bamboo Toothbrush',price:"3.00",imgURL:'https://www.jerseybeautycompany.co.uk/cache/images/13237/Ecu-Bru-09_4a1cc469b4927866d6e2bed9eb488416.png', description:'Eco-friendly Bamboo ToothBrush'}
  ,
  {title:'Eco Friendly Large Soap Loaf Mahogany',price:'9.50',imgURL:'https://www.jerseybeautycompany.co.uk/cache/images/13323/Large-Soap-Loaf-Mahogany-Tray-41_4a1cc469b4927866d6e2bed9eb488416.png',description:'Soap Loaf Mahogany'}
  ,
{title:'The Refill Bottle', price:'14.99',imgURL:'https://www.jerseybeautycompany.co.uk/cache/images/319721/Neat-Multi-Surface-Cleaner-Refill-Bottle-06_4a1cc469b4927866d6e2bed9eb488416.png',description:'Eco Friendly Neat - The Refill Bottle'}
];
    const renderShopList = data.map((item)=>{
        return <div className='shop-item'>
            <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={item.imgURL}
      />
    }
    
  >
    <Meta
      
      title={item.title}
      description={<div>
          <div>{item.description}</div>
          <div >
              <div className='price'>£{item.price}</div>
          </div>
          <Rate />
      </div>
      
    }
    />
  </Card>
        </div>
    })  
    return<div className='shop-content' >
           <div className="banner-section" >
           <div className="all-banner-mask"></div>
        <img alt="banner" className='banner' src={Banner} />
        <div className="banner-text" >Shop
        <div className='note-text' >Here you can shop for a wide range of eco-friendly products. To shop, simply create a new account, or if you have an account sign in, add products to the basket and order them immediately. </div>
        </div>
       
        </div>
       <div className='shop-list'>
       {renderShopList}
       </div>
    </div>
}