import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
const API_KEY = 'AIzaSyDoBOk8rPhTgKh46DdeNStsRi11CZEbAk8';



// Create a new component. It should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [], selectedVideo: null };
        this.videoSearch('minecraft');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({ videos: videos, selectedVideo: videos[0] });
        });
    }

    render() {
        const vidoeSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={vidoeSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.container'));