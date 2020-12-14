import React from 'react';
import '../css/Searchbar.css';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="Searchbar">
				<form onSubmit={this.onFormSubmit} className="form">
					<input
						className="inputfield"
						type="text"
						value={this.state.term}
						onChange={(event) => this.setState({ term: event.target.value })}
					/>
				</form>
				<div className="button-src">
					<button onClick={this.onFormSubmit}> search</button>
				</div>
			</div>
		);
	}
}

export default SearchBar;
