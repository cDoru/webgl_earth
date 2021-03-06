// Generated by CoffeeScript 1.7.1
(function() {
  var City, certain_city, citySchema, citylist, mongoose, random_city;

  mongoose = require('mongoose');

  citySchema = new mongoose.Schema({
    code: String,
    country_code: String,
    city_name: {
      en: String,
      ru: String
    },
    coordinates: [Number],
    place_id: String,
    flickr: mongoose.Schema.Types.Mixed,
    wikipedia_array: mongoose.Schema.Types.Mixed
  });

  City = mongoose.model('City', citySchema);

  mongoose.connect('mongodb://localhost/webgl_earth');

  exports.City = City;

  exports.random_city = random_city = function(callback) {
    return City.count({}, function(err, count) {
      var rand;
      if (err) {
        return callback(err);
      }
      rand = Math.floor(Math.random() * count);
      return City.findOne({}).skip(rand).exec(function(err, random) {
        return callback("", random);
      });
    });
  };

  exports.citylist = citylist = function(callback) {
    return City.find(function(err, cities) {
      if (err) {
        return console.log(err);
      } else {
        return callback("", cities);
      }
    });
  };

  exports.certain_city = certain_city = function(city_code, callback) {
    return City.find({
      code: city_code
    }, function(err, city) {
      if (err) {
        return console.log(err);
      } else {
        return callback("", city);
      }
    });
  };

}).call(this);
