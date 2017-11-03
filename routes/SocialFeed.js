import axios from 'axios'; 
import config from '../config';
import twitter from 'twitter';
import moment from 'moment';

const ins_url  =  "https://api.instagram.com/v1/users/self/media/recent/?count=10&access_token="+config.ins_access_token;

const client = new twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
});

const params = {screen_name: 'nodejs'};

export const getSocialFeed = (res) => {
    let ins = [];
    let tw = [];
    axios.get(ins_url)
    .then( result => {
        result.data.data.map( (i) => {
            const t = new Date(i.created_time*1000);
            let formatted = moment(t).format("MMM DD, YYYY hh:MM:ss");
            let _ins = {
                type: "instagram",
                image: i.images.low_resolution.url,
                date: formatted
            }
            ins.push(_ins);
        });
        client.get('statuses/user_timeline', {count: 5}, function(error, tweets, response) {
            if (!error) {
                tweets.map( (i, key) => {
                    let t = new Date(i.created_at);
                    let formatted_date = moment(t).format("MMM DD, YYYY hh:MM:ss");
                    let _tw = {
                        type: "twitter",
                        text: i.text,
                        date: formatted_date
                    }
                    
                    ins.splice(3*(key+1), 0, _tw);
                });
                res.setHeader('Content-Type', 'application/json'); 
                res.json(ins);
            }
        });
    })
    .catch(error => {
        console.log(error);
    });
}
