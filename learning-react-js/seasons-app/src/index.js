import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //this should be the normal way to set your state.
                this.setState({ lat: position.coords.latitude });
            }, 
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    //if you do not define render, React will throw an error. It is non-negotiable
    render() {
            if (this.state.errorMessage && !this.state.lat) {
                return <div>Error: { this.state.errorMessage }</div>;
            }

            if (!this.state.errorMessage && this.state.lat) {
                return <div>Latitude: { this.state.lat }</div>;
            }

            return <div>Loading...</div>;
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));
