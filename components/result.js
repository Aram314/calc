import React from "react";

class Result extends React.Component {
    constructor(){
        super();
    }
    doExecution(){
        const {a, b, sign} = this.props;
        let res = '';

        if(a === '' || b === '' || sign === '') {
            return;
        } else {
            switch(sign) {
                case '+':
                    res = +a + +b;
                    break;
                case '-':
                    res = a - b;
                    break;
                case '*':
                    res = a * b;
                    break;
                case '/':
                    res = a / b;
                    break;
                default:
                    res = ''
            }
        }
        return res;
    }
    render(){
        return (
            <div className="result">
                = <span>{this.doExecution()}</span>
            </div>
        )
    }
}

export default Result