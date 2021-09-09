import {useState, useEffect} from 'react';
/* import API from 'http://localhost:3000/initalState'; */

const useInitialState = (API) => {
    const [videos, setVideos] = useState({mylist:[], trends:[],originals:[]});

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data)); 
    },[]);
    return videos;
};

export default useInitialState;