import React from 'react';
import Child from './Child';

class Lifecycle extends React.Component {
    state = {
        showChild: true
    }
    toggleChild = () => {
        this.setState({ showChild: !this.state.showChild });
    }

    componentDidUpdate(prevProps, prevState) {
        if( this.state.showChild !== prevState.showChild ) {
            console.log('Lifecycle component: showChild changed to ' + this.state.showChild);
        }
    }

    render() {
        return (
            <div>
                <h2> Lifecycle demo </h2>
                <button onClick={this.toggleChild}>Toggle child</button>
                { this.state.showChild ? <Child /> : null }
            </div>
        )
    }
}

export default Lifecycle;
