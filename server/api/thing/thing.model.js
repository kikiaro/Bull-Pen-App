'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);

var atlantaBraves = {
  "statuses":  [
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Tue Jun 30 00:33:22 +0000 2015",
      "id": 615679484449169400,
      "id_str": "615679484449169408",
      "text": "RT @SOITSJACOB_AC: Oh hi Instagram! #realteamJacob #modelstatus #acBLOWboys #acTrophyboy #atlantabraves #Noh8… https://t.co/mqNWuVVXFE",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3157351811,
        "id_str": "3157351811",
        "name": "Jason",
        "screen_name": "belamifan4life",
        "location": "USA",
        "description": "18+ONLY! I'm a 26 y.o. gay boy. I'm a true fan of @belamionline ! @SOITSJACOB_AC my fave AC Trophy Boy !",
        "url": null,
        "entities":  {
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 111,
        "friends_count": 22,
        "listed_count": 2,
        "created_at": "Sat Apr 11 17:56:36 +0000 2015",
        "favourites_count": 1057,
        "utc_offset": -14400,
        "time_zone": "Eastern Time (US & Canada)",
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 160,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0099B9",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme4/bg.gif",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme4/bg.gif",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/586954109741309952/V2PRAf83_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/586954109741309952/V2PRAf83_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3157351811/1431158270",
        "profile_link_color": "0099B9",
        "profile_sidebar_border_color": "5ED4DC",
        "profile_sidebar_fill_color": "95E8EC",
        "profile_text_color": "3C3940",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "retweeted_status":  {
        "metadata":  {
          "iso_language_code": "en",
          "result_type": "recent"
        },
        "created_at": "Mon Jun 29 22:03:30 +0000 2015",
        "id": 615641770769182700,
        "id_str": "615641770769182720",
        "text": "Oh hi Instagram! #realteamJacob #modelstatus #acBLOWboys #acTrophyboy #atlantabraves #Noh8… https://t.co/mqNWuVVXFE",
        "truncated": false,
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user":  {
          "id": 2888040451,
          "id_str": "2888040451",
          "name": "Jacob Ford",
          "screen_name": "SOITSJACOB_AC",
          "location": "Los Angeles/Missouri",
          "description": "Model/Party Host/Activist The Official Twitter for AC Model Jacob Ford! http://t.co/9YwdZZtMR2\n insta: SOITSJACOB",
          "url": "http://t.co/RpNen5WISF",
          "entities":  {
            "url":  {
              "urls":  [
                 {
                  "url": "http://t.co/RpNen5WISF",
                  "expanded_url": "http://www.andrewchristian.com",
                  "display_url": "andrewchristian.com",
                  "indices":  [
                    0,
                    22
                  ]
                }
              ]
            },
            "description":  {
              "urls":  [
                 {
                  "url": "http://t.co/9YwdZZtMR2",
                  "expanded_url": "http://www.amazon.com/registry/wishlist/6TW3ZJAFX41L",
                  "display_url": "amazon.com/registry/wishl…",
                  "indices":  [
                    73,
                    95
                  ]
                }
              ]
            }
          },
          "protected": false,
          "followers_count": 24773,
          "friends_count": 561,
          "listed_count": 23,
          "created_at": "Mon Nov 03 02:26:12 +0000 2014",
          "favourites_count": 4758,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": true,
          "verified": false,
          "statuses_count": 3105,
          "lang": "en",
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_background_tile": false,
          "profile_image_url": "http://pbs.twimg.com/profile_images/614553485644705792/rlztGzOy_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/614553485644705792/rlztGzOy_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/2888040451/1433983890",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": true,
          "default_profile_image": false,
          "following": false,
          "follow_request_sent": false,
          "notifications": false
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 1,
        "favorite_count": 4,
        "entities":  {
          "hashtags":  [
             {
              "text": "realteamJacob",
              "indices":  [
                17,
                31
              ]
            },
             {
              "text": "modelstatus",
              "indices":  [
                32,
                44
              ]
            },
             {
              "text": "acBLOWboys",
              "indices":  [
                45,
                56
              ]
            },
             {
              "text": "acTrophyboy",
              "indices":  [
                57,
                69
              ]
            },
             {
              "text": "atlantabraves",
              "indices":  [
                70,
                84
              ]
            },
             {
              "text": "Noh8",
              "indices":  [
                85,
                90
              ]
            }
          ],
          "symbols":  [],
          "user_mentions":  [],
          "urls":  [
             {
              "url": "https://t.co/mqNWuVVXFE",
              "expanded_url": "https://instagram.com/p/4h3UyYpZ_p/",
              "display_url": "instagram.com/p/4h3UyYpZ_p/",
              "indices":  [
                92,
                115
              ]
            }
          ]
        },
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      "is_quote_status": false,
      "retweet_count": 1,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "realteamJacob",
            "indices":  [
              36,
              50
            ]
          },
           {
            "text": "modelstatus",
            "indices":  [
              51,
              63
            ]
          },
           {
            "text": "acBLOWboys",
            "indices":  [
              64,
              75
            ]
          },
           {
            "text": "acTrophyboy",
            "indices":  [
              76,
              88
            ]
          },
           {
            "text": "atlantabraves",
            "indices":  [
              89,
              103
            ]
          },
           {
            "text": "Noh8",
            "indices":  [
              104,
              109
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [
           {
            "screen_name": "SOITSJACOB_AC",
            "name": "Jacob Ford",
            "id": 2888040451,
            "id_str": "2888040451",
            "indices":  [
              3,
              17
            ]
          }
        ],
        "urls":  [
           {
            "url": "https://t.co/mqNWuVVXFE",
            "expanded_url": "https://instagram.com/p/4h3UyYpZ_p/",
            "display_url": "instagram.com/p/4h3UyYpZ_p/",
            "indices":  [
              111,
              134
            ]
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": true,
      "lang": "en"
    },
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Tue Jun 30 00:32:01 +0000 2015",
      "id": 615679146602156000,
      "id_str": "615679146602156032",
      "text": "#bravescountry #atlantabraves #braves AJC's Mark Bradley Analyzes Atlanta Braves' Upcoming Season http://t.co/xcqUaaJ8Q3",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3070506062,
        "id_str": "3070506062",
        "name": "Atlanta Braves Fans",
        "screen_name": "BravesViews",
        "location": "",
        "description": "A Page for Atlanta Braves Fans. News Links, Updates & Pics. #bravescountry #atlantabraves #braves #atlanta #BravesFam #mlb",
        "url": null,
        "entities":  {
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 551,
        "friends_count": 1232,
        "listed_count": 12,
        "created_at": "Tue Mar 10 01:55:19 +0000 2015",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3430,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0F437C",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3070506062/1427255457",
        "profile_link_color": "CD1141",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "bravescountry",
            "indices":  [
              0,
              14
            ]
          },
           {
            "text": "atlantabraves",
            "indices":  [
              15,
              29
            ]
          },
           {
            "text": "braves",
            "indices":  [
              30,
              37
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  [
           {
            "url": "http://t.co/xcqUaaJ8Q3",
            "expanded_url": "http://dld.bz/dA6sY",
            "display_url": "dld.bz/dA6sY",
            "indices":  [
              98,
              120
            ]
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Tue Jun 30 00:27:01 +0000 2015",
      "id": 615677887019110400,
      "id_str": "615677887019110401",
      "text": "#bravescountry #atlantabraves #braves Atlanta Braves Trade Pitcher Craig Kimbrel http://t.co/cb9xBfE28x",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3070506062,
        "id_str": "3070506062",
        "name": "Atlanta Braves Fans",
        "screen_name": "BravesViews",
        "location": "",
        "description": "A Page for Atlanta Braves Fans. News Links, Updates & Pics. #bravescountry #atlantabraves #braves #atlanta #BravesFam #mlb",
        "url": null,
        "entities":  {
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 551,
        "friends_count": 1232,
        "listed_count": 12,
        "created_at": "Tue Mar 10 01:55:19 +0000 2015",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3430,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0F437C",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3070506062/1427255457",
        "profile_link_color": "CD1141",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "bravescountry",
            "indices":  [
              0,
              14
            ]
          },
           {
            "text": "atlantabraves",
            "indices":  [
              15,
              29
            ]
          },
           {
            "text": "braves",
            "indices":  [
              30,
              37
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  [
           {
            "url": "http://t.co/cb9xBfE28x",
            "expanded_url": "http://dld.bz/dAh28",
            "display_url": "dld.bz/dAh28",
            "indices":  [
              81,
              103
            ]
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Tue Jun 30 00:22:00 +0000 2015",
      "id": 615676625632538600,
      "id_str": "615676625632538624",
      "text": "#bravescountry #atlantabraves #braves Comcast, Braves Announce Partnership For SunTrust Park http://t.co/ao4XIlpnNl",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3070506062,
        "id_str": "3070506062",
        "name": "Atlanta Braves Fans",
        "screen_name": "BravesViews",
        "location": "",
        "description": "A Page for Atlanta Braves Fans. News Links, Updates & Pics. #bravescountry #atlantabraves #braves #atlanta #BravesFam #mlb",
        "url": null,
        "entities":  {
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 551,
        "friends_count": 1232,
        "listed_count": 12,
        "created_at": "Tue Mar 10 01:55:19 +0000 2015",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3430,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0F437C",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3070506062/1427255457",
        "profile_link_color": "CD1141",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "bravescountry",
            "indices":  [
              0,
              14
            ]
          },
           {
            "text": "atlantabraves",
            "indices":  [
              15,
              29
            ]
          },
           {
            "text": "braves",
            "indices":  [
              30,
              37
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  [
           {
            "url": "http://t.co/ao4XIlpnNl",
            "expanded_url": "http://dld.bz/d9ubm",
            "display_url": "dld.bz/d9ubm",
            "indices":  [
              93,
              115
            ]
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Tue Jun 30 00:17:02 +0000 2015",
      "id": 615675373167190000,
      "id_str": "615675373167190016",
      "text": "#bravescountry #atlantabraves #braves Firm Hired To Design Bridge Near New Braves Stadium http://t.co/qzLdkAxU9o",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3070506062,
        "id_str": "3070506062",
        "name": "Atlanta Braves Fans",
        "screen_name": "BravesViews",
        "location": "",
        "description": "A Page for Atlanta Braves Fans. News Links, Updates & Pics. #bravescountry #atlantabraves #braves #atlanta #BravesFam #mlb",
        "url": null,
        "entities":  {
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 551,
        "friends_count": 1232,
        "listed_count": 12,
        "created_at": "Tue Mar 10 01:55:19 +0000 2015",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3430,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0F437C",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3070506062/1427255457",
        "profile_link_color": "CD1141",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "bravescountry",
            "indices":  [
              0,
              14
            ]
          },
           {
            "text": "atlantabraves",
            "indices":  [
              15,
              29
            ]
          },
           {
            "text": "braves",
            "indices":  [
              30,
              37
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  [
           {
            "url": "http://t.co/qzLdkAxU9o",
            "expanded_url": "http://dld.bz/d9txr",
            "display_url": "dld.bz/d9txr",
            "indices":  [
              90,
              112
            ]
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Tue Jun 30 00:12:04 +0000 2015",
      "id": 615674124103471100,
      "id_str": "615674124103471106",
      "text": "#bravescountry #atlantabraves #braves Braves Concert Series Features Charli XCX, Boyz II Men http://t.co/Xre7HO0S2O",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3070506062,
        "id_str": "3070506062",
        "name": "Atlanta Braves Fans",
        "screen_name": "BravesViews",
        "location": "",
        "description": "A Page for Atlanta Braves Fans. News Links, Updates & Pics. #bravescountry #atlantabraves #braves #atlanta #BravesFam #mlb",
        "url": null,
        "entities":  {
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 551,
        "friends_count": 1232,
        "listed_count": 12,
        "created_at": "Tue Mar 10 01:55:19 +0000 2015",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3430,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0F437C",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3070506062/1427255457",
        "profile_link_color": "CD1141",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "bravescountry",
            "indices":  [
              0,
              14
            ]
          },
           {
            "text": "atlantabraves",
            "indices":  [
              15,
              29
            ]
          },
           {
            "text": "braves",
            "indices":  [
              30,
              37
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  [
           {
            "url": "http://t.co/Xre7HO0S2O",
            "expanded_url": "http://dld.bz/d9tx7",
            "display_url": "dld.bz/d9tx7",
            "indices":  [
              93,
              115
            ]
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Tue Jun 30 00:07:04 +0000 2015",
      "id": 615672863698350100,
      "id_str": "615672863698350080",
      "text": "#bravescountry #atlantabraves #braves Fred McGriff Returns To The Atlanta Braves http://t.co/9Q1CZXdl0m",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3070506062,
        "id_str": "3070506062",
        "name": "Atlanta Braves Fans",
        "screen_name": "BravesViews",
        "location": "",
        "description": "A Page for Atlanta Braves Fans. News Links, Updates & Pics. #bravescountry #atlantabraves #braves #atlanta #BravesFam #mlb",
        "url": null,
        "entities":  {
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 551,
        "friends_count": 1232,
        "listed_count": 12,
        "created_at": "Tue Mar 10 01:55:19 +0000 2015",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3430,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0F437C",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3070506062/1427255457",
        "profile_link_color": "CD1141",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "bravescountry",
            "indices":  [
              0,
              14
            ]
          },
           {
            "text": "atlantabraves",
            "indices":  [
              15,
              29
            ]
          },
           {
            "text": "braves",
            "indices":  [
              30,
              37
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  [
           {
            "url": "http://t.co/9Q1CZXdl0m",
            "expanded_url": "http://dld.bz/d9txN",
            "display_url": "dld.bz/d9txN",
            "indices":  [
              81,
              103
            ]
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Tue Jun 30 00:04:58 +0000 2015",
      "id": 615672336734273500,
      "id_str": "615672336734273536",
      "text": "Braves have one eye on present, two on future #AtlantaBraves #Braves http://t.co/25VVFCCmO6 http://t.co/PyCSEI5oXW",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3036136557,
        "id_str": "3036136557",
        "name": "Braves Report",
        "screen_name": "braves_fanly",
        "location": "Atlanta, GA",
        "description": "Download Fanly and see why it's the easiest way to keep up with the Braves. @FanlyApp",
        "url": "http://t.co/RfYK9aQiYb",
        "entities":  {
          "url":  {
            "urls":  [
               {
                "url": "http://t.co/RfYK9aQiYb",
                "expanded_url": "http://www.fanly.me/braves",
                "display_url": "fanly.me/braves",
                "indices":  [
                  0,
                  22
                ]
              }
            ]
          },
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 13,
        "friends_count": 0,
        "listed_count": 3,
        "created_at": "Sat Feb 14 07:27:17 +0000 2015",
        "favourites_count": 0,
        "utc_offset": -14400,
        "time_zone": "Eastern Time (US & Canada)",
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 2586,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "B62630",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/566499410645774337/15RhaVyy_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/566499410645774337/15RhaVyy_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3036136557/1423899097",
        "profile_link_color": "052A54",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "AtlantaBraves",
            "indices":  [
              46,
              60
            ]
          },
           {
            "text": "Braves",
            "indices":  [
              61,
              68
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  [
           {
            "url": "http://t.co/25VVFCCmO6",
            "expanded_url": "http://www.fandrop.us/p/uKakh2AJqx",
            "display_url": "fandrop.us/p/uKakh2AJqx",
            "indices":  [
              69,
              91
            ]
          }
        ],
        "media":  [
           {
            "id": 615672335526293500,
            "id_str": "615672335526293504",
            "indices":  [
              92,
              114
            ],
            "media_url": "http://pbs.twimg.com/media/CItOuikUcAATqtY.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CItOuikUcAATqtY.jpg",
            "url": "http://t.co/PyCSEI5oXW",
            "display_url": "pic.twitter.com/PyCSEI5oXW",
            "expanded_url": "http://twitter.com/braves_fanly/status/615672336734273536/photo/1",
            "type": "photo",
            "sizes":  {
              "small":  {
                "w": 340,
                "h": 191,
                "resize": "fit"
              },
              "thumb":  {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium":  {
                "w": 600,
                "h": 337,
                "resize": "fit"
              },
              "large":  {
                "w": 1024,
                "h": 576,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Tue Jun 30 00:02:00 +0000 2015",
      "id": 615671591775682600,
      "id_str": "615671591775682561",
      "text": "#bravescountry #atlantabraves #braves Court To Hear Challenge To Braves Stadium Financing http://t.co/e4t0NeaNsM",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3070506062,
        "id_str": "3070506062",
        "name": "Atlanta Braves Fans",
        "screen_name": "BravesViews",
        "location": "",
        "description": "A Page for Atlanta Braves Fans. News Links, Updates & Pics. #bravescountry #atlantabraves #braves #atlanta #BravesFam #mlb",
        "url": null,
        "entities":  {
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 551,
        "friends_count": 1232,
        "listed_count": 12,
        "created_at": "Tue Mar 10 01:55:19 +0000 2015",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3430,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0F437C",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3070506062/1427255457",
        "profile_link_color": "CD1141",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "bravescountry",
            "indices":  [
              0,
              14
            ]
          },
           {
            "text": "atlantabraves",
            "indices":  [
              15,
              29
            ]
          },
           {
            "text": "braves",
            "indices":  [
              30,
              37
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  [
           {
            "url": "http://t.co/e4t0NeaNsM",
            "expanded_url": "http://dld.bz/d9txW",
            "display_url": "dld.bz/d9txW",
            "indices":  [
              90,
              112
            ]
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Mon Jun 29 23:57:05 +0000 2015",
      "id": 615670352354652200,
      "id_str": "615670352354652160",
      "text": "#bravescountry #atlantabraves #braves Atlanta Braves Trade Evan Gattis to Houston Astros http://t.co/VxWgk6pGa6",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3070506062,
        "id_str": "3070506062",
        "name": "Atlanta Braves Fans",
        "screen_name": "BravesViews",
        "location": "",
        "description": "A Page for Atlanta Braves Fans. News Links, Updates & Pics. #bravescountry #atlantabraves #braves #atlanta #BravesFam #mlb",
        "url": null,
        "entities":  {
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 551,
        "friends_count": 1232,
        "listed_count": 12,
        "created_at": "Tue Mar 10 01:55:19 +0000 2015",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3430,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0F437C",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3070506062/1427255457",
        "profile_link_color": "CD1141",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "bravescountry",
            "indices":  [
              0,
              14
            ]
          },
           {
            "text": "atlantabraves",
            "indices":  [
              15,
              29
            ]
          },
           {
            "text": "braves",
            "indices":  [
              30,
              37
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  [
           {
            "url": "http://t.co/VxWgk6pGa6",
            "expanded_url": "http://dld.bz/d9tyc",
            "display_url": "dld.bz/d9tyc",
            "indices":  [
              89,
              111
            ]
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Mon Jun 29 23:52:17 +0000 2015",
      "id": 615669145171009500,
      "id_str": "615669145171009536",
      "text": "#bravescountry #atlantabraves #braves Six Years Of City Cafe http://t.co/ItX0F84J54",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3070506062,
        "id_str": "3070506062",
        "name": "Atlanta Braves Fans",
        "screen_name": "BravesViews",
        "location": "",
        "description": "A Page for Atlanta Braves Fans. News Links, Updates & Pics. #bravescountry #atlantabraves #braves #atlanta #BravesFam #mlb",
        "url": null,
        "entities":  {
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 551,
        "friends_count": 1232,
        "listed_count": 12,
        "created_at": "Tue Mar 10 01:55:19 +0000 2015",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3430,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0F437C",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3070506062/1427255457",
        "profile_link_color": "CD1141",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "bravescountry",
            "indices":  [
              0,
              14
            ]
          },
           {
            "text": "atlantabraves",
            "indices":  [
              15,
              29
            ]
          },
           {
            "text": "braves",
            "indices":  [
              30,
              37
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  [
           {
            "url": "http://t.co/ItX0F84J54",
            "expanded_url": "http://dld.bz/d9tyk",
            "display_url": "dld.bz/d9tyk",
            "indices":  [
              61,
              83
            ]
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Mon Jun 29 23:47:05 +0000 2015",
      "id": 615667837672255500,
      "id_str": "615667837672255488",
      "text": "#bravescountry #atlantabraves #braves John Smoltz Inducted Into the Baseball Hall Of Fame http://t.co/M5y3vysZtX",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3070506062,
        "id_str": "3070506062",
        "name": "Atlanta Braves Fans",
        "screen_name": "BravesViews",
        "location": "",
        "description": "A Page for Atlanta Braves Fans. News Links, Updates & Pics. #bravescountry #atlantabraves #braves #atlanta #BravesFam #mlb",
        "url": null,
        "entities":  {
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 551,
        "friends_count": 1232,
        "listed_count": 12,
        "created_at": "Tue Mar 10 01:55:19 +0000 2015",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3430,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0F437C",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3070506062/1427255457",
        "profile_link_color": "CD1141",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "bravescountry",
            "indices":  [
              0,
              14
            ]
          },
           {
            "text": "atlantabraves",
            "indices":  [
              15,
              29
            ]
          },
           {
            "text": "braves",
            "indices":  [
              30,
              37
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  [
           {
            "url": "http://t.co/M5y3vysZtX",
            "expanded_url": "http://dld.bz/d9ty3",
            "display_url": "dld.bz/d9ty3",
            "indices":  [
              90,
              112
            ]
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Mon Jun 29 23:42:00 +0000 2015",
      "id": 615666556941529100,
      "id_str": "615666556941529089",
      "text": "#bravescountry #atlantabraves #braves Braves Outfielder Jason Heyward Traded To Cardinals for Pitcher, Minor-L.. http://t.co/rN2Yepd6Qa",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3070506062,
        "id_str": "3070506062",
        "name": "Atlanta Braves Fans",
        "screen_name": "BravesViews",
        "location": "",
        "description": "A Page for Atlanta Braves Fans. News Links, Updates & Pics. #bravescountry #atlantabraves #braves #atlanta #BravesFam #mlb",
        "url": null,
        "entities":  {
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 551,
        "friends_count": 1232,
        "listed_count": 12,
        "created_at": "Tue Mar 10 01:55:19 +0000 2015",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3430,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0F437C",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3070506062/1427255457",
        "profile_link_color": "CD1141",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "bravescountry",
            "indices":  [
              0,
              14
            ]
          },
           {
            "text": "atlantabraves",
            "indices":  [
              15,
              29
            ]
          },
           {
            "text": "braves",
            "indices":  [
              30,
              37
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  [
           {
            "url": "http://t.co/rN2Yepd6Qa",
            "expanded_url": "http://dld.bz/d9tyH",
            "display_url": "dld.bz/d9tyH",
            "indices":  [
              113,
              135
            ]
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Mon Jun 29 23:37:03 +0000 2015",
      "id": 615665310776074200,
      "id_str": "615665310776074240",
      "text": "#bravescountry #atlantabraves #braves Cobb Chairman Lee Sorry For How Braves Deal Was Handled http://t.co/ZyVnUhhLkb",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3070506062,
        "id_str": "3070506062",
        "name": "Atlanta Braves Fans",
        "screen_name": "BravesViews",
        "location": "",
        "description": "A Page for Atlanta Braves Fans. News Links, Updates & Pics. #bravescountry #atlantabraves #braves #atlanta #BravesFam #mlb",
        "url": null,
        "entities":  {
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 551,
        "friends_count": 1232,
        "listed_count": 12,
        "created_at": "Tue Mar 10 01:55:19 +0000 2015",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3430,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0F437C",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3070506062/1427255457",
        "profile_link_color": "CD1141",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "bravescountry",
            "indices":  [
              0,
              14
            ]
          },
           {
            "text": "atlantabraves",
            "indices":  [
              15,
              29
            ]
          },
           {
            "text": "braves",
            "indices":  [
              30,
              37
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  [
           {
            "url": "http://t.co/ZyVnUhhLkb",
            "expanded_url": "http://dld.bz/d9tyP",
            "display_url": "dld.bz/d9tyP",
            "indices":  [
              94,
              116
            ]
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
     {
      "metadata":  {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "created_at": "Mon Jun 29 23:32:01 +0000 2015",
      "id": 615664044444356600,
      "id_str": "615664044444356608",
      "text": "#bravescountry #atlantabraves #braves Disappointing Season Leads to Braves Firing General Manager Frank Wren http://t.co/kAFATyPxrZ",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user":  {
        "id": 3070506062,
        "id_str": "3070506062",
        "name": "Atlanta Braves Fans",
        "screen_name": "BravesViews",
        "location": "",
        "description": "A Page for Atlanta Braves Fans. News Links, Updates & Pics. #bravescountry #atlantabraves #braves #atlanta #BravesFam #mlb",
        "url": null,
        "entities":  {
          "description":  {
            "urls":  []
          }
        },
        "protected": false,
        "followers_count": 551,
        "friends_count": 1232,
        "listed_count": 12,
        "created_at": "Tue Mar 10 01:55:19 +0000 2015",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3430,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0F437C",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/580576749471297537/kf8Eigfv_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3070506062/1427255457",
        "profile_link_color": "CD1141",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "entities":  {
        "hashtags":  [
           {
            "text": "bravescountry",
            "indices":  [
              0,
              14
            ]
          },
           {
            "text": "atlantabraves",
            "indices":  [
              15,
              29
            ]
          },
           {
            "text": "braves",
            "indices":  [
              30,
              37
            ]
          }
        ],
        "symbols":  [],
        "user_mentions":  [],
        "urls":  [
           {
            "url": "http://t.co/kAFATyPxrZ",
            "expanded_url": "http://dld.bz/d9tyU",
            "display_url": "dld.bz/d9tyU",
            "indices":  [
              109,
              131
            ]
          }
        ]
      },
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    }
  ],
  "search_metadata":  {
    "completed_in": 0.032,
    "max_id": 615679484449169400,
    "max_id_str": "615679484449169408",
    "next_results": "?max_id=615664044444356607&q=atlantabraves&include_entities=1",
    "query": "atlantabraves",
    "refresh_url": "?since_id=615679484449169408&q=atlantabraves&include_entities=1",
    "count": 15,
    "since_id": 0,
    "since_id_str": "0"
  }
}
