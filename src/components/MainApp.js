import React from 'react';
import SearchBar from './SearchBar';
import youtubeapi from '../apis/youtubeapi';
import VideoListe from './VideoListe';
import VideoDetail from './VideoDetail';

import '../styles/mainPage.css';



class MainApp extends React.Component {
	state = { videos: [], VideoSelected: null };
	//wenn Seite erste mal geladen wird
	componentDidMount() {
		this.onBegriffEingabe('frontend');
	}

	onBegriffEingabe = async suchBegriff => {
		const Antwort = await youtubeapi.get('/search', {
			params: {
				q: suchBegriff
			}
		});
		//update List von Videos und Videovorschau bei Sucheingabe
		this.setState({
			videos: Antwort.data.items,
			VideoSelected: Antwort.data.items[0]
		});
	};

onVideoAuswahl = video => {
	this.setState({ VideoSelected: video });
};


	render() {
		return (
			<div className="ui container searchBar">
				<SearchBar onSuche={this.onBegriffEingabe}/>
				<p id="suchErgebnisse">Ich habe <span id="anzahlVid">{this.state.videos.length}</span> videos gefunden.  -----></p>
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail id="videoDetail" video={this.state.VideoSelected} />
						</div>

						<div className="four wide column" id="VidListe">
							<VideoListe
								onVideoKlick={this.onVideoAuswahl}
								videos={this.state.videos}
							/>
						</div>


					</div>
				</div>

			</div>
		)
	}
}

export default MainApp;
