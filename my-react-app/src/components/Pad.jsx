import React from "react"

export default function Pad(props) {
    
    const [on, setOn] = React.useState(props.on)
    
    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : undefined}
            onClick={() => props.handleClick(props.id)}
        ></button>
    )
}