import React, { Component } from 'react'

class FilterList extends Component {
  state = {
    textInput : '',
    members : [
      {id: 1, name:'aaa'},
      {id: 2, name:'asas'},
      {id: 3, name:'asd'},
      {id: 4, name:'sad'},
      {id: 5, name:'fds'},
      {id: 6, name:'fdg'},
      {id: 7, name:'ewr'},
      {id: 8, name:'werewr'}

    ]
  }

  filterName = (e) => {
    console.log(e.target.value)
    this.setState({ textInput: e.target.value })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.filterName}/>
        {this.state.members
          .filter(member => member.name.includes(this.state.textInput))
          .map(member => <p key={member.id }>{member.name }</p>)}        
      </div>
    )
  }
}

export default FilterList;
