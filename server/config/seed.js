/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Team = require('../api/team/team.model');
var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Team.find({}).remove(function() {
  Team.create(
    {
      name: 'Angels',
      category: 'Baseball',
      description: 'Los Angeles Angels of Anaheim, California',
      imageFile: 'Anaheim_Angels.jpg',
      twitter: 'https://twitter.com/search?q=baseball%20%23Angels'
    },
    {
      name: 'Astros',
      category: 'Baseball',
      description: 'Houston Astros of Houston, Texas',
      imageFile: 'Houston_Astros.jpg',
      twitter: 'https://twitter.com/hashtag/astros'
    },
    {
      name: 'Athletics',
      category: 'Baseball',
      description: 'Oakland Athletics of Oakland, California',
      imageFile: 'Oakland_Athletics.jpg',
      twitter: 'https://twitter.com/hashtag/greencollar'
    },
    {
      name: 'Blue Jays',
      category: 'Baseball',
      description: 'Toronto Blue Jays of Toronto, Ontario',
      imageFile: 'Toronto_Blue_Jays.jpg',
      twitter: 'https://twitter.com/search?q=Blue%20Jays'
    },
    {
      name: 'Braves',
      category: 'Baseball',
      description: 'Atlanta Braves of Atlanta, Georgia',
      imageFile: String,
      twitter: 'https://twitter.com/search?q=Braves'
    },
    {
      name: 'Brewers',
      category: 'Baseball',
      description: 'Milwaukee Brewers of Milwaukee, Wisconsin',
      imageFile: 'Milwaukee_Brewers.jpg',
      twitter: 'https://twitter.com/search?q=Brewers'
    },
    {
      name: 'Cubs',
      category: 'Baseball',
      description: 'Chicago Cubs of Chicago, Illinois',
      imageFile: 'Chicago_Cubs.jpg',
      twitter: 'https://twitter.com/hashtag/Cubs'
    },
    {
      name: 'Cardinals',
      category: 'Baseball',
      description: 'The Cardinals of St. Louis, Missouri',
      imageFile: 'St_Louis_Cardinals.jpg',
      twitter: 'https://twitter.com/search?q=Cardinals'
    },
    {
      name: 'Devil Rays',
      category: 'Baseball',
      description: 'Tampa Bay Rays of St. Petersburg, Florida',
      imageFile: 'Tampa_Bay_Devil_Rays.jpg',
      twitter: 'https://twitter.com/hashtag/devilrays'
    },
    {
     name: 'Diamondbacks',
      category: 'Baseball',
      description: 'Arizona Diamondbacks of Phoenix, Arizona',
      imageFile: 'Arizona_Diamondbacks.jpg',
      twitter: 'https://twitter.com/search?q=Diamondbacks'
    },
    {
     name: 'Dodgers',
      category: 'Baseball',
      description: 'Los Angeles Dodgers of Los Angeles, California',
      imageFile: 'Los_Angeles_Dodgers.jpg',
      twitter: 'https://twitter.com/hashtag/Dodgers'
    },
    {
     name: 'Expos',
      category: 'Baseball',
      description: 'Montreal Expos of Montreal, Quebec',
      imageFile: 'Montreal_Expos.jpg',
      twitter: 'https://twitter.com/search?q=Expos'
    },
    {
     name: 'Giants',
      category: 'Baseball',
      description: 'San Francisco Giants of San Francisco, California',
      imageFile: 'San_Francisco_Giants.jpg',
      twitter: 'https://twitter.com/hashtag/sfgiants'
    },
    {
     name: 'Indians',
      category: 'Baseball',
      description: 'Cleveland Indians of Cleveland, Ohio',
      imageFile: 'Cleveland_Indians.jpg',
      twitter: 'https://twitter.com/search?q=Cleveland%20Indians'
    },
    {
     name: 'Mariners',
      category: 'Baseball',
      description: 'Seattle Mariners of Seattle, Washington',
      imageFile: 'Seattle-Mariners.jpg',
      twitter: 'https://twitter.com/hashtag/mariners'
    },
    {
      name: 'Marlins',
      category: 'Baseball',
      description: 'Miami Marlins of Miami, Florida',
      imageFile: 'Miami_Marlins.jpg',
      twitter: 'https://twitter.com/hashtag/marlins'
    },
    {
      name: 'Mets',
      category: 'Baseball',
      description: 'New York Mets of New York City borough of Queens',
      imageFile: 'New_York_Mets.jpg',
      twitter: 'https://twitter.com/search?q=Mets'
    },
    {
      name: 'Nationals',
      category: 'Baseball',
      description: 'Washington Nationals of Washington, D.C.',
      imageFile: 'Washington_Nationals.jpg'
      twitter:'https://twitter.com/hashtag/Nats'
    },
    {
      name: 'Orioles',
      category: 'Baseball',
      description: 'Baltimore Orioles of Baltimore, Maryland',
      imageFile: 'Baltimore_Orioles.jpg',
      twitter: 'https://twitter.com/search?q=Orioles'
    },
    {
      name: 'Padres',
      category: 'Baseball',
      description: 'San Diego Padres of San Diego, California',
      imageFile: 'San_Diego_Padres.jpg',
      twitter: 'https://twitter.com/search?q=%23Padres%20baseball'
    },
    {
      name: 'Phillies',
      category: 'Baseball',
      description: 'Phillies of Philadelphia, Pennsylvania',
      imageFile: 'Philadelphia_Phillies.jpg',
      twitter: 'https://twitter.com/search?q=Phillies'
    },
    {
      name: 'Pirates',
      category: 'Baseball',
      description: 'Pittsburgh Pirates of Pittsburgh, Pennsylvania',
      imageFile: 'Pittsburgh_Pirates.jpg',
      twitter: 'https://twitter.com/search?q=Pirates%20baseball'
    },
    {
      name: 'Rangers',
      category: 'Baseball',
      description: 'Texas Rangers of Dallas-Fort Worth, based in Arlington, Texas',
      imageFile: 'Texas_Rangers.jpg',
      twitter: 'https://twitter.com/search?q=Texas%20Rangers%20Baseball'
    },
    {
      name: 'Reds',
      category: 'Baseball',
      description: 'Cincinnati Reds of Cincinnati, Ohio',
      imageFile: 'Cincinnati_Reds.jpg',
      twitter: 'https://twitter.com/hashtag/Reds'
    },
    {
      name: 'Redsox',
      category: 'Baseball',
      description: 'Boston Redsox of Boston, Massachusetts',
      imageFile: 'Boston_Red_Sox.jpg',
      twitter: 'https://twitter.com/hashtag/Reds'
    },
    {
      name: 'Rockies',
      category: 'Baseball',
      description: 'Colorado Rockies of Denver, Colorado',
      imageFile: 'Colorado_Rockies.jpg',
      twitter: 'https://twitter.com/search?q=Rockies%20baseball'
    },
    {
      name: 'Royals',
      category: 'Baseball',
      description: 'Kansas City Royals of Kansas City, Missouri',
      imageFile: 'Kansas_City_Royals.jpg',
      twitter: 'https://twitter.com/search?q=KC%20Royals'
    },
    {
      name: 'Tigers',
      category: 'Baseball',
      description: 'Detroit Tigers of Detroit, Michigan',
      imageFile: 'Detroit_Tigers.jpg'
      twitter: 'https://twitter.com/search?q=Detroit%20Tigers'
    },
    {
      name: 'Twins',
      category: 'Baseball',
      description: 'Minnesota Twins of Minneapolis, Minnesota',
      imageFile: 'Minnesota_Twins.jpg',
      twitter: 'https://twitter.com/search?q=Twins%20baseball'
    },
    {
      name: 'White Sox',
      category: 'Baseball',
      description: 'Chicago White Sox of the South Side of Chicago, Illinois',
      imageFile: 'Chicago_White_Sox.jpg',
      twitter: 'https://twitter.com/search?q=White%20Sox'
    },
    {
      name: 'Yankees',
      category: 'Baseball',
      description: 'New York Yankees of the Bronx borough of New York City',
      imageFile: 'New_York_Yankees.jpg',
      twitter: 'https://twitter.com/hashtag/yankees'
    },
    function() {
      Team.find(function (err, teams) {
        if (err) { console.log(err); }
        else {
          console.log('Finished populating ' + teams.length + ' teams.');
        }
      });
    }
  );
});
