var chai = require('chai')
var expect = chai.expect;

var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('User', function () {
    it('POST /users/register should create an object', function (done) {
        chai.request('http://localhost:3000')
            .post('/users/register')
            .send({ name: 'wahyu', email: 'wahyu@mail.com', password: '123456' })
            .end(function (err, res) {
                console.log(res.body);
                expect(err).to.be.null
                expect(res).to.have.status(201)
                expect(res).to.be.a('object')
                done()
            })
    });

    it('POST /users/login should return an object', function(done) {
        chai.request('http://localhost:3000')
            .post('/users/login')
            .send({ email: 'wisnu@mail.com', password: '123456' })
            .end(function (err, res) {
                console.log(res.body);
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res).to.be.a('object')
                done()
            })
    })

    it('POST /users/login should return an error password wrong', function(done) {
        chai.request('http://localhost:3000')
            .post('/users/login')
            .send({ email: 'andre@mail.com', password: '123' })
            .end(function (err, res) {
                console.log(res.body);
                expect(res).to.have.status(400)
                expect(res).to.be.a('object')
                done()
            })
    })

    it('POST /users/login should return an error email wrong', function(done) {
        chai.request('http://localhost:3000')
            .post('/users/login')
            .send({ email: 'and@mail.com', password: '123456' })
            .end(function (err, res) {
                console.log(res.body);
                expect(res).to.have.status(400)
                expect(res).to.be.a('object')
                done()
            })
    })
});

describe('Article', function() {
    it('POST /articles should create an object', function (done) {
        chai.request('http://localhost:3000')
            .post('/articles')
            .send({ title: 'boker tour', description: 'spultura come to indonesia in 1 january 2019' })
            .end(function (err, res) {
                console.log(res.body);
                expect(err).to.be.null
                expect(res).to.have.status(201)
                expect(res).to.be.a('object')
                done()
            })
    });

    it('GET /articles should return an object', function (done) {
        chai.request('http://localhost:3000')
            .get('/articles')
            .end(function (err, res) {
                // console.log(res.body);
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res).to.be.a('object')
                done()
            })
    });

    it('DELETE /articles should delete an article with id in req params', function (done) {
        chai.request('http://localhost:3000')
            .delete(`/articles/5b7bc623ea9f72f8feeb2497`)
            .end(function (err, res) {
                // console.log(res.body);
                expect(err).to.be.null
                expect(res).to.have.status(201)
                expect(res).to.be.a('object')
                done()
            })
    });

    it('PUT /articles should return an object with new data', function (done) {
        chai.request('http://localhost:3000')
            .put(`/articles/5b7bc623ea9f72f8feeb2497`)
            .send({
                title: 'sepultura gak jadi tour',
                description: 'sepulutura gak jadi dateng ke indonesia'
            })
            .end(function (err, res) {
                // console.log(res.body);
                expect(err).to.be.null
                expect(res).to.have.status(201)
                expect(res).to.be.a('object')
                done()
            })
    });
})




