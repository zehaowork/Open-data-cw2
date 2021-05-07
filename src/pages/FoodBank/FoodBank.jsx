import React,{useState} from 'react'
import axios from 'axios';
import './FoodBank.css'
import Banner from '../../images/Food bank.jpg'
import {Input,Typography,Divider,Button,List,Space,Spin} from 'antd'
import {HomeOutlined,PhoneOutlined} from '@ant-design/icons';
const {Title} = Typography;

export default function FoodBank(){
    const [postcode, setPostcode] = useState("");
    const [result, setResult] = useState([]);
    const [isShowLoading, setIsShowLoading] = useState(false);
    const getFoodBank = ()=>{
        setIsShowLoading(true);
        axios.get("https://us-central1-open-data-cw2.cloudfunctions.net/getFoodbanks?postcode="+postcode).then(res=>{
            console.log(res.data);
            setResult(res.data);
        }).finally(res=>{
            setIsShowLoading(false);
        })
    }
    const IconText = ({ icon, text }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
      );
    return<div className="food-bank-content">
        {isShowLoading &&  <div className='spinner-container' ><Spin  size='large' /></div>}
       <div className="banner-section" >
       <div className="all-banner-mask"></div>
        <img alt="banner" className='banner' src={Banner} />
        <div className="banner-text" >Food Bank
        <div className='note-text' >This search engine allows you to see the food banks near your home and has a list of items they have reduced quantities of.  </div>
        </div>
        </div>
        <div className="food-bank-search"  >
            <div className="search" >
            <Title level={3} >Project Search</Title>
            <div className='entry'>
            <div>
            Postcode:
            </div>
            <Input value={postcode} onChange={(e)=>{setPostcode(e.target.value)}} placeholder="Enter your postcode" style={{width:'60%'}} enterButton />
        </div>
        <Button  onClick={()=>{getFoodBank();}} block={true} type="primary" >Search</Button>
            </div>
            <Divider style={{height:'100%'}} type='vertical' />
            <div className="result" >
            <Title level={3} >Search Result</Title>
            <List dataSource={result} 
        itemLayout="vertical"
        size="large"
        renderItem={item => (
            <List.Item
           
          
              
              actions={[
              
                 <IconText icon={HomeOutlined} text={item.distance_miles+"miles"} key="list-vertical-star-o" />,
                 <IconText icon={PhoneOutlined} text={item.phone} key="list-vertical-star-o" />
              ]}
              
            >
              <List.Item.Meta
                title={<a href={item.homepage_url}>{item.name}</a>}
                description={"Item Need: "+item.needs}
              />
              {/* {item.content} */}
            </List.Item>
          )}/ >
            </div>
        </div>
    </div>
}
