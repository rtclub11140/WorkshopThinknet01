import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import FilterList from './components/FilterList';
import LifeCycleMounting from './components/LifeCycleMounting';
import Styled from 'styled-components';
import StyleComponent from './components/StyleComponent';
import AntdReact from './components/AntdReact'

const TitleStyle = Styled.h1`
    font-size: 30px;
    color: salmon;
`
class App extends Component {
  state = {
    num: 1
  }

  Plus = () => {
    this.setState({num: this.state.num + 1})
  }

  render() {
    return (
      <div className="App">
        <TitleStyle>TitleStyle</TitleStyle>
        <Header name={"ddd"} />
        <FilterList/>
        <LifeCycleMounting num={this.state.num}/>
        <input type="button" value="Plus" onClick={this.Plus} />
        <StyleComponent/>
        <AntdReact/>
      </div>
    )
  }
}

export default App;
