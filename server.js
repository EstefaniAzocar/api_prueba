const jsonServer = require('json-server');
const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(router);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`JSON Server en funcionamiento en el puerto ${port}`);
})