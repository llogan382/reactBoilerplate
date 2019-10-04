import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

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
                {props.playerName}
            </span>
            <Counter playerScore={props.playerScore} />
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.playerScore}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={4} />
            { /*  Players list!*/}
            <Player playerName="Pooks" playerScore={100} />
            <Player playerName="Sleepytime" playerScore={20} />
            <Player playerName="Cleo" playerScore={54} />
            <Player playerName="Cheese" playerScore={630} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);