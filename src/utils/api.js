import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2FkY2ZkNzE5NGQyYTBkNTEyMTVkZDk2ZDE3ZmIyZCIsInN1YiI6IjY0MzQ0N2YyMzkxYjljMTFiZTZhNWQ5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Bz1wZrbEPFBRUEiAZxKkPaPRTkpGxbTjh9Rd1Nq34M";

const headers = {
    Authorization : "bearer " + TMDB_TOKEN,

}
export const fetchDataFromApi = async(url,params) =>{
    try{
        // here we will be making a get request to fetch data
        const {data} = await axios.get(BASE_URL + url,{
            // these are options which we have to pass
            headers,
            params
        })
        return data

    }
    catch(err){
        console.log(err);
        return err;

    }

}