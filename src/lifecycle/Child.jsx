import React from 'react';

class Child extends React.Component {
    componentDidMount() {
        console.log('componentDidMount was called');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount was called');
    }


    render() {
        return (
            <div>
                Child component
            </div>
        )
    }
}

export default Child;
