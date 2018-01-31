import axios from 'axios'; 
import config from '../config';


export const getHomeBlog = (res) => {
    const url = `${config.drupal_url}home_blogs`;
    axios.get(url, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        }
    })
    .then(response => {
        res.setHeader('Content-Type', 'application/json');
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}
