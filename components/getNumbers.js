import React from 'react';
import Execution from './execution'
import NumberField from './numberField';
import Result from './result'

class GetNumbers extends React.Component {
    constructor(){
        super();
        this.state = {
            a: '',
            b: '',
            sign: ''
        };
        this.changeA = this.changeA.bind(this);
        this.changeB = this.changeB.bind(this);
        this.changeSign = this.changeSign.bind(this);
    }
    changeA(data){
        this.setState({a: data})
    }
    changeB(data){
        this.setState({b: data})
    }
    changeSign(data){
        let str = data.substr(-1);
        if(str !== '+' && str !== '-' && str !== '*' && str !== '/' && str !== '') {
            return;
        }
        this.setState({sign: str})
    }
    render(){
        const {a,b,sign} = this.state;
        return (
            <div>
                <NumberField num={a} onNumChange={this.changeA} label="Number 1"/>
                <Execution a={a} b={b} sign={sign} onSignChange={this.changeSign} />
                <NumberField num={b} onNumChange={this.changeB} label="Number 2"/>
                <Result a={a} b={b} sign={sign} onSignChange={this.changeSign} />
            </div>

        )
    }
}

export default GetNumbers