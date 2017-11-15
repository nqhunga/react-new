import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
    // this.props.videoSearch(term);
  }

  render() {
    return(
      <div className="search-bar input-group input-group-lg">
        <span className="input-group-addon" id="search-span">
          Search
        </span>
        <input
          type="text"
          aria-describedby="search-span"
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
