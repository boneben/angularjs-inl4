const express = require('express');
const route = express.Router();

route.get("/", function(req, res, next) {
    res.status(200).json(
        [
            { "productname": "Supreme 2S Pro", "brand": "Bauer", "category": "Hockeyklubba", "rating": 5, "price": 2399 , "img": "https://www.hockeytown.se/pub_images/original/S19_2SPRO.jpg" },
            { "productname": "Nexus 2N Pro", "brand": "Bauer", "category": "Hockeyklubba", "rating": 5, "price": 2399 , "img": "https://www.hockeytown.se/pub_images/original/1052783.jpg" },
            { "productname": "Vapor 1X Lite Grip", "brand": "Bauer", "category": "Hockeyklubba", "rating": 5, "price": 1599 , "img": "https://www.hockeytown.se/pub_images/original/1052228-.jpg" },
            { "productname": "Jetspeed FT2", "brand": "CCM", "category": "Skridskor", "rating": 4, "price": 8499 , "img": "https://www.hockeytown.se/pub_images/original/SKFT2SR.png"  },
            { "productname": "Super Tacks AS1", "brand": "CCM", "category": "Skridskor", "rating": 3, "price": 8499 , "img": "https://www.hockeytown.se/pub_images/original/SKAS.png"  },
            { "productname": "Ribcor 70K", "brand": "CCM", "category": "Skridskor", "rating": 5, "price": 3999 , "img": "https://www.hockeytown.se/pub_images/original/3499300-1.jpg"  },
            { "productname": "Ritual G4 Pro", "brand": "Warrior", "category": "Benskydd", "rating": 4, "price": 13999 , "img": "https://www.hockeytown.se/pub_images/original/G4GLP8-1.png"  },
            { "productname": "Ritual G4", "brand": "Warrior", "category": "Benskydd", "rating": 3, "price": 7999 , "img": "https://www.hockeytown.se/pub_images/original/G4LPSR8-2.png"  },
            { "productname": "Ritual GT2 PRO", "brand": "Warrior", "category": "Benskydd", "rating": 5, "price": 14999 , "img": "https://www.hockeytown.se/pub_images/original/GT2GLP9-1.png"  },
            { "productname": "QRE", "brand": "Warrior", "category": "Handskar", "rating": 2, "price": 1299 , "img": "https://www.hockeytown.se/pub_images/original/QGJR.jpg"  },
            { "productname": "Supreme S190", "brand": "Bauer", "category": "Handskar", "rating": 4, "price": 899 , "img": "https://www.hockeytown.se/pub_images/original/1050853-1.jpg"  },
            { "productname": "Jetspeed FT370", "brand": "CCM", "category": "Handskar", "rating": 3, "price": 649 , "img": "https://www.hockeytown.se/pub_images/original/HG370JR.jpg"  }
        ]
    );
})

module.exports = route;