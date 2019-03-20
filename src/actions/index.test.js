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

});