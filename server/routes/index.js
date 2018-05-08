const express = require('express');
const router = express.Router();

const FacebookService = require('../services/facebook');
const YoutubeService = require('../services/youtube');



router.post('/api/search', (req, res)=>{
    let {
        youtube_id,
        query
    } = req.body;
    if(youtube_id){
        YoutubeService.getVideo(youtube_id)
            .then((data)=>{
                res.json(data);
            })
            .catch((err)=>{
                res.sendStatus(404);
            })
        ;
    } else if(query){
        YoutubeService.search(query)
            .then((data)=>{
                res.json(data);
            })
            .catch((err)=>{
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(404);
    }
});

router.get('/:youtube_id', (req, res)=>{
    const { youtube_id } = req.params;

    YoutubeService.getVideo(youtube_id)
        .then(function(videoDetails){
            if(!videoDetails){
                return res.render('error');
            } else {
                FacebookService.generateShareLink(youtube_id, videoDetails)
                .then((shareUrl)=>{
                    return res.render('youtube', {
                        title: "SERVICES",
                        shareUrl: shareUrl,
                        youtube: videoDetails,
                        layout: false
                    }, function(){
                        if(!FacebookService.scrapeCache.has(youtube_id)){
                          console.log('Scraping Website');
                          FacebookService.scrapeGraph(`http://jaydoes.video/share/${youtube_id}`)
                            .then(()=>{
                              FacebookService.scrapeCache.add(youtube_id);
                            })
                            .catch((err)=>{
                              console.log('Page scrape error', err);
                            })
                        }
                    });
                })
            }            
        })
        .catch((err)=>{
            res.render('error');
        })
    ;
})

router.get('/', (req, res)=>{
    res.render('index');
})

router.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err,
        title: 'error'
    });
});


module.exports = router;