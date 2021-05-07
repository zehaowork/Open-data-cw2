import React,{useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";
import { Typography,Divider,List, Input, Button,Spin, Select } from 'antd';
import { Pie,Column } from '@ant-design/charts';
import './Home.css';
import HomePageBannerOne from '../../images/homepage-banner1.png'
import FooobankBanner from '../../images/foobankbanner.png'
import HelpingHandBanner from '../../images/helpingHnadBanner.png'
import CharitableBanner from '../../images/charitable-flow.png'
import axios from 'axios'
import HomePageBanner from '../../images/HomePageBanner.jpeg'

import FoodBankData from '../../resource/foodbank.json'

const {Title} = Typography;

export default function Home(){
  const history = useHistory();
  const [problem, setProblem] = useState([]);
  const [vizType, setVizType] = useState(0);
  var config = {
    appendPadding: 10,
    data: problem,
    
    angleField: 'Value',
    colorField: 'Problem',
    radius: 0.9,
   
    interactions: [{ type: 'element-active' }],
  };

  
  const handleVizChange = (value)=>{
    setVizType(value);
  }

const [rankList, setRankList] = useState([]);
  useEffect(() => {
   testApi();
  }, [])

  const [isShowLoading, setIsShowLoading] = useState(false);

    const testApi = ()=>{
        axios.get('https://us-central1-open-data-cw2.cloudfunctions.net/getRankedNeedsDataNew').then(result=>{
            console.log(result.data)
            setRankList(result.data);
        })
    };

    const getProblems = (value)=>{
      setIsShowLoading(true)
      axios.get('https://us-central1-open-data-cw2.cloudfunctions.net/getProblemOrderDictionary?postcode='+value).then(result=>{
       let tmpArr = result.data;
       tmpArr.forEach(el =>{
         el.Value = parseInt(el.Value.toFixed(0));
       })
       console.log(tmpArr)
        setProblem(tmpArr)
    }).finally(res=>{
      setIsShowLoading(false)
    })
    }

    return (<div className="home-content">
       {isShowLoading &&  <div className='home-spinner-container' ><Spin  size='large' /></div>}
       <div className="banner-section" >
       <div className="all-banner-mask"></div>
        <img alt="banner" className='banner' src={HomePageBanner} />
        <div className="banner-text" >
          <div>Charitable</div>
          <div className='note-text' >Discover Problem Around Your Area (London Only) </div>
        <Input.Search style={{width:'300px',margin:'0 0 10px 0'}} placeholder='Enter your postcode here'  onSearch={getProblems}  enterButton />
        </div>
        </div>
      <div className="step-section" >
      <div className='banner-text2' >We are ...</div>
      <div className='note-text' style={{color:'black',padding:'0 200px',fontSize:'20px'}} >Our aim is to help everyone live a better life. We believe that, by helping each other the world will be a better place to live. Together we can remove the problems in this world such as hunger, poverty. lack of education and many more! So join us in this mission to make the world a better place to live in! <span onClick={()=>{history.push('/Open-data-cw2/about')}} style={{color:'#1890ff'}} >read more</span>
      
      </div>
        <div className='banner-text2' style={{margin:'30px 0'}} >Things You Can Do ...</div>
      <img className='flow-img' alt='flow-chart' src={CharitableBanner} />
      </div>

     {/* <div className="section">
     <div className="side">
     
       <img className='side-banner-img' src={BannerOne} alt={"banner"}/>
       
       <img className='side-banner-img' src={BannerThree} alt={"banner"}/>
 
     </div>
     
    
      <div className="middle">
      <div className='description' > 
          <Title level={2} >Title</Title>
          <Typography.Text>Write Something Here...</Typography.Text>
        
          

      </div>
     
      <Title level={2} >Problems around your Area (UK only)</Title>
      <Input.Search style={{width:'300px',margin:'0 0 10px 0'}} placeholder='Enter your postcode here'  onSearch={getProblems}  enterButton />
      
      {problem.length >0 && <div className='pie-chart' >
        
        <Pie {...config} />
        <Button onClick={()=>{history.push('/Open-data-cw2/addProject')}} type='primary' >Start A Volunteering Project To Help！</Button>
        </div>}
    
      
      </div>
      
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
          
       </div>
      </List.Item>
    )} />
        </div>
        <Button style={{margin:'10px 0 0 0'}} onClick={()=>{history.push('/Open-data-cw2/foodbank')}} type='primary' >Find your Nearest Foodbank to help!</Button>
      </div>
     </div> */}
     <div className='data-viz-section'>
       <div className='banner-text2' >
         Explore Problems
       </div>
       <div className='filter-section'>
         <Select onChange={handleVizChange} style={{width:'300px'}}>
           <Select.Option value={1} >Problem Around your Area (London Only)</Select.Option>
           <Select.Option value={2} >Food Bank Usage Statistic</Select.Option>
           <Select.Option value={3} >Top items needed from food banks in UK</Select.Option>
         </Select>
         {vizType===1 && <Input.Search style={{width:'300px',margin:'0 0 10px 0'}} placeholder='Enter your postcode here'  onSearch={getProblems}  enterButton />} </div>
       {problem.length >0 && vizType===1 && <div className='pie-chart' >
        
        <Pie width={600} height={600} {...config} />
        
        <Button style={{margin:'20px 0'}} onClick={()=>{history.push('/Open-data-cw2/addProject')}} type='primary' >Start A Volunteering Project To Help！</Button>
        </div>}
       {vizType === 2 &&  <Column width={1000} height={600} showTitle={true} title='Food Bank Usage in UK' data={FoodBankData} xField='date' yField='value' isGroup={true} seriesField='Region' />}
       {vizType === 3 &&  <div className='rank-list' >
        <List bordered dataSource={rankList}
        header={
            <div className='rank-item'>
           <div className='rank-badge-container'>
           <div >🔥 Rank</div>
           </div>
           <div className='rank-name-container'>
           <div >🍔 Item Name</div>
           </div>
         
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
          
       </div>
      </List.Item>
    )} />
        </div>}
     </div>
     <div className='section'  >
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
