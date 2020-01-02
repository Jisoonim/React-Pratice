import React, {Component} from 'react'
import { throwStatement } from '@babel/types'

class Hello2 extends Component{

    constructor() {
        super()
        this.state = {count: 1}
    }

    handleClick = () => {
        console.log("CLICK ++")
        this.setState({count: ++ this.state.count})
    }

    handleClick2 = () => {
        console.log("CLICK --")
        this.setState({count: -- this.state.count})
    }

    render() {
        return (
            <div>
            <h2>{this.state.count}</h2>
            <button onClick= {this.handleClick}> + </button>
            <button onClick= {this.handleClick2}> - </button>
            </div>
        )
    }
}

export default Hello2