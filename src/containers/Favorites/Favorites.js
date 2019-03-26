import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser, addMovies, addFavorites } from '../../actions';
import Card from '../../Components/Card/Card';

export class Favorites extends Component {

  componentDidMount() {
    if (Object.keys(this.props.user).length > 0) {
      this.fetchFavorites()
    }
  }

  fetchFavorites = async () => {
    const favoritesURL = `http://localhost:3000/api/users/${this.props.user.id}/favorites`
    const response = await fetch(favoritesURL);
    const data = await response.json();
    const movies = this.renderMovies(data.data)

    if (this.props.fetchedMovies.length === 0) {
      if (!this.props.favoriteMovies.includes(Object.keys(movies))) {
        return this.props.addFavorites(movies)
      }
    }
  }

  renderMovies = (movies) => {
    return movies.map(movie => {
      return <Card cardInfo={movie} key={movie.movie_id}/>
    });
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
        {this.props.fetchedMovies}
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  fetchedMovies: state.fetchedMovies
})

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (id, name) => dispatch(loginUser(id, name)),
  addFavorites: (movies) => dispatch(addFavorites(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)