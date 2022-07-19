import React, { Component } from 'react'
import Bodycomponent from './Bodycomponent'
import ComponentFooter from './ComponentFooter'
import Headercomponet from './Headercomponet'


export default class HomeComponent extends Component {
  render() {
    return (
        <div >
        <header >
        <Headercomponet></Headercomponet>
        </header>
        <body className='container'>
            <Bodycomponent></Bodycomponent>
        </body>
        <div className='footer'>
            <ComponentFooter></ComponentFooter>
        </div>
        </div>
        
    )
  }
}
