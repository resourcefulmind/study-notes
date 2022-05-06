import axios from "axios";

export default axios.create({
    baseURL: 'https://api-football-v1.p.rapidapi.com', 
    headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '0f2fba8377msh8b3ae4d192f719fp1f7a3djsn189ee6ead54a'
    }
})