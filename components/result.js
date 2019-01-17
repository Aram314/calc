import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

class Result extends React.Component {
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
                <span>= </span>{this.doExecution() ? <span> {this.doExecution()}</span> : <CircularProgress  />}
            </div>
        )
    }
}

export default Result