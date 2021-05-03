import React, { useState } from "react";
import "./Contact.css";
import { Typography } from "antd";
import Banner from "../../images/banner.jpeg";

import { Form, Input, Button } from "antd";
const { Title } = Typography;
const { TextArea } = Input;

export default function Contact() {
  return (
    <div className="contact-content">
      <div className="banner-section">
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
            span: 4,
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
            <Button>Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
