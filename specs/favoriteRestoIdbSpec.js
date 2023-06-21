/* eslint-disable no-const-assign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-movie-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (resto) => {
      await FavoriteRestaurantIdb.deleteRestaurant(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});
