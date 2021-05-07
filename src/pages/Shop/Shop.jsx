import React from 'react'
import './Shop.css'
import {Card,Rate} from 'antd'
import Banner from '../../images/Shop.jpg'
export default function Shop(){
    const {Meta} = Card;

    const data =[{title:'goods',price:"2.00"},{title:'goods',price:"2.00"},{title:'goods',price:"2.00"},{title:'goods',price:"2.00"},{title:'goods',price:"2.00"},{title:'goods',price:"2.00"},{title:'goods',price:"2.00"}];
    const renderShopList = data.map((item)=>{
        return <div className='shop-item'>
            <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    
  >
    <Meta
      
      title={item.title}
      description={<div>
          <div>eco-friendly friendly</div>
          <div >
              <div className='price'>£4.00</div>
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
        <div className="banner-text" >Shop</div>
        </div>
       <div className='shop-list'>
       {renderShopList}
       </div>
    </div>
}