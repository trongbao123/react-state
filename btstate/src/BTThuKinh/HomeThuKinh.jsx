import React, { Component } from 'react'
import dataGlasses from '../dataGlasses.json'

export default class HomeThuKinh extends Component {
    state = {
        glasscurrent: {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
    }
  
    renderglass = () => {
        return dataGlasses.map((item,index) => { 
             return <img onClick={() => {this.changeGlasses(item) }} className='ml-2 p-2 border border-radius-width-1' style={{width:"120px",cursor:'pointer'}} key={index} src={item.url} alt="{item.url}" />
         })
    }

    changeGlasses = (newglasses) =>{
        this.setState( { 
            glasscurrent:newglasses
         })
    }




    render() {
       const styleglass = {
        width: '125px',
        position: 'relative',
        top: '76px',
        right: '81px',
        opacity: '0.8'
       }

       const styletext = {
        width: '250px',
        top: '187px',
        left: '270px',
        textAlign: 'left',
        height: '118px',
        backgroundColor:'rgba(255,127,0,.5)'
       }




        return (
            <div style={{ backgroundImage: 'url(./img/background.jpg)', minHeight: '2000px', backgroundSize: '1400px' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.8)', minHeight: '2000px' }}>
                    <h3 style={{ backgroundColor: 'rgba(0,0,0,.3)' }} className="text-center text-light p-5">
                        Try Glassed app online
                    </h3>
                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className="col-6">
                                <div className="position-relative">
                                    <img className='position-absolute' style={{ width: '250px' }} src="./img/model.jpg" alt="model.jpg" />
                                    <img style={styleglass} className='position-absolute' src={this.state.glasscurrent.url} alt="" />
                                </div>
                                <div style={styletext} className="position-relative">
                                    <p className='font-weight-bold'>Tên Kính:{this.state.glasscurrent.name}</p>
                                    <p className='font-weight-bold'>Mô tả:{this.state.glasscurrent.desc}</p>
                                </div>

                            </div>
                            <div className="col-6">
                                <img style={{ width: '250px' }} src="./img/model.jpg" alt="model.jpg" />

                            </div>
                        </div>
                    </div>
                    <div className="bg-light container mt-5 d-flex text-center justify-content-center ">
                        {this.renderglass()}
                    </div>
                </div>

            </div>
        )
    }
}
