import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser, addFavorites } from '../../actions';
import Card from '../../Components/Card/Card';
import PropTypes from 'prop-types';

export class Favorites extends Component {

  componentDidMount() {
    if (Object.keys(this.props.user).length > 0) {
      this.fetchFavorites();
    } else if (Object.keys(this.props.user).length === 0) {
      let user = JSON.parse(localStorage.getItem('movieTrackerUser'));
      this.props.loginUser(user.id, user.name);
      setTimeout(() => {
        this.fetchFavorites();
      }, 100)
    }
  }

  fetchFavorites = async () => {
    const favoritesURL = `http://localhost:3000/api/users/${this.props.user.id}/favorites`
    const response = await fetch(favoritesURL);
    const data = await response.json();
    return this.props.addFavorites(this.findFavorites(data.data));
  }

  findFavorites = (movies) => {
    let movieIds = movies.map(movie => movie.movie_id);
    let foundMovies = this.props.movies.filter(movie => {
      return movieIds.includes(movie.movie_id);
    });
    let allFavorites = foundMovies.map(movie => {
      return <Card cardInfo={movie} key={movie.movie_id}/>
    });
    return allFavorites;
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
  fetchedMovies: state.fetchedMovies,
  movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (id, name) => dispatch(loginUser(id, name)),
  addFavorites: (movies) => dispatch(addFavorites(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
  
Favorites.propTypes = {
    user: PropTypes.object.isRequired,
    fetchedMovies: PropTypes.array.isRequired,
    loginUser: PropTypes.func.isRequired,
    addFavorites: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired
}