import React, {Component} from 'react';

class Sum extends Component{
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
        this.add = this.add.bind(this);
    }
    // THIS ACCOUNTS FOR IF THE INPUT VALUES AREN'T NUMBERS
    add(){
        Number.parseFloat(this.state.number1) && Number.parseFloat(this.state.number2) ? 
            this.setState({ sum: Number.parseFloat(this.state.number1) + Number.parseFloat(this.state.number2) })
            : this.setState({ sum: 'Both values need to be a number!'})
    }

    render(){

        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input onChange={(e)=>{this.setState({number1: e.target.value})}} className="inputLine"/>
                <input onChange={(e)=>{this.setState({number2: e.target.value})}} className="inputLine"/>
                <button onClick={this.add} className="confirmationButton">Add!</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;