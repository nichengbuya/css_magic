import React from "react";
import './staggered.scss'
class Staggered extends React.Component{
    render(){
        return(    
            <div className="loading">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        )
    }
}
export default Staggered;