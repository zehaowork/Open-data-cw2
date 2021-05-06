import React,{useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";
import { Typography,Divider,List, Input, Button } from 'antd';
import { Pie } from '@ant-design/charts';
import './Home.css';
import HomePageBannerOne from '../../images/homepage-banner1.png'
import FooobankBanner from '../../images/foobankbanner.png'
import HelpingHandBanner from '../../images/helpingHnadBanner.png'
import axios from 'axios'

const {Title} = Typography;

export default function Home(){
  const history = useHistory();
  const [problem, setProblem] = useState([]);
 
  var config = {
    appendPadding: 10,
    data: problem,
    angleField: 'Value',
    colorField: 'Problem',
    radius: 0.9,
   
    interactions: [{ type: 'element-active' }],
  };

  const [postcode, setPostcode] = useState("");

const [rankList, setRankList] = useState([]);
  useEffect(() => {
   testApi();
  }, [])


    const testApi = ()=>{
        axios.get('https://us-central1-open-data-cw2.cloudfunctions.net/getRankedNeedsDataNew').then(result=>{
            console.log(result.data)
            setRankList(result.data);
        })
    };

    const getProblems = (value)=>{
      axios.get('https://us-central1-open-data-cw2.cloudfunctions.net/getProblemOrderDictionary?postcode='+value).then(result=>{
       let tmpArr = result.data;
       tmpArr.forEach(el =>{
         el.Value = parseInt(el.Value.toFixed(0));
       })
       console.log(tmpArr)
        setProblem(tmpArr)
    })
    }

    return (<div className="home-content">
     <div className="section">
     <div className="side">
       
       
     </div>
     
     {/* <Divider style={{height:'100%'}} type='vertical' /> */}
      <div className="middle">
      <div className='description' > 
          <Title level={2} >Title</Title>
          <Typography.Text>Write Something Here...</Typography.Text>
        
          

      </div>
     
      <Title level={2} >Problems around your Area (UK only)</Title>
      <Input.Search style={{width:'300px'}} placeholder='Enter your postcode here'  onSearch={getProblems}  enterButton />
      {problem.length >0 && <div className='pie-chart' >
        
        <Pie {...config} />
        <Button onClick={()=>{history.push('/Open-data-cw2/addProject')}} type='primary' >Start A Volunteering Project To Help！</Button>
        </div>}
    
      
      </div>
      {/* <Divider style={{height:'100%'}} type='vertical' /> */}
      <div className="side" >
      <Title level={2} >Top Item Needed around UK</Title>
        <div className='rank-list' >
        <List bordered dataSource={rankList}
        header={
            <div className='rank-item'>
           <div className='rank-badge-container'>
           <div >🔥 Rank</div>
           </div>
           <div className='rank-name-container'>
           <div >🍔 Item Name</div>
           </div>
          {/* <div className='rank-quantity-container'>
          <div>1️⃣ Quantity</div>
          </div> */}
       </div>
        }
        renderItem={(item,index) => (
      <List.Item  >
       <div className='rank-item'>
           <div className='rank-badge-container'>
           <div className='rank-badge' >{index+1}</div>
           </div>
           <div className='rank-name-container'>
           <div className='rank-name' >{item.name}</div>
           </div>
          {/* <div className='rank-quantity-container'>
          <div>{item.quantity}</div>
          </div> */}
       </div>
      </List.Item>
    )} />
        </div>

      </div>
     </div>
     {/* <Divider style={{width:'100%'}} type='horizontal' /> */}
     <div className='section' >
            <div  onClick={()=>{history.push('/Open-data-cw2/search')}} className='side'>
              <div className='homepage-banner'>
                <div className='banner-mask'></div>
                <img src={HomePageBannerOne} alt='banner' className='banner-img'/>
                <div className='banner-text' >
                  Explore Project
                </div>
              </div>
            </div>
            
            <div  onClick={()=>{history.push('/Open-data-cw2/foodbank')}} className='side'>
            <div className='homepage-banner'>
                <div className='banner-mask'></div>
                <img src={FooobankBanner} alt='banner' className='banner-img'/>
                <div className='banner-text' >Food Bank</div>
              </div>
            </div>
            
            <div onClick={()=>{history.push('/Open-data-cw2/addProject')}}  className='side'>
            <div  className='homepage-banner'>
                <div className='banner-mask'></div>
                <img src={HelpingHandBanner} alt='banner' className='banner-img'/>
                <div className='banner-text' >Start Project</div>
              </div>
            </div>
     </div>
  
    </div>)
}
