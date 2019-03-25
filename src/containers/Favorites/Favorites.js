import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { apiKey } from  '../../apiURL';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions';

export class Favorites extends Component {

  componentWillUpdate() {    
    if (Object.keys(this.props.user).length > 0) {
      this.fetchFavorites();
    }
  }

  fetchFavorites = async () => {
    const favoritesURL = `http://localhost:3000/api/users/${this.props.user.id}/favorites`
    const response = await fetch(favoritesURL);
    const data = await response.json();
    return data.data
  }

  render() {
    if(Object.keys(this.props.user).length === 0) { 
      let user = JSON.parse(localStorage.getItem('movieTrackerUser'));
      if (user) {
        this.props.loginUser(user.id, user.name);
        return <Redirect to={`/${user.id}/favorites/`} />;
      } else {
        return <Redirect to='/sign-in'/>;
      }
    }
    return (
      <section>
        {/* {this.displayFavoriteMovies()} */}
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (id, name) => dispatch(loginUser(id, name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)