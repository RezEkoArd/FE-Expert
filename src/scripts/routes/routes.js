import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Homepage from '../views/pages/homepage';

const routes = {
  '/': Homepage,
  '/homepage': Homepage,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
