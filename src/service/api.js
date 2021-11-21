import axios from "axios";




export async function getGames() {
    var options = {
        method: 'GET',
        url: 'https://mmo-games.p.rapidapi.com/games',
        params: { 'sort-by': 'alphabetical' },
        headers: {
            'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
            'x-rapidapi-key': 'c74234e609mshb5b4e152853eac7p1245acjsn9845474aec29'
        }
    };
    //create a axios get request to the api
    try {
        const response = await axios(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getDetail(id) {
    var options = {
        method: 'GET',
        url: 'https://mmo-games.p.rapidapi.com/game',
        params: {id: id},
        headers: {
            'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
            'x-rapidapi-key': 'c74234e609mshb5b4e152853eac7p1245acjsn9845474aec29'
        }
    };
    //create a axios get request to the api
    try {
        const response = await axios(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
