var expect = require('chai').expect;
var model = require('../model/model.js');

function mock(name, stock, price, rating) {
  var product = {};
  product['genre'] = 'All';
  product['name'] = name;
  product['stock'] = stock;
  product['price'] = price;
  product['rating'] = rating;
  return product;
}

describe('app', function() {
  describe('model', function() {
    it('should return only available products when '
    + '(avail=true)', function(done) {
      model.filter([
        mock('prod1', 1, 0, 0),
        mock('prod2', 0, 0, 0),
      ],
      true, false, false, false, false, false, false, 'All')
          .then(function(filter) {
            expect(filter).to.deep.equal([
              mock('prod1', 1, 0, 0),
            ]);
            done();
          });
    });
    it('should return only unavailable products when ' +
      '(unavail=true)', function(done) {
      model.filter([
        mock('prod1', 1, 0, 0),
        mock('prod2', 0, 0, 0),
      ],
      false, true, false, false, false, false, false, 'All')
          .then(function(filter) {
            expect(filter).to.deep.equal([
              mock('prod2', 0, 0, 0),
            ]);
            done();
          });
    });
    it('should return only price $0-$25=true products when ' +
      '(price25=true)', function(done) {
      model.filter([
        mock('prod1', 0, 0, 0),
        mock('prod2', 0, 15, 0),
        mock('prod3', 0, 25, 0),
        mock('prod4', 0, 50, 0),
      ],
      false, false, true, false, false, false, false, 'All')
          .then(function(filter) {
            expect(filter).to.deep.equal([
              mock('prod1', 0, 0, 0),
              mock('prod2', 0, 15, 0),
              mock('prod3', 0, 25, 0),
            ]);
            done();
          });
    });
    it('should return only price $25-$50 products when ' +
    '(price50=true)', function(done) {
      model.filter([
        mock('prod1', 0, 25, 0),
        mock('prod2', 0, 35, 0),
        mock('prod3', 0, 50, 0),
        mock('prod4', 0, 100, 0),
      ],
      false, false, false, true, false, false, false, 'All')
          .then(function(filter) {
            expect(filter).to.deep.equal([
              mock('prod1', 0, 25, 0),
              mock('prod2', 0, 35, 0),
              mock('prod3', 0, 50, 0),
            ]);
            done();
          });
    });
    it('should return only price $50-$100 products when ' +
    '(price100=true)', function(done) {
      model.filter([
        mock('prod1', 0, 50, 0),
        mock('prod2', 0, 75, 0),
        mock('prod3', 0, 100, 0),
        mock('prod4', 0, 25, 0),
      ],
      false, false, false, false, true, false, false, 'All')
          .then(function(filter) {
            expect(filter).to.deep.equal([
              mock('prod1', 0, 50, 0),
              mock('prod2', 0, 75, 0),
              mock('prod3', 0, 100, 0),
            ]);
            done();
          });
    });
    it('should return only rating +1 products when ' +
    '(thumb1=true)', function(done) {
      model.filter([
        mock('prod1', 0, 0, 0),
        mock('prod2', 0, 0, 1),
        mock('prod3', 0, 0, 2),
      ],
      false, false, false, false, false, true, false, 'All')
          .then(function(filter) {
            expect(filter).to.deep.equal([
              mock('prod2', 0, 0, 1),
            ]);
            done();
          });
    });
    it('should return only rating +2 products when ' +
    '(thumb2=true)', function(done) {
      model.filter([
        mock('prod1', 0, 0, 0),
        mock('prod2', 0, 0, 1),
        mock('prod3', 0, 0, 2),
      ],
      false, false, false, false, false, false, true, 'All')
          .then(function(filter) {
            expect(filter).to.deep.equal([
              mock('prod3', 0, 0, 2),
            ]);
            done();
          });
    });
    it('should return only rating +1 and rating +2 products when '+
        '(thumb1=true && thumb2=true)',
    function(done) {
      model.filter([
        mock('prod1', 0, 0, 0),
        mock('prod2', 0, 0, 1),
        mock('prod3', 0, 0, 2),
      ],
      false, false, false, false, false, true, true, 'All')
          .then(function(filter) {
            expect(filter).to.deep.equal([
              mock('prod2', 0, 0, 1),
              mock('prod3', 0, 0, 2),
            ]);
            done();
          });
    });
    // TODO
    it('should return available or unavailable products when ' +
        '(avail = true && unavail=true || avail=false && unavail=false)',
    function(done) {
      done(new Error('TODO'));
    });
    // TODO
    it('should return products $0-$50 when ' +
        '(price25=true && price50=true)',
    function(done) {
      done(new Error('TODO'));
    });
    it('should return products $0-$100 when ' +
        '(price25=true && price50=true && price100=true) or ' +
        '(price25=false && price50=false && price100=false)',
    function(done) {
      done(new Error('TODO'));
    });
    it('should return products $0-$25 and products $50-100 ' +
        '(price25=true && price100=true)',
    function(done) {
      done(new Error('TODO'));
    });
    it('should return products $50-$100 when ' +
        '(price50=true && price100=true)',
    function(done) {
      done(new Error('TODO'));
    });
    it('should return all products when ' +
        '(thumb1=false && thumb2=false)',
    function(done) {
      done(new Error('TODO'));
    });
    it('should return correct products when ' +
        '(avail=true && price25=true && thumb1=true)',
    function(done) {
      done(new Error('TODO'));
    });
  });
});
