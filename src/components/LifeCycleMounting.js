import React, { Component } from 'react'

class LifeCycleMounting extends Component {
  constructor(props) {
    super(props)
    console.log("constructor")
  }
  state = {
    name: 'test',
  }

  // componentWillMount() { DEPRECATE IN REACT 17 }

  static getDerivedStateFromProps(nextProps, prevState) { // ทำเมื่อมีค่า props ส่งมาให้ component แล้วสามารถทำการตรวจสอบก่อน set state 
    console.log("getDerivedStateFromProps")
    console.log("nextProps", nextProps)
    console.log("prevState", prevState)    
  }
  componentDidMount() { // ทำหลังจาก render หน้าจอแล้ว ex : การ load ข้อมูลใส่ form
    console.log("componentDidMount")
    this.setState({ name: "TESTTTT" })
  }
  render() {
    console.log('render')
    return (
      <div>
        <h2>{ this.state.name }</h2>
        <h2>{ this.props.num }</h2>
      </div>
    )
  }
}

export default LifeCycleMounting;