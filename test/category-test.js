process.env.NODE_ENV = 'test';

const category = require('../routes/category.js');
const server = require('../server');

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Categories', () => {
    // beforeEach((done) => {

    // });

    describe('/GET all categories', () => {
        it('it should get all categories', (done) => {
            chai.request(server).get('/api/category')
            .end( (err, res) => {
                if(err){
                    console.log("Err is:", err);
                }   
                expect(res).have.status(200);
                expect(res.body).be.a('array');
            });
        }); 
    });

    describe('/GET category by id: 29962', () => {
        it('it should have category object', (done) => {
            chai.request(server) 
                .get('/api/category/29962')
                .end( (err, res ) => {
                    expect(res).have.status(200);
                    expect(res.body).be.a('object');
                    done();
                });
        });

        it('it should get category 29962', (done) => {
            chai.request(server)
                .get('/api/category/29962')
                .end( (err, res ) => {               
                    expect(res.body).have.property('name');
                    expect(res.body).have.property('id').eql(29962);
                    done();
                });
        });
    });

});