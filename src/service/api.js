import axios from "axios";

var axios = require("axios").default;

var options = {
    method: 'GET',
    url: 'https://mmo-games.p.rapidapi.com/games',
    params: { 'sort-by': 'alphabetical' },
    headers: {
        'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
        'x-rapidapi-key': 'c74234e609mshb5b4e152853eac7p1245acjsn9845474aec29'
    }
};

axios.request(options)
    .then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

export default api;