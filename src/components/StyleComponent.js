import React, { Component } from 'react'
import Styled from 'styled-components'
const LabelTextbox = Styled.div`
  color: blue;
  font-size: 16px;
`

const LabelTooltip = Styled.div`
  color: blue;
  font-size: 14px;
`

const ButtonSend = Styled.button`
  background-color: blue;
  color: white;
  font-size: 14px;
  margin-left: 10px; 

  &:hover {
    background: salmon;
    color: white;
    }
`
const InputText = Styled.input`
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
`

const DivVertical = Styled.div`
    display: flex;
    align-items: center;
`

class StyleCompoent extends Component {

  render() {
    return (
      <div>
        <LabelTextbox>Enter your email to be notified when Menucopia is </LabelTextbox>
        <InputText type="text" height="30px" width="200px"/>
        <DivVertical>
          <LabelTooltip>Your email address will be kept private</LabelTooltip>
          <ButtonSend>Send</ButtonSend>
        </DivVertical>        
      </div>
    )
  }
}

export default StyleCompoent;

