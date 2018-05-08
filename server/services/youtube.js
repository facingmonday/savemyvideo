const request = require('request-promise');
const _ = require('lodash');
const formurlencoded = require('form-urlencoded');
const Promise = require('bluebird');
const EventEmitter = require('events').EventEmitter;

class YoutubeService extends EventEmitter{
    constructor(){
        super();
    }

    formatVideo(data){
        return data;
    }

    search(search){
        const key = "AIzaSyA9TALVNowW_loCDV5GsjwcmkS3fLb4kSc";
        const request_url = `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(search)}&key=${key}`;
        return request(request_url)
            .then((data)=>{
                const requestData = JSON.parse(data);
                return Promise.resolve(requestData.items)
    
            })
    }

    getVideo(youtube_id){
        const key = "AIzaSyA9TALVNowW_loCDV5GsjwcmkS3fLb4kSc";
        const request_url = `https://www.googleapis.com/youtube/v3/videos?id=${youtube_id}&part=snippet%2CcontentDetails%2Cstatistics&key=${key}`;
      
        return request(request_url)
            .then(function(data){
                const requestData = JSON.parse(data);
                //console.log('data', JSON.parse(data));
                //console.log('json.parse(data)', JSON.parse(data).items[0]);
                return Promise.resolve(this.formatVideo(requestData.items[0]));
            })
        ;
    }
}

module.exports = new YoutubeService()