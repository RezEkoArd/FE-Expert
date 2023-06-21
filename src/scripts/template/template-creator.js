import CONFIG from '../globals/config';

const createRestaurantDetailTemplate = (data) => `
  <div class="detail-desc">
      <div class="img-detail">
         <img src=${CONFIG.PIC_MD + data.pictureId} alt=${data.name}>
      </div>
       <div class="desc-section">
          <h1>${data.name}</h1>
          <p class="city">${data.city}</p>
          <p class="address">${data.address}</p>
          <p class="description">${data.description}</p>
        </div>
  </div>
  <div class="detail-menu">
    <h1>Menu Restaurant</h1>
    <div class="detail-menu-wrapper">
      <div class="menu-foods" >
        <h2>Makanan</h2>
        <ul id="foodList">
        </ul>
      </div>
      <div class="menu-drinks">
        <h2>Minuman</h2>
        <ul id="drinkList" class="drink-list">
        </ul>
      </div>
    </div>
  </div>
  <div class="detail-review">
    <h1>Review Restaurant</h1>
    <div id="reviewList" class="review-wrapper">
     
    </div>
  </div>
`;

const createRestaurantItemFoodTemplate = (food) => `
    <li>${food.name}</li>
`;

const createRestaurantItemDrinkTemplate = (drink) => `
    <li>${drink.name}</li>
`;

const createRestaurantReviewItemTemplate = (data) => `
    <div class="review-card">
      <h3>${data.name}</h3>
      <p class="review-date">${data.date}</p>
      <p>${data.review}</p>
    </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createRestaurantItemTemplate = (data) => `
    <div class="card">
        <div class="card-img">
            <img src=${CONFIG.PIC_SM + data.pictureId} alt=${data.name}>
        </div>
        <div class="card-desc">
            <h2>${data.name} </h2>
            <h3>Rating :${data.rating} </h3>
            <h3>Kota : ${data.city} </h3>
            <p class="description">${data.description} </p>
            <div data-id=${data.id} class="button_card">
             <a href="#/detail/${data.id}">Check Restaurant</a>
            </div>
        </div>
    </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantItemFoodTemplate,
  createRestaurantItemDrinkTemplate,
  createRestaurantReviewItemTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
