import React, {Component} from 'react';

class FilterObject extends Component{

    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                {name: 'bob', type: 'human'},
                {name: 'bill', species: 'human'},
                {name: 'barry', animalKingdom: 'human'},
                {name: 'bob', type: 'human'},
            ],
            userInput : '',
            filteredArray: []
        }
        this.filter = this.filter.bind(this);
    }

    filter(){
        const filtered = this.state.unFilteredArray.filter((e)=>{
            let hasIt = false;
            for (const key in e) {
                key === this.state.userInput && (hasIt = true);
            }
            return hasIt;
        })
        this.setState({
            filteredArray: filtered
        })
    }

    render(){

        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Unflitered: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input onChange={(e)=>{this.setState({userInput: e.target.value})}} className="inputLine"/>
                <button onClick={this.filter} className="confirmationButton">Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }
}

export default FilterObject;