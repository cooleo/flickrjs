/**
 * Created by nguyendanghung on 6/29/16.
 */
var FlickrJS = require('FlickrJS');
var keys = {'api_key': 'API KEY HERE'};
var flickrJS = new FlickrJS(keys);


    //get public photos

flickrJS.getPulicPhotos().then(function (result) {
        console.log(result);
    }).catch(function (err) {
        console.log('err:%s',err);
    });

   // search photos

flickrJS.get("photos.search", req.body).then(function (result) {
        console.log(result);
    }).catch(function (err) {
        console.log('err:%s',err);
    });


