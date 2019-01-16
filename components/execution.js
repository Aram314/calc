import React from "react";
import SignField from "./signField";

class Execution extends React.Component {
    constructor(){
        super();
        this.changeSign = this.changeSign.bind(this);
    }
    changeSign(data){
        this.props.onSignChange(data)
    }
    render(){
        const sign = this.props.sign;
        return (
            <div>
                <SignField sign={sign} changeSign={this.changeSign} />
            </div>
        )
    }
}

export default Execution