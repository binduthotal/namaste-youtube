import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from './constants';

export const useGetVideosFromApi = () => {
    const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/" + YOUTUBE_VIDEOS_API
    );
    const json = await data.json();
    setVideos(json.items);
  };
  return videos;
}

