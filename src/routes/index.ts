const express = require('express');
const rootRoute = require('./root.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: rootRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export = router;
