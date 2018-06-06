import React, { Component } from 'react'

class LifeCyclePropStateUpdate extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {}
  shouldComponentUpdate(nextProps, nextState) {}
  // componentWillUpdate(nextProps, nextState) {
  // DEPRECATE IN REACT 17
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {}
  componentDidUpdate(prevProps, prevState, snapshot) {}
  render() {
    return(
      <div></div>
    )
  }
}

export default LifeCyclePropStateUpdate;