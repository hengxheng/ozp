process.env.NODE_ENV = 'test';

const product = require('../routes/fetchCategory.js');
const server = require('../server');

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Categories', () => {
    // beforeEach((done) => {

    // });

    describe('/GET category by id: 129505', () => {
        it('it should have category object', (done) => {
            chai.request(server) 
                .get('/api/category/129505')
                .end( (err, res ) => {
                    expect(res).have.status(200);
                    expect(res.body).be.a('object');
                    done();
                });
        });

        it('it should get category 129505', (done) => {
            chai.request(server)
                .get('/api/category/129505')
                .end( (err, res ) => {               
                    expect(res.body).have.property('name');
                    expect(res.body).have.property('id').eql(129505);
                    done();
                });
        });
    });

});