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
      imageFile: 'Anaheim_Angels.jpg'
    },
    {
      name: 'Astros',
      category: 'Baseball',
      description: 'Houston Astros of Houston, Texas',
      imageFile: 'Houston_Astros.jpg'
    },
    {
      name: 'Athletics',
      category: 'Baseball',
      description: 'Oakland Athletics of Oakland, California',
      imageFile: 'Oakland_Athletics.jpg'
    },
    {
      name: 'Blue Jays',
      category: 'Baseball',
      description: 'Toronto Blue Jays of Toronto, Ontario',
      imageFile: 'Toronto_Blue_Jays.jpg'
    },
    {
      name: 'Braves',
      category: 'Baseball',
      description: 'Atlanta Braves of Atlanta, Georgia',
      imageFile: String
    },
    {
      name: 'Brewers',
      category: 'Baseball',
      description: 'Milwaukee Brewers of Milwaukee, Wisconsin',
      imageFile: 'Milwaukee_Brewers.jpg'
    },
    {
      name: 'Cubs',
      category: 'Baseball',
      description: 'Chicago Cubs of Chicago, Illinois',
      imageFile: 'Chicago_Cubs.jpg'
    },
    {
      name: 'Cardinals',
      category: 'Baseball',
      description: 'The Cardinals of St. Louis, Missouri',
      imageFile: 'St_Louis_Cardinals.jpg'
    },
    {
      name: 'Devil Rays',
      category: 'Baseball',
      description: 'Tampa Bay Rays of St. Petersburg, Florida',
      imageFile: 'Tampa_Bay_Devil_Rays.jpg'
    },
    {
     name: 'Diamondbacks',
      category: 'Baseball',
      description: 'Arizona Diamondbacks of Phoenix, Arizona',
      imageFile: 'Arizona_Diamondbacks.jpg'
    },
    {
     name: 'Dodgers',
      category: 'Baseball',
      description: 'Los Angeles Dodgers of Los Angeles, California',
      imageFile: 'Los_Angeles_Dodgers.jpg'
    },
    {
     name: 'Expos',
      category: 'Baseball',
      description: 'Montreal Expos of Montreal, Quebec',
      imageFile: 'Montreal_Expos.jpg'
    },
    {
     name: 'Giants',
      category: 'Baseball',
      description: 'San Francisco Giants of San Francisco, California',
      imageFile: 'San_Francisco_Giants.jpg'
    },
    {
     name: 'Indians',
      category: 'Baseball',
      description: 'Cleveland Indians of Cleveland, Ohio',
      imageFile: 'Cleveland_Indians.jpg'
    },
    {
     name: 'Mariners',
      category: 'Baseball',
      description: 'Seattle Mariners of Seattle, Washington',
      imageFile: 'Seattle-Mariners.jpg'
    },
    {
      name: 'Marlins',
      category: 'Baseball',
      description: 'Miami Marlins of Miami, Florida',
      imageFile: 'Miami_Marlins.jpg'
    },
    {
      name: 'Mets',
      category: 'Baseball',
      description: 'New York Mets of New York City borough of Queens',
      imageFile: 'New_York_Mets.jpg'
    },
    {
      name: 'Nationals',
      category: 'Baseball',
      description: 'Washington Nationals of Washington, D.C.',
      imageFile: 'Washington_Nationals.jpg'
    },
    {
      name: 'Orioles',
      category: 'Baseball',
      description: 'Baltimore Orioles of Baltimore, Maryland',
      imageFile: 'Baltimore_Orioles.jpg'
    },
    {
      name: 'Padres',
      category: 'Baseball',
      description: 'San Diego Padres of San Diego, California',
      imageFile: 'San_Diego_Padres.jpg'
    },
    {
      name: 'Phillies',
      category: 'Baseball',
      description: 'Phillies of Philadelphia, Pennsylvania',
      imageFile: 'Philadelphia_Phillies.jpg'
    },
    {
      name: 'Pirates',
      category: 'Baseball',
      description: 'Pittsburgh Pirates of Pittsburgh, Pennsylvania',
      imageFile: 'Pittsburgh_Pirates.jpg'
    },
    {
      name: 'Rangers',
      category: 'Baseball',
      description: 'Texas Rangers of Dallas-Fort Worth, based in Arlington, Texas',
      imageFile: 'Texas_Rangers.jpg'
    },
    {
      name: 'Reds',
      category: 'Baseball',
      description: 'Cincinnati Reds of Cincinnati, Ohio',
      imageFile: 'Cincinnati_Reds.jpg'
    },
    {
      name: 'Redsox',
      category: 'Baseball',
      description: 'Boston Redsox of Boston, Massachusetts',
      imageFile: 'Boston_Red_Sox.jpg'
    },
    {
      name: 'Rockies',
      category: 'Baseball',
      description: 'Colorado Rockies of Denver, Colorado',
      imageFile: 'Colorado_Rockies.jpg'
    },
    {
      name: 'Royals',
      category: 'Baseball',
      description: 'Kansas City Royals of Kansas City, Missouri',
      imageFile: 'Kansas_City_Royals.jpg'
    },
    {
      name: 'Tigers',
      category: 'Baseball',
      description: 'Detroit Tigers of Detroit, Michigan',
      imageFile: 'Detroit_Tigers.jpg'
    },
    {
      name: 'Twins',
      category: 'Baseball',
      description: 'Minnesota Twins of Minneapolis, Minnesota',
      imageFile: 'Minnesota_Twins.jpg'
    },
    {
      name: 'White Sox',
      category: 'Baseball',
      description: 'Chicago White Sox of the South Side of Chicago, Illinois',
      imageFile: 'Chicago_White_Sox.jpg'
    },
    {
      name: 'Yankees',
      category: 'Baseball',
      description: 'New York Yankees of the Bronx borough of New York City',
      imageFile: 'New_York_Yankees.jpg'
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
