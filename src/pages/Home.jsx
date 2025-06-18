import React, { useEffect, useState } from "react";
import Video from "@/components/Video";
import useFetchAllVideos from "@/hooks/useFetchAllVideos";

function Home() {
  const [playing, setPlaying] = useState(null);
  const [videoDatas, setVideoDatas] = useState([]);
  const { data, isError, isFetched, isFetching } = useFetchAllVideos();

  useEffect(() => {
    if (isFetched && data) setVideoDatas(data);
  }, [data, isFetched]);

  if (isFetching) return "Loading";
  if (isError) return "Something went wrong"

  return (
    <div className="container">
      {videoDatas?.map((videoData) => (
        <Video
          videoData={videoData}
          key={videoData.id}
          playing={playing}
          setPlaying={setPlaying}
        />
      ))}
    </div>
  );
}

export default Home;
