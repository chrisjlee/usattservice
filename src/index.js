var request = require('request'),
    cheerio = require('cheerio'),
    config = {
        baseUrl: '//www.teamusa.org'
    };

(function () {
    var anchors = hrefs = [];


    request('http://www.teamusa.org/usa-table-tennis/ratings/usatt-ratings-page', function (error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = jQuery = cheerio.load(html),
            anchors = $('a[href^="/~/media/USA_Table_Tennis/Ratings/"]');

            anchors.each(function  () {
               var url = $(this).attr('href');
               hrefs.push(config.baseUrl + url);
            });

            console.log(hrefs);
      }
    });

})();
