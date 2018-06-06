import React, { Component } from 'react'
import AntdReactCard from './AntdReactCard'
import { Col, Row } from 'antd'
import AntdReactNavBar from './AntdReactNavBar'

class AntdReact extends Component{
  render() {
    return (
      <div>
        <AntdReactNavBar/>
        <Row>
          <Col sm={24}><AntdReactCard/></Col>
          <Col sm={24}><AntdReactCard/></Col>
          <Col sm={24}><AntdReactCard/></Col>
           <Col sm={24}><AntdReactCard/></Col>
        </Row>
        
        
      </div>
    )
  }
}
export default AntdReact;
