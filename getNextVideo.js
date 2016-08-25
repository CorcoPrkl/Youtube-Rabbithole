'use strict';

var request = require('request');
var fs  = require('fs');
var apiKey = fs.readFileSync('apiKey.txt', 'utf8');

function getNextVideo(id) {

if (id == null) { var videoURL = "ouZQ7rgAq-I"; } else { var videoURL = id; }
              
        request.get('https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId='+videoURL+'&type=video&key='+apiKey, function(header, body, err) {
           
        videoData = JSON.parse(body.body);

        container.innerHTML = videoData;
        
        });        
}

var container = document.querySelector('#nextVideo');
var id = document.querySelector('#idInput');

id.addEventListener('change', function () {
   getNextVideo(id.value);
});