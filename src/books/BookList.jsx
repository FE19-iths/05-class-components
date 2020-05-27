import React from 'react';
import './Books.css';

class BookList extends React.Component {
    constructor(props) {
        super(props);  // props innehåller doSelectBook
        this.state = {
            list: [
                {
                    title: 'Lord of the rings',
                    author: 'J.R.R. Tolkien'
                },
                {
                    title: 'Harry Potter och de vises sten',
                    author: 'J.K. Rowling'
                },
                {
                    title: 'JavaScript for Dummies',
                    author: 'Chris Minnick'
                },
                {
                    title: 'JavaScript - the good parts',
                    author: 'Douglas Crockford'
                }
            ]
        }
    }

    render() {
        const jsxList = this.state.list.map(book => (
            <div key={book.title + book.author}>
                <div>{book.title}, {book.author}</div>
                <button onClick={() => this.props.doSelectBook(book)}> Select </button>
            </div>
        ))
        return (
            <div className="book-list">
                {jsxList}
            </div>
        )
    }
}

export default BookList;
