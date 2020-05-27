import React from 'react';
import './App.css';
import Counter from './counter/Counter';

class App extends React.Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <h1> React class components </h1>
            </header>
            <main>
                <Counter />
            </main>
            </div>
        );
    }
}

export default App;
