import React from "react";

const VideoPlayer = ({ src, width = "640px", height = "360px", controls = true }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center",backgroundColor:"#1f2329" }}>
      <video
        src={src}
        width={width}
        height={height}
        autoPlay
        loop
        muted
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      >
      </video>
    </div>

/**
 *  "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
 */
  );
};

export default VideoPlayer;
