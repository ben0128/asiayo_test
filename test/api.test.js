// test/api.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');  // 請確保路徑指向您的app.js或相似的啟動檔案
const expect = chai.expect;

chai.use(chaiHttp);

describe('Currency Exchange API', function() {
  it('should return success message and amount when all parameters are valid', function(done) {
    chai.request(app)
      .get('/api?source=USD&target=JPY&amount=$1,525')  // 請確保是正確的API路徑
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('msg').equal('success');
        expect(res.body).to.have.property('amount');
        done();
      });
  });

  it('should return error message when missing parameters', function(done) {
    chai.request(app)
      .get('/api?source=USD&amount=$1,525')  // 缺少target參數
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('msg').equal('fail');
        expect(res.body).to.have.property('err').equal('missing query string');
        done();
      });
  });
});
