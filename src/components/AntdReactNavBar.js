import React, { Component } from 'react'
import {Icon} from 'antd'
import Styled from 'styled-components'

const IconInstargram = Styled(Icon)`
  font-size:30px;
`

const DivVertical = Styled.div`
    display: flex;
    align-items: center;
`
const LabelNavbar = Styled.label`
    font-weight: ${props => props.fontWeight || 'bold'};
`

const Textbox = Styled.input`
    width: 300px;
`


class AntdReactNavBar extends Component {
  render() {
    return (
      <DivVertical>
        <IconInstargram><Icon type="instagram" /></IconInstargram>
        <LabelNavbar fontWeight="200px">|</LabelNavbar>
        <LabelNavbar fontWeight="bold">Instargram</LabelNavbar>
        <Textbox></Textbox>
      </DivVertical>
      
    )
  }

}

export default AntdReactNavBar