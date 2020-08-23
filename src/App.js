import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ProfileList from './components/ProfileList';
import ProfilePage from './components/ProfilePage';

class App extends Component {
  state = {
    profiles: [],
    userProfile: {},
    profileError: '',
    userRepos: [],
    reposError: '',
  };

  // Profile List API Call
  onFormSubmit = async (username) => {
    await axios
      .get('https://api.github.com/search/users', {
        params: {
          q: username,
        },
      })
      .then((res) => {
        this.setState({ profiles: res.data.items });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Individual Profile API Call
  profilePage = async (userProfile) => {
    await axios
      .get(`https://api.github.com/users/${userProfile.login}`)
      .then((res) => {
        this.setState({ userProfile: res.data });
      })
      .catch((err) => {
        this.setState({ profileError: 'Sorry, User Not Found!' });
      });

    // GitHub Repo API Call
    await axios
      .get(
        `https://api.github.com/users/${userProfile.login}/repos?per_page=5&sort=created:%20asc`
      )
      .then((res) => {
        this.setState({ userRepos: res.data });
      })
      .catch((err) => {
        this.setState({ reposError: 'User has no public repos!' });
      });
  };

  renderContent = () => {
    if (this.state.profiles.length > 0 && !this.state.userProfile.login) {
      return (
        <div>
          <SearchBar onFormSubmit={this.onFormSubmit} />
          <ProfileList
            profiles={this.state.profiles}
            profilePage={this.profilePage}
          />
        </div>
      );
    }

    if (this.state.profiles.length > 0 && this.state.userProfile.login) {
      return (
        <ProfilePage
          userProfile={this.state.userProfile}
          userRepos={this.state.userRepos}
        />
      );
    }

    return <SearchBar onFormSubmit={this.onFormSubmit} />;
  };

  render() {
    return (
      <div className="app">
        <Navbar />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
