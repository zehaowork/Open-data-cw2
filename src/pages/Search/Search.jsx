import React,{useEffect,useState} from 'react';
import './Search.css';
import 'antd/dist/antd.css';
import { Input, Pagination,Tabs,Select,Typography,Spin,Divider,Button,List,Space } from 'antd';

import { CarOutlined,UserOutlined,HomeOutlined,MoneyCollectOutlined} from '@ant-design/icons';
import axios from 'axios';
import ImgHolder from '../../images/img-holder.jpeg'
const { Title } = Typography;
const { TabPane } = Tabs;

export default  function Search(){

  const [countryList, setCountryList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [result, setResult] = useState([]);
  const [tabNum, setTabNum] = useState('1');
  const [listLoading, setListLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [projectResult, setProjectResult] = useState([]);
  const [charitableProjectResult, setCharitableProjectResult] = useState([]);
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");

  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [postcode, setPostcode] = useState("");


  const onPaginationChange = ()=>{
    
    getProject();
  }

  const getCountryList =()=>{
    axios.get('https://us-central1-open-data-cw2.cloudfunctions.net/getCountries').then(res=>{
      setCountryList(res.data);
    })
  }
  const getCategoryList = ()=>{
    axios.get('https://us-central1-open-data-cw2.cloudfunctions.net/getProjectsThemeIDs')
    .then(res=>{
      console.log(res.data)
      setCategoryList(res.data.themes.theme);
    })
  }

  const getResult = ()=>{
    setListLoading(true);
    axios.get('https://us-central1-open-data-cw2.cloudfunctions.net/searchCharities?postcode='+postcode+'&search='+keyword).then(res=>{
      console.log(res.data);
      setResult(res.data.CHC.getCharities.list)
    }).finally(res=>{
      setListLoading(false);
    })
  };

  const getProject = ()=>{
    setListLoading(true);
    axios.get('https://us-central1-open-data-cw2.cloudfunctions.net/searchProjects?keywords='+keyword+'&themeId='+category+'&start='+(pageCount*10)+'&country='+country).then(res=>{
      setProjectResult(res.data.search.response.projects.project)
      setTotalItem(res.data.search.response.numberFound);
      setPageCount(pageCount+1);
      setListLoading(false);
    }).catch(err=>{
      setListLoading(false);
    })
  }

  const getOurProject = ()=>{
    if(country !== "" && category !==""){
      setListLoading(true);
      axios.get("https://us-central1-open-data-cw2.cloudfunctions.net/getOurProjectsByThemeCountry?country="+country+"&theme="+category).then(res=>{
        console.log(res.data.data);
        setCharitableProjectResult(res.data.data);
      }).finally(res=>{
        setListLoading(false);
      });
    }
    else if(country !== "" && category === ""){
      setListLoading(true);
      axios.get("https://us-central1-open-data-cw2.cloudfunctions.net/getOurProjectsByCountry?country="+country).then(res=>{
        console.log(res.data);
        setCharitableProjectResult(res.data.data);
      }).finally(res=>{
        setListLoading(false);
      });
    }
    else if(country ==="" && category !==''){
      setListLoading(true);
      axios.get("https://us-central1-open-data-cw2.cloudfunctions.net/getOurProjectsByTheme?theme="+category).then(res=>{
        console.log(res.data);
        setCharitableProjectResult(res.data.data);
      }).finally(res=>{
        setListLoading(false);
      });
    }
    else{
      alert("Please enter a some search filter.");
    }
  };

  useEffect(() => {
   getCountryList();
   getCategoryList();
  }, [])
  

  const renderCountryOption = countryList.map(el=>{
    return <Select.Option value={el} >{el}</Select.Option>
  });
  const renderCategoryOption = categoryList.map(el=>{
    return <Select.Option value={el.id} >{el.name}</Select.Option>
  })
    const IconText = ({ icon, text }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
      );
    
    

    // const onStartDateChange = (date,dateString)=>{
    //   setStartDate(dateString);
    // }
    // const onEndDateChange = (date,dateString)=>{
    //   setEndDate(dateString);
    // }
    
    const handleCountryChange = (value)=>{
      setCountry(value);
    }

    const handleCategoryChange = (value)=>{
      setCategory(value);
    }

    const switchTab =(activeKey)=>{
      setKeyword("");
      setTabNum(activeKey);
    };
        
        

    return (<div className='content'>
      
        <div className='search'>
        <Title level={3} >Project Search</Title>
        <Tabs onChange={switchTab} defaultActiveKey="1" >
    <TabPane tab="Project" key="1">
    <div className='entry'>
            <div>
            Project Topic:
            </div>
            <Input value={keyword} onChange={(e)=>{setKeyword(e.target.value);}} placeholder="Search project." style={{width:'60%'}} enterButton />
        </div>
        
        {/* <div className='entry'>
            <div>
            Start Date:
            </div>
            <DatePicker onChange={onStartDateChange}   />
        </div> */}
        {/* <div className='entry'>
            <div>
            End Date:
            </div>
            <DatePicker  onChange={onEndDateChange} />
        </div> */}
        <div className='entry'>
            <div>
            Country:
            </div>
            <Select onChange={handleCountryChange} style={{width:'60%'}} placeholder="Country" >
              {renderCountryOption}
            </Select>
        </div>
        <div className='entry'>
            <div>
            Category:
            </div>
            <Select onChange={handleCategoryChange} style={{width:'60%'}} placeholder="Category" >
              {renderCategoryOption}
            </Select>
        </div>
       
        {/* <Title level={5} >Donations Goal</Title>
       
        <div className='entry'>
            <div>
            From:
            </div>
            <InputNumber 
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')} />
        </div>
        <div className='entry'>
            <div>
            To:
            </div>
            <InputNumber 
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')} />
        </div>
        <div className='entry'>
            <div>
            Amount Contributed:
            </div>
            <InputNumber 
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')} />
        </div>
        <Title level={5} >Number of Participants</Title> */}
       
       {/* <div className='entry'>
           <div>
           From:
           </div>
           <InputNumber 
           formatter={value => `${value}ppl`}
           parser={value => value.replace('ppl', '')} />
       </div> */}
       {/* <div className='entry'>
           <div>
           To:
           </div>
           <InputNumber 
           formatter={value => `${value}ppl`}
           parser={value => value.replace('ppl', '')} />
       </div> */}
       <Button onClick={()=>{
        getProject();
       }} block={true} type="primary" size='large'>Search</Button>
    </TabPane>
    <TabPane tab="Charity" key="2">
    <div className='entry'>
            <div>
            Charity Name
            </div>
            <Input value={keyword} onChange={(e)=>{setKeyword(e.target.value);}} placeholder="Search project." style={{width:'60%'}} enterButton />
        </div>
        <div className='entry'>
            <div>
            Post Code:
            </div>
            <Input value={postcode} onChange={(e)=>{setPostcode(e.target.value);}} placeholder="Post Code" style={{width:'60%'}} enterButton />
        </div>
        {/* <div className='entry'>
            <div>
            Start Date:
            </div>
            <DatePicker onChange={onStartDateChange}   />
        </div> */}
        {/* <div className='entry'>
            <div>
            End Date:
            </div>
            <DatePicker  onChange={onEndDateChange} />
        </div> */}
       
        
       
        {/* <Title level={5} >Donations Goal</Title>
       
        <div className='entry'>
            <div>
            From:
            </div>
            <InputNumber 
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')} />
        </div>
        <div className='entry'>
            <div>
            To:
            </div>
            <InputNumber 
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')} />
        </div>
        <div className='entry'>
            <div>
            Amount Contributed:
            </div>
            <InputNumber 
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')} />
        </div>
        <Title level={5} >Number of Participants</Title> */}
       
       {/* <div className='entry'>
           <div>
           From:
           </div>
           <InputNumber 
           formatter={value => `${value}ppl`}
           parser={value => value.replace('ppl', '')} />
       </div> */}
       {/* <div className='entry'>
           <div>
           To:
           </div>
           <InputNumber 
           formatter={value => `${value}ppl`}
           parser={value => value.replace('ppl', '')} />
       </div> */}
       <Button onClick={()=>{
         getResult();
       }} block={true} type="primary" size='large'>Search</Button>
    </TabPane>
    <TabPane tab="Charitable Project" key='3' >
    <div className='entry'>
            <div>
            Country:
            </div>
            <Select onChange={handleCountryChange} style={{width:'60%'}} placeholder="Country" >
              {renderCountryOption}
            </Select>
        </div>
        <div className='entry'>
            <div>
            Category:
            </div>
            <Select onChange={handleCategoryChange} style={{width:'60%'}} placeholder="Category" >
              {renderCategoryOption}
            </Select>
        </div>
        <Button onClick={()=>{
        getOurProject();
       }} block={true} type="primary" size='large'>Search</Button>
    </TabPane>

  </Tabs>
       
        </div>
        <Divider style={{height:'100%'}} type='vertical' />
        <div  className='result-holder'>
       {listLoading &&  <div className='spinner-container' ><Spin  size='large' /></div>}
        {tabNum ==='1'?<div className='result'>
        <Title level={3} >Search Result</Title>
        <List style={{height:'100%'}} dataSource={projectResult} 
        itemLayout="vertical"
        size="large"
        renderItem={item => (
            <List.Item
            key={item.id}
            extra={
                <img
                
                  width={200}
                  height={200}
                  alt="logo"
                  src={item.image.imagelink[5].url}
                />
              }
              key={item.title}
              actions={[
                <IconText icon={MoneyCollectOutlined} text={item.funding.toFixed(2)+' / '+item.goal.toFixed(2)} key="list-vertical-star-o" />,
                <IconText icon={UserOutlined} text={item.numberOfDonations+"ppl"} key="list-vertical-star-o" />,
                <IconText icon={HomeOutlined} text={item.contactAddress} key="list-vertical-star-o" />
              ]}
              
            >
              <List.Item.Meta
                title={<a href={item.contactUrl}>{item.title}</a>}
                description={item.summary}
              />
              {item.content}
            </List.Item>
          )}/ >
        
        
        </div>:tabNum ==='2'?<div className='result'>
        <Title level={3} >Search Result</Title>
        <List dataSource={result} 
        itemLayout="vertical"
        size="large"
        renderItem={item => (
            <List.Item
            extra={
                <img
                  width={200}
                  height={200}
                  alt="logo"
                  src={item.image?item.image.logo.small:ImgHolder}
                />
              }
              key={item.title}
              actions={[
                // <IconText icon={CarOutlined} text="156km" key="list-vertical-star-o" />,
                <IconText icon={UserOutlined} text={item.numPeople.trustees+item.numPeople.employees+item.numPeople.volunteers+"ppl"} key="list-vertical-star-o" />,
                <IconText icon={HomeOutlined} text={item.geo.postcode}key="list-vertical-star-o" />
              ]}
              
            >
              <List.Item.Meta
                title={<a href={item.website}>{item.names[0].value}</a>}
                description={item.activities}
              />
              {item.content}
            </List.Item>
          )}/ >
        
        
        </div>:<div className='result'>
        <Title level={3} >Search Result</Title>
        <List style={{height:'100%'}} dataSource={charitableProjectResult} 
        itemLayout="vertical"
        size="large"
        renderItem={item => (
            <List.Item
            key={item.id}
            extra={
                <img
                
                  width={200}
                  height={200}
                  alt="logo"
                  src={ImgHolder}
                />
              }
              
              actions={[
                
                <IconText icon={UserOutlined} text={item.personGoal} key="list-vertical-star-o" />,
                <IconText icon={MoneyCollectOutlined} text={item.monetaryGoal} key="list-vertical-star-o" />,
                <IconText icon={HomeOutlined} text={item.contactAddress} key="list-vertical-star-o" />
              ]}
              
            >
              <List.Item.Meta
                title={<a href={item.contactUrl}>{item.title}</a>}
                description={item.summary}
              />
              {item.content}
            </List.Item>
          )}/ >
        
        
        </div>}
        {totalItem>10&&<Pagination onChange={onPaginationChange} current={pageCount} total={totalItem}  />}
        </div>
        
    </div>)
}