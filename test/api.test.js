process.env.NODE_ENV = 'test';

const server = require('../server');
const chai = require('chai');
const request = require('supertest');
const expect = chai.expect;

describe('API test', function(){
    it('should show API works', function(done){
        request(server).get('/api/')
        .end( function(err, res){
            expect(res.statusCode).to.equal(200);
            expect(res.text).to.equal("api works!");
            done();
        })
    });

    it('should get categories', function(done){
        request(server).get('/api/category')
        .end( function(err, res){
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('array');
            done();
        })
    });
});