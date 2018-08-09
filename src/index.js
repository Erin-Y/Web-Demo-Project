import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyDoBOk8rPhTgKh46DdeNStsRi11CZEbAk8';

// Create a new component. It should produce some HTML
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

ReactDom.render(<App/>, document.querySelector('.container'));