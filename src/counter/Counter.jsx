import React from 'react';

class Counter extends React.Component {
    state = {
        value: 10
    }
    render() {
        const value = this.state.value;
        const handleClickDecrease = () => {
            this.setState({
                value: value - 1  // this.state.value
            })
        }
        return (
            <div>
                Value: {value}
                <button onClick={() => this.setState({ value: value + 1 })}> +1 </button>
                <button onClick={handleClickDecrease}> -1 </button>
                <SneakyFunctionalComponent value={value} />
            </div>
        )
    }
}

function SneakyFunctionalComponent({ value }) {
    return ( <div> I am a sneaky functional component! I stole the value {value} </div> );
}


export default Counter;
