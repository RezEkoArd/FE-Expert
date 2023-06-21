import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../../template/template-creator';

const Homepage = {
  async render() {
    return `
    <section class="jumbotron" id="jumbotron">  
        <img src="./images/heros/hero-image_1.jpg" alt="jumbotron-image">
        <div class="overlay"></div>
        <div class="content">
        <h1>Welcome to HungerApps</h1>
        <p>Find Excellent Restaurant We Recomended  </p>
        </div>
    </section>
   
    <section id="list-restaurant" class="list-restaurant">
      <h1>Explorer Restaurant</h1>
      <div class="wrapper" id="listRestaurant">
      </div>
    </section>
   `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getList();
    const restaurantContainer = document.querySelector('#listRestaurant');
    restaurantContainer.innerHTML = '';

    restaurants.forEach((data) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(data);
    });
  },
};

export default Homepage;
