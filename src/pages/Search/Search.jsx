import React,{useEffect,useState} from 'react';
import './Search.css';
import 'antd/dist/antd.css';
import { Input, DatePicker,Select,Typography,InputNumber,Divider,Button,List,Space } from 'antd';
import { CarOutlined,UserOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Title } = Typography;
export default  function Search(){
 
  const [countryList, setCountryList] = useState([]);

  const getCountryList =()=>{
    axios.get('https://us-central1-open-data-cw2.cloudfunctions.net/getCountries').then(res=>{
      setCountryList(res.data);
    })
  }
  useEffect(() => {
   getCountryList();
  }, [])

  const renderCountryOption = countryList.map(el=>{
    return <Select.Option value={el} >{el}</Select.Option>
  })
    const IconText = ({ icon, text }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
      );
    
    const data = [{
        href: 'https://ant.design',
        title: `ant design part `,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      },
      {
        href: 'https://ant.design',
        title: `ant design part`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      },
      {
        href: 'https://ant.design',
        title: `ant design part`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      },
      {
        href: 'https://ant.design',
        title: `ant design part`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      }
    ]

      
        
        

    return (<div className='content'>
        <div className='search'>
        <Title level={3} >Project Search</Title>
        <div className='entry'>
            <div>
            Project Name:
            </div>
            <Input.Search placeholder="Search project." style={{width:'60%'}} enterButton />
        </div>
        <div className='entry'>
            <div>
            Start Date:
            </div>
            <DatePicker  />
        </div>
        <div className='entry'>
            <div>
            End Date:
            </div>
            <DatePicker  />
        </div>
        <div className='entry'>
            <div>
            Country:
            </div>
            <Select placeholder="Country" >
              {renderCountryOption}
            </Select>
        </div>
        <div className='entry'>
            <div>
            Category:
            </div>
            <Select placeholder="Category" />
        </div>
       
        <Title level={5} >Donations Goal</Title>
       
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
        <Title level={5} >Number of Participants</Title>
       
       <div className='entry'>
           <div>
           From:
           </div>
           <InputNumber 
           formatter={value => `${value}ppl`}
           parser={value => value.replace('ppl', '')} />
       </div>
       <div className='entry'>
           <div>
           To:
           </div>
           <InputNumber 
           formatter={value => `${value}ppl`}
           parser={value => value.replace('ppl', '')} />
       </div>
       <Button block={true} type="primary" size='large'>Search</Button>
        </div>
        <Divider style={{height:'100%'}} type='vertical' />
        <div className='result'>
        <Title level={3} >Search Result</Title>
        <List dataSource={data} 
        itemLayout="vertical"
        size="large"
        renderItem={item => (
            <List.Item
            extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
              key={item.title}
              actions={[
                <IconText icon={CarOutlined} text="156km" key="list-vertical-star-o" />,
                <IconText icon={UserOutlined} text="200,000ppl" key="list-vertical-star-o" />
              ]}
              
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}/ >
        
    
        </div>
    </div>)
}