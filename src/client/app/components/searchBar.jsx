import React from "react";

class SearchBar extends React.Component {
    render () {
        return (
            <div className="searchBar-container">
                <div className="searchBar">
                    <img id="icon-search" src="./res/Shape.svg"/>
                    <div id="search-line" content="Поиск"></div>
                </div>
            </div>
        );
    }
}

export default SearchBar;