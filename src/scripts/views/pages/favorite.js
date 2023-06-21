import FavoriteRestaurantIdb from '../../data/favorite-movie-idb';
import { createRestaurantItemTemplate } from '../../template/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="list-restaurant">
      <h1>Favorite Restaurant</h1>
      <div class="wrapper" id="listFavoriteRestaurant">
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#listFavoriteRestaurant');

    restaurants.forEach((data) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(data);
    });
  },
};

export default Favorite;
