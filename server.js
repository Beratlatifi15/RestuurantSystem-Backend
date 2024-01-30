const jsonServer = require("json-server");
const jsonServerPort = 8095;
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Add the bodyParser middleware for JSON parsing
server.use(jsonServer.bodyParser);
server.use(middlewares);

const restaurantRoutes = require("./routes/restaurants");
const menuRoutes = require("./routes/menus");
const menuItemRoutes = require("./routes/menuItems");

restaurantRoutes(server);
menuRoutes(server);
menuItemRoutes(server);

server.listen(jsonServerPort, () => {
  console.log(`JSON server is running on port ${jsonServerPort}`);
});