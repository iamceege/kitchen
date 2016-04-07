module.exports = function(router, models) {
  router.get('/', function(req, res) {
    var example = new models.Example({
      name: 'Chuck Norris',
      message: 'Bake a cake, save a life.'
    });

    example.sayHi();

    res.render('pages/index', example);
  });
};
