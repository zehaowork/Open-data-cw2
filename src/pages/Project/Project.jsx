import React,{useState,useEffect} from 'react';
import {Button, Select,Modal,Input,Typography,Spin} from 'antd';
import axios from 'axios'
import './Project.css'


import Banner from '../../images/volunteering.jpeg'
export default function Project(){
    const [countryList, setCountryList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
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
      
    useEffect(() => {
       getCountryList();
       getCategoryList();
    }, [])

    const header = {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Origin":"localhost:3000"
      }

    const createProject = ()=>{
        setIsShowLoading(true)
        
        const dataStr = JSON.stringify({ title:projectName,
            theme:category,
            contactCountry:country,
            contactUrl:contactUrl,
            summary:summary,
            need:need,
            activities:activities,
            contactName:contactName,
            contactNumber:contactNumber,
            contactAddress:contactAddress,
            contactPostal:contactPostal,
            monetaryGoal:monetaryGoal,
            personGoal:personGoal});
        
            axios({method: 'POST',headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }, data:`data=${dataStr}`,url: 'https://us-central1-open-data-cw2.cloudfunctions.net/addProject',}).then(res=>{
               setIsModalVisible(true);
               
              }).catch(err=>{
                alert(err)  
              }).finally(res=>{
                  setIsShowLoading(false)
              })

    //     axios.post('http://localhost:5001/open-data-cw2/us-central1/addProject',{
           
            

      
    // },{
    //         headers:header
    //     }).then(res=>{
    //             console.log(res.data)
    //         }
    //     ).catch(err=>{
    //         alert(err)
    //     })
    }

    const [projectName, setProjectName] = useState("");
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");
    const [contactUrl, setContactUrl] = useState("");
    const [summary, setSummary] = useState("");
    const [need, setNeed] = useState("");
    const [activities, setActivities] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [contactName, setContactName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [contactAddress, setContactAddress] = useState("");
    const [contactPostal, setContactPostal] = useState("");

   const [monetaryGoal, setmonetaryGoal] = useState(0);
   const [personGoal, setPersonGoal] = useState(0);
   const [isShowLoading, setIsShowLoading] = useState(false);

   const handleCountryChange = (value)=>{
    setCountry(value);
  }

  const handleCategoryChange = (value)=>{
      console.log(value);
    setCategory(value);
  }

  const handleOk = ()=>{
      setIsModalVisible(false);
  }

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 30,
        },
      };

      const renderCategoryOption = categoryList.map(el=>{
        return <Select.Option value={el.id} >{el.name}</Select.Option>
      })
      const renderCountryOption = countryList.map(el=>{
        return <Select.Option value={el} >{el}</Select.Option>
      });
    return<div class='project-content' >
        {isShowLoading &&  <div className='spinner-container' ><Spin  size='large' /></div>}
        <Modal title="Successful" visible={isModalVisible} onOk={handleOk} onCancel={handleOk}>
        <p>You have successfully created your project!</p>
        
      </Modal>
        <div className="banner-section" >
       <div className='food-bank-banner-mask'></div>
        <img alt="banner" className='banner' src={Banner} />
        <div className="banner-text" >Start Volunteering Work</div>
        </div>
        
       <div class='project-form'>
       <div class='project-div'>
           <Typography.Title level={5}>Project Details</Typography.Title>
       <div className='project-entry'>
            <div>
            Project Name
            </div>
            <Input value={projectName} onChange={(e)=>{setProjectName(e.target.value)}}  placeholder="enter project name" style={{width:'200px'}}  />
        </div>
        <div className='project-entry'>
            <div>
            Category
            </div>
            <Select
      
      
      onChange={handleCategoryChange}
      allowClear
      style={{width:'200px'}}
      placeholder="Please select"
     
    >
      {renderCategoryOption}
    </Select>
        </div>
        <div className='project-entry'>
            <div>
            Country
            </div>
            <Select
     onChange={handleCountryChange}
      allowClear
      style={{width:'200px'}}
      placeholder="Please select"
     
     
    >
      {renderCountryOption}
    </Select>
        </div>
        <div className='project-entry'>
            <div>
            Project Web Link
            </div>
            <Input value={contactUrl} onChange={(e)=>{setContactUrl(e.target.value)}} placeholder="enter project website" style={{width:'200px'}}  />
        </div>
        <div className='project-entry'>
            <div>
            Summary
            </div>
            <Input.TextArea value={summary} onChange={(e)=>{setSummary(e.target.value)}} placeholder="enter project summary" style={{width:'200px',height:'100px'}}  />
        </div>
        <div className='project-entry'>
            <div>
            Need
            </div>
            <Input.TextArea value={need} onChange={(e)=>{setNeed(e.target.value)}}  placeholder="enter project needs" style={{width:'200px',height:'100px'}}  />
        </div>
        <div className='project-entry'>
            <div>
            Activities
            </div>
            <Input.TextArea value={activities} onChange={(e)=>{setActivities(e.target.value)}} placeholder="enter main activities" style={{width:'200px',height:'100px'}}  />
        </div>
       </div>
       <div className='project-div'>
       <Typography.Title level={5}>Contact Details</Typography.Title>
       <div className='project-entry'>
            <div>
            Contact Name
            </div>
            <Input   value={contactName} onChange={(e)=>{setContactName(e.target.value)}} placeholder="enter your name" style={{width:'200px'}}  />
        </div>
        <div className='project-entry'>
            <div>
            Contact Number
            </div>
            <Input value={contactNumber} onChange={(e)=>{setContactNumber(e.target.value)}} placeholder="enter phone number" style={{width:'200px'}}  />
        </div>
        <div className='project-entry'>
            <div>
            Contact Address
            </div>
            <Input  value={contactAddress} onChange={(e)=>{setContactAddress(e.target.value)}} placeholder="enter contact address" style={{width:'200px'}}  />
        </div>
        <div className='project-entry'>
            <div>
            Contact Postcode
            </div>
            <Input  value={contactPostal} onChange={(e)=>{setContactPostal(e.target.value)}} placeholder="enter contact postcode" style={{width:'200px'}}  />
        </div>
        
       
       
       </div>
      <div className="project-div" >
      <div className='project-entry'>
      <Typography.Title level={5}>Project Targets</Typography.Title>
            <div>
            Person Goal
            </div>
            <Input value={monetaryGoal} onChange={(e)=>{setmonetaryGoal(e.target.value)}} placeholder="number of people required" style={{width:'200px'}}  />
        </div>
        <div className='project-entry'>
            <div>
            Monetary Goal
            </div>
            <Input value={personGoal} onChange={(e)=>{setPersonGoal(e.target.value)}} placeholder="money goal for this project" style={{width:'200px'}}  />
        </div>
      </div>
      </div>
        <Button onClick={()=>{createProject();}} type="submit" size="large" primary >Submit</Button>
    </div>
}