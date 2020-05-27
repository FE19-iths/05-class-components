import React from 'react';
import './Books.css';

class SelectedBook extends React.Component {
    // extends gör så att vi får tillgång till state och props

    render() {
        // console.log('SelectedBook.render, props is: ', this.props);
        const selected = this.props.selected;
        if( !selected ) {
            return (<div className="selected-book"> No book selected. </div>);
        }
        return (
            <div className="selected-book">
                You have selected {selected.title} by {selected.author}.
            </div>
        )
    }
}

export default SelectedBook;
