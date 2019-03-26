import * as actions from './index';

describe('Actions', () => {

  it('should return a type of "ADD_MOVIES", with addMovies  ', () => {
    const movies = [{title: 'Captian Marvel', id: 123}];
    const predicted = {
      type: 'ADD_MOVIES',
      movies
    };
    const result = actions.addMovies(movies);

    expect(result).toEqual(predicted);
  });

  it('should return a type of "LOGIN_USER", with loginUser  ', () => {
    const id = 1
    const name = 'Francis'
    const predicted = {
      type: 'LOGIN_USER',
      id,
      name
    };
    const result = actions.loginUser(id, name);

    expect(result).toEqual(predicted);
  });

  it('should return a type of "FAVORITE_MOVIE", with setFavoriteMovies  ', () => {
    const id = 1;
    const predicted = {
      type: 'FAVORITE_MOVIE',
      id
    };
    const result = actions.setFavoriteMovies(id);

    expect(result).toEqual(predicted);
  });

  it('should return a type of "FAVORITE_MOVIES", with addFavorites  ', () => {
    const movies = [{title: 'Captian Marvel', id: 123}];
    const predicted = {
      type: 'FAVORITE_MOVIES',
      movies
    };
    const result = actions.addFavorites(movies);

    expect(result).toEqual(predicted);
  });
});