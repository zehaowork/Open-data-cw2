import React,{useState,useEffect} from 'react'
import {Button, Form,Input,Typography} from 'antd'
import './Project.css'
export default function Project(){
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 30,
        },
      };
    return<div class='project-content' >
        <Typography.Title level={1}>Add new Project</Typography.Title>
        
       <div class='project-form'>
       <div class='project-div'>
       <div className='project-entry'>
            <div>
            Project Name
            </div>
            <Input  placeholder="enter project name" style={{width:'300px'}} enterButton />
        </div>
        <div className='project-entry'>
            <div>
            Category
            </div>
            <Input  placeholder="enter project category" style={{width:'300px'}} enterButton />
        </div>
        <div className='project-entry'>
            <div>
            Project Link
            </div>
            <Input  placeholder="enter project category" style={{width:'300px'}} enterButton />
        </div>
        <div className='project-entry'>
            <div>
            Country
            </div>
            <Input  placeholder="enter project category" style={{width:'300px'}} enterButton />
        </div>
        <div className='project-entry'>
            <div>
            Summary
            </div>
            <Input.TextArea  placeholder="enter project history" style={{width:'300px',height:'100px'}} enterButton />
        </div>
        <div className='project-entry'>
            <div>
            Need
            </div>
            <Input.TextArea  placeholder="enter project history" style={{width:'300px',height:'100px'}} enterButton />
        </div>
       </div>
       <div className='project-div'>
       <div className='project-entry'>
            <div>
            Contact Name
            </div>
            <Input  placeholder="enter project name" style={{width:'300px'}} enterButton />
        </div>
        <div className='project-entry'>
            <div>
            Contact Number
            </div>
            <Input  placeholder="enter project category" style={{width:'300px'}} enterButton />
        </div>
        <div className='project-entry'>
            <div>
            Contact Address
            </div>
            <Input  placeholder="enter project category" style={{width:'300px'}} enterButton />
        </div>
        <div className='project-entry'>
            <div>
            Contact Address 2
            </div>
            <Input  placeholder="enter project category" style={{width:'300px'}} enterButton />
        </div>
        <div className='project-entry'>
            <div>
            Summary
            </div>
            <Input.TextArea  placeholder="enter project history" style={{width:'300px',height:'100px'}} enterButton />
        </div>
        <div className='project-entry'>
            <div>
            Activities
            </div>
            <Input.TextArea  placeholder="enter project history" style={{width:'300px',height:'100px'}} enterButton />
        </div>
       </div>
       </div>
        <Button type="primary" size="large" primary >Submit</Button>
    </div>
}