import React from 'react';
import './App.css';
import Counter from './counter/Counter';
import SelectedBook from './books/SelectedBook';
import BookList from './books/BookList';
import Lifecycle from './lifecycle/Lifecycle';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBook: null
        }
        this.doSelectBook = this.doSelectBook.bind(this);
    }
    doSelectBook(book) {
        // this function will be called by BookList
        // console.log('doSelectBook anropas', book);
        this.setState({ selectedBook: book })
    }
    // doSelectBook = book => { ..... }
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <h1> React class components </h1>
            </header>
            <main>
                <Counter />

                <BookList doSelectBook={this.doSelectBook} />
                <SelectedBook selected={this.state.selectedBook} />

                <Lifecycle />
            </main>
            </div>
        );
    }
}

export default App;
