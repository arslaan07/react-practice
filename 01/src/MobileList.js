import React from 'react'
import './MobileList.css'
export default function MobileList(props) { // jidr se render horha h, waha se prop aayega -> 'Mobile.js'
    
  return (
    <div className = 'main'>
        {props.title};
    <img className = 'image' src= {props.image}/>
    <div>
    <h3>{props.title}</h3>
    <p>$ {props.price} </p>
    <button>Add to cart</button>
    </div>
    </div>
  )
}
