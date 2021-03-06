var req;
var res;
var next = sinon.spy(function next() {});
var example = require(`${appRoot}/routes/middleware/example.js`);



describe('middleware - example()', function() {
  beforeEach(function() {
    next.reset();

    req = nodeMocksHttp.createRequest();
    res = nodeMocksHttp.createResponse();

    example(req, res, next);
  });

  it('sets foobar to a string', function() {
    expect(req.foobar).to.equal('This is an example');
  });

  it('calls next', function() {
    sinon.assert.called(next);
  });
});
