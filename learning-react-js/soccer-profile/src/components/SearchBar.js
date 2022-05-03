import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <h1>Opeyemi's Soccer Profile App</h1>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className="field">
                        <label>Enter A Player Name</label>
                        <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;