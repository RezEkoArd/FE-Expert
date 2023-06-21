/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-resto-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-movie-idb';

describe('Searching restaurants', () => {
  let presenter;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = 'film a';
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    document.body.innerHTML = `
          <div id="resto-search-container">
            <input id="query" type="text">
            <div class="resto-result-container">
              <ul class="restaurants">
              </ul>
            </div>
          </div>
        `;
  };

  const constructPresenter = () => {
    spyOn(FavoriteRestaurantIdb, 'searchRestaurants');
    // eslint-disable-next-line no-unused-vars, max-len
    presenter = new FavoriteRestoSearchPresenter({ favoriteRestaurants: FavoriteRestaurantIdb });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  it('should be able to capture the query typed by the user', () => {
    searchRestaurants('film a');

    expect(presenter.latestQuery)
      .toEqual('film a');
  });

  it('should ask the model to search for liked restaurants', () => {
    searchRestaurants('film a');

    expect(FavoriteRestaurantIdb.searchRestaurants)
      .toHaveBeenCalledWith('film a');
  });

  it('should show the found restaurants', () => {
    presenter._showFoundRestaurants([{ id: 1 }]);
    expect(document.querySelectorAll('.resto').length).toEqual(1);

    presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }]);
    expect(document.querySelectorAll('.resto').length).toEqual(2);
  });

  it('should show the title of the found restaurants', () => {
    presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }]);
    expect(document.querySelectorAll('.resto__title').item(0).textContent)
      .toEqual('Satu');
    presenter._showFoundRestaurants(
      [{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }],
    );
    const restoTitles = document.querySelectorAll('.resto__title');
    expect(restoTitles.item(0).textContent).toEqual('Satu');
    expect(restoTitles.item(1).textContent).toEqual('Dua');
  });

  it('should show - for found resto without title', () => {
    presenter._showFoundRestaurants([{ id: 1 }]);
    expect(document.querySelectorAll('.resto__title').item(0).textContent)
      .toEqual('-');
  });

  //   fit('should show the restaurants found by Favorite Restaurants', (done) => {
  //     document.getElementById('resto-search-container')
  //       .addEventListener('restaurants:searched:updated', () => {
  //         expect(document.querySelectorAll('.resto').length).toEqual(3);
  //         done();
  //       });

  //     FavoriteRestaurantIdb.searchRestaurants.withArgs('film a').and.returnValues([
  //       { id: 111, title: 'film abc' },
  //       { id: 222, title: 'ada juga film abcde' },
  //       { id: 333, title: 'ini juga boleh film a' },
  //     ]);

  //     searchRestaurants('film a');
  //   });

  //   it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
  //     document.getElementById('resto-search-container').addEventListener('restaurants:searched:updated', () => {
  //       const restoTitles = document.querySelectorAll('.resto__title');
  //       expect(restoTitles.item(0).textContent).toEqual('film abc');
  //       expect(restoTitles.item(1).textContent).toEqual('ada juga film abcde');
  //       expect(restoTitles.item(2).textContent).toEqual('ini juga boleh film a');

  //       done();
  //     });

  //     FavoriteRestaurantIdb.searchRestaurants.withArgs('film a').and.returnValues([
  //       { id: 111, title: 'film abc' },
  //       { id: 222, title: 'ada juga film abcde' },
  //       { id: 333, title: 'ini juga boleh film a' },
  //     ]);

//     searchRestaurants('film a');
//   });
});
