import React, { useState } from "react";
import "./Contact.css";
import { Typography } from "antd";

import { Form, Input, Button } from "antd";
const { Title } = Typography;
const { TextArea } = Input;
// const FormSizeDemo = () => {
//   const [componentSize, setComponentSize] = useState("default");
// };

export default function Contact() {
  return (
    <div className="contact_content">
      <div className="contact_text">
        Our aim is to help everyone live a better life. We believe that, by
        helping each other the world will be a better place to live. Together we
        can remove the problems in this world such as hunger, poverty, lack of
        education and many more! <br /> So join us in this mission to make the
        world a better place to live in!{" "}
      </div>
      <div className="side_c">
        <Title level={1} className="centering">
          GET IN TOUCH
        </Title>

        {/* <div className="form_padding"> */}
        <Form
          labelCol={{
            span: 4,
          }}
          // wrapperCol={{
          //   span: 16,
          // }}
          layout="horizontal"
          className="form_padding centering"
        >
          <Form.Item label="Name">
            <Input />
          </Form.Item>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Subject">
            <Input />
          </Form.Item>
          <Form.Item label="Message">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item className="centering">
            <Button>Submit</Button>
          </Form.Item>
        </Form>
        {/* </div> */}
      </div>
    </div>
  );
}
