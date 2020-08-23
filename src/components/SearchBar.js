import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { username: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.username);
  };

  render() {
    return (
      <div className="search-bar container">
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">Search User</label>
            <input
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
              value={this.state.username}
              className="form-control"
              type="text"
              id="username"
              placeholder="kachukwuh..."
            />
          </div>
          <button
            className="btn btn-secondary btn-block"
            id="submitBtn"
            type="submit"
          >
            Search
          </button>
          <button
            className="btn btn-light btn-block"
            id="clearBtn"
            type="reset"
          >
            Clear
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
