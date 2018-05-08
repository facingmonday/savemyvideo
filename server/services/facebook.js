const rp = require('request-promise');
const EventEmitter = require('events').EventEmitter;

class FacebookService extends EventEmitter{
    constructor(){
        super();
        this.scrapeCache = new Set();
    }

    scrapeGraph(url){
        const options = {
            method: "POST",
            json: {
                id: url,
                scrape: true,
                access_token: "a0b14732b191d400bda1160a8fd45325"        
            }
        }
        return rp(url, options);
    }

    generateShareLink(data){
        let url = "https://www.facebook.com/dialog/share?";
        let obj = {
            "app_id":"303472459794735",
            "display":"popup",
            "href": `http://jaydoes.video/share/${youtube_id}`,
            "picture": videoDetails.thumbnails.high.url,
            "title":videoDetails.title,
            "description": encodeURIComponent(videoDetails.description)
        }
        
        return "javascript:window.open('"+url+formurlencoded(obj)+"', '_blank', 'width=400,height=500');void(0);";  
    }
}
module.exports = new FacebookService();