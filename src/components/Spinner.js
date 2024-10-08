import React, { Component } from 'react'

import load from './load.gif'
export default class spinner extends Component {
  render() {
    return (
      <div>
      <img src={load} alt='load'/>
      </div>
    )
  }
}
