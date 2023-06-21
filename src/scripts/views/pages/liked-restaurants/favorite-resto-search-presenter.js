/* eslint-disable no-unused-vars */
class FavoriteRestoSearchPresenter {
  constructor({ favoriteRestaurants }) {
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchRestaurants(event.target.value);
    });
  }

  //   async _searchRestaurants(latestQuery) {
  //     this._latestQuery = latestQuery;

  // eslint-disable-next-line max-len
  //     const foundRestaurants = await this._favoriteRestaurants.searchRestaurants(this.latestQuery);

  //     this._showFoundRestaurants(foundRestaurants);
  //   }

  _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery;
    this._favoriteRestaurants.searchRestaurants(this.latestQuery);
  }

  _showFoundRestaurants(restaurants) {
    const html = restaurants.reduce(
      (carry, resto) => carry.concat(`
      <li class="resto">
        <span class="resto__title">${resto.title || '-'}</span>
      </li>
      `),
      '',
    );

    document.querySelector('.restaurants').innerHTML = html;
    // document.getElementById('resto-search-container')
    //   .dispatchEvent(new Event('restaurants:searched:updated'));
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
