import React from 'react';
import '../styles/SearchBar.css'


class SearchBar extends React.Component {

	state = {suchBegriff:''};

	onSuchBegriffChange = (SBegriff) => {
		this.setState({ suchBegriff: SBegriff.target.value });

	};

	Suche = SBegriff => {
		//neuladen von Seite bei eingabe Suchbegriff verhindern
		SBegriff.preventDefault();
		//callback vom parent
		this.props.onSuche(this.state.suchBegriff);

	};

	render() {
		return (
			<div className="search-bar segment">
				<form className="ui form" onSubmit={this.Suche} >
					<div className="suchfeld">
						<label id="SucheHead"><p><h4>Suche nach Videos</h4></p></label>

						<input id="searchField"
							type="text"
							value={this.state.suchBegriff}
							onChange={this.onSuchBegriffChange}
							placeholder="Suchbegriff Eingeben"
							/>
					</div>



					<button onClick={this.Suche} className="btn btn-primary btn-lg btn-block SuchBtn ">Suchen</button>

					<hr />
				</form>

			</div>
		);
	}

}

	export default SearchBar;
