import React, { useState } from "react";
import "./Contact.css";
import { Typography } from "antd";
import Banner from "../../images/Contact us.jpg";

import { Form, Input, Button,Spin,Modal } from "antd";
const { Title } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(false);
  const submitForm = ()=>{
  setIsShowLoading(true);
    setTimeout(()=>{
      setIsModalVisible(true);
      setIsShowLoading(false);
    },3000)
  }

  const onOk = ()=>{
    setIsModalVisible(false)
  }
  return (
  
    <div className="contact-content">
         {isShowLoading &&  <div className='contact-spinner-container' ><Spin  size='large' /></div>}
        <Modal title="Successful" visible={isModalVisible} onOk={onOk} onCancel={onOk}>
        <p>Thank you for your feedback!</p>
        
      </Modal>
      <div className="banner-section">
      <div className="all-banner-mask"></div>
        <img alt="banner" className="banner" src={Banner} />
        <div className="banner-text">Contact Us</div>
      </div>

      <div className="contact-text">
        <Typography.Text>
          Our aim is to help everyone live a better life. We believe that, by
          helping each other the world will be a better place to live. Together
          we can remove the problems in this world such as hunger, poverty, lack
          of education and many more! <br /> So join us in this mission to make
          the world a better place to live in!
        </Typography.Text>
      </div>

      <div className="form-content">
        <Title level={1}>GET IN TOUCH</Title>

        <Form
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 16,
          }}
          layout="horizontal"
        >
          <Form.Item label="Name">
            <Input placeholder="Please enter your name" />
          </Form.Item>
          <Form.Item label="Email">
            <Input placeholder="Please enter your email" />
          </Form.Item>
          <Form.Item label="Subject">
            <Input placeholder="Please enter the subject" />
          </Form.Item>
          <Form.Item label="Message">
            <TextArea rows={4} placeholder="Please enter your message" />
          </Form.Item>

          <Form.Item className="submit-button">
            <Button onClick={()=>{submitForm();}} type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
