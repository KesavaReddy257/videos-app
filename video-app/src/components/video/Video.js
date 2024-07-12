import React,{useState, useEffect} from "react";

function Video() {
  const[videos,setVideos] = useState([]);
  useEffect(() => {
    fetch("videoData.json")
    .then(response => response.json())
    .then(data => setVideos(data))
    .catch(error => console.error("Problem with fetching data!!", error));
  }
  ,[]);



  return (
    <div className="container">
      <div className="row">
        {videos.map((video, key) => (
          <div key={key} className="col-md-3 mb-2">
              <a href={`https://youtube.com/watch?v=${video.img_id}`}>
                  <div className="card">
                      <img
                        src={`https://img.youtube.com/vi/${video.img_id}/0.jpg`}
                        className="ig-thumbnail"
                        alt={video.title}
                    />
                <div className="card-body">
                    <h5 className="card-title">{video.title}</h5>
                    <p className="card-text">{video.channelName}</p>
                    <small>
                      {video.viewsCount} views - {video.likeCount} likes -{" "}
                      {video.duration}
                     </small>
                  </div>
                </div>
                </a>
             </div>
            ))}
        </div>
    </div>
  );
}

export default Video;

// so its running for everyone... now
