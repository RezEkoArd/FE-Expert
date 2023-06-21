import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import {
  createRestaurantDetailTemplate,
  createRestaurantItemDrinkTemplate,
  createRestaurantItemFoodTemplate,
  createRestaurantReviewItemTemplate,
} from '../../template/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-movie-idb';

const Detail = {
  async render() {
    return `
      <section class="detail-page">
        <h1>Detail Page</h1>
        <div id="restaurants" class="detail-restaurant">
          
        </div>
      </section>
      <div id="likeButtonContainer"></div>

    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const foodMenus = restaurant.menus.foods;
    const drinksMenus = restaurant.menus.drinks;
    const reviewItems = restaurant.customerReviews;

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        address: restaurant.address,
        menuFoods: restaurant.menus.foods,
        menuDrinks: restaurant.menus.drinks,
        customerReviews: restaurant.customerReviews,
      },
    });

    const restaurantContainer = document.querySelector('#restaurants');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const foodList = document.querySelector('#foodList');
    foodList.innerHTML = '';

    const drinkList = document.querySelector('#drinkList');
    drinkList.innerHTML = '';

    const reviewContainer = document.querySelector('#reviewList');
    reviewContainer.innerHTML = '';

    foodMenus.forEach((data) => {
      foodList.innerHTML += createRestaurantItemFoodTemplate(data);
    });

    drinksMenus.forEach((data) => {
      drinkList.innerHTML += createRestaurantItemDrinkTemplate(data);
    });

    reviewItems.forEach((data) => {
      reviewContainer.innerHTML += createRestaurantReviewItemTemplate(data);
    });
  },
};

export default Detail;
