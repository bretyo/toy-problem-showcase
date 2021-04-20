import React, {Component} from 'react';

class FilterString extends Component{
    constructor(){
        super();
        this.state = {
            unFilteredArray: ['ant', 'ant farm', 'aunt', 'aunt farm', 'farmer', 'farm', 'antfarm'],
            userInput: '',
            filteredArray: []
        }
        this.filter = this.filter.bind(this);
    }

    filter(){ 
        // const newArr =  
        this.setState({ filteredArray: this.state.unFilteredArray.filter((e)=>{
            return e.includes(this.state.userInput)
        })})
    }

    render(){

        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input onChange={(e)=>{this.setState({userInput: e.target.value})}} className="inputLine"/>
                <button onClick={this.filter} className="confirmationButton">Filter!</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>

        )
    }
}

export default FilterString;