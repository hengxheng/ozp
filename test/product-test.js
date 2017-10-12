process.env.NODE_ENV = 'test';

const product = require('../routes/fetchProduct.js');
const server = require('../server');

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Products', () => {
    // beforeEach((done) => {

    // });

    describe('/GET product by id: PZELUV', () => {
       it('it should get product PZELUV', (done) => {
        chai.request(server)
            .get('/api/product/PZELUV')
            .end( (err, res ) => {
                expect(res).have.status(200);
                expect(res.body).be.a('object');
                // expect(res.body).length.be.eql(0);
                expect(res.body).have.property('productType');
                expect(res.body).have.property('productCode').eql('PZELUV');
            done();
            });
       });
    });

});