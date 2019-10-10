import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

let score = 0;


const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => {
                    props.removePlayer(props.id)
                }}>x</button>
                {props.name}
            </span>

            <Counter />
        </div>
    );
}


class Counter extends React.Component {

    constructor() { //wraps around what is being passed in
        super() //calls the constructor
        this.state = { //must be called "state"
            score: 0
        };
    };

    incrementScore() {  //if using an arrow function, no need to BIND the items later
        console.log(this.state);
        this.setState(prevState => { //setState takes a callback function that references the previous state
            return {
                score: prevState.score + 1
            };
        });
        // console.log(this);
    }

    decreaseScore() {
        this.setState(prevState => {
            return {
                score: prevState.score - 1
            };
        });
    }

    render() {
        return (
            <div className="counter" >
                <button className="counter-action decrement" onClick={() => this.decreaseScore()}> - </button>

                <span className="counter-score">{this.state.score} </span>
                <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
                {/* Notice how there is no "" above */}
                {/* "this" will point to the counter component instacne */}
            </div>
        );
    }
}

class App extends React.Component {

    constructor() {
        super() //calls the constructor
        this.state = { //must be called "state"
            players: [
                {
                    name: "Guil",
                    id: 1
                },
                {
                    name: "Treasure",
                    id: 2
                },
                {
                    name: "Ashley",
                    id: 3
                },
                {
                    name: "James",
                    id: 4
                }
            ]
        }
    };

    handleRemovePlayer() { //this function is used later via interaction with the player component
        console.log(this.state);

        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header
                    title="Scoreboard"
                    totalPlayers={this.state.players.length}
                />

                {/* Players list */}
                {this.state.players.map(player =>
                    <Player
                        name={player.name}
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={(this.handleRemovePlayer)}
                    />
                )}
            </div>
        );
    }
}


ReactDOM.render( //if props or state change, React updates the render method
    <App />,
    document.getElementById('root')
);