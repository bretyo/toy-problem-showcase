import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }

        this.checkPalindrome = this.checkPalindrome.bind(this);
    }

    // THIS WORKS WITH SPACES AND CAPITAL LETTERS!
    checkPalindrome(){
        let s = this.state.userInput.split(' ').join('');
        const arr = [...s.slice(0,s.length/2)].reverse().join('');
        let word = '';
        if(s.slice(Math.ceil(s.length/2)).toUpperCase().trim() === arr.toUpperCase()){
            word = 'PALINDROME';
        }
        else{
            word = 'NOT PALINDROME'
        }
        this.setState({palindrome: word});
    }

    render(){

        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input onChange={(e)=>{this.setState({userInput: e.target.value})}} className="inputLine"/>
                <button onClick={this.checkPalindrome} className="confirmationButton">Check</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;