import React, {Component} from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        this.solve = this.solve.bind(this);
    }

    solve(){
        const inputArray = [...this.state.userInput]
        const evenArr = inputArray.filter((element, index)=>{
            return Number.parseInt(element, 10) % 2 === 0
        })
        const oddArr = inputArray.filter((element, index)=>{
            return Number.parseInt(element, 10) % 2 !== 0
        })
        this.setState({
            evenArray: evenArr,
            oddArray: oddArr
        })
    }

    render(){

        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input 
                    onChange={(e)=>{this.setState({userInput: e.target.value})}} 
                    className="inputLine"
                    />
                <button 
                    onClick={this.solve}
                    className="confirmationButton"
                    >Split</button>
                <span className="resultsBox">Evens: {this.state.evenArray}</span>
                <span className="resultsBox">Odds: {this.state.oddArray}</span>
            </div>
        )
    }
}

export default EvenAndOdd;