import "./style.css";
import React, { useState, useRef, MutableRefObject } from 'react';
import { WebcamCapture } from "../../components/WebcamCapture";

import api from "../../utils/api";

function BiometriaFacial() {
  const webcamRef: MutableRefObject<any> = useRef(null); // Use any if you're unsure of the type

  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [imgsrc, setImgSrc] = useState(null);


  const startWebcam = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (webcamRef.current) {
        (webcamRef.current as any).srcObject = stream; // Use 'as any' to avoid TypeScript error
        setIsWebcamOn(true);
      }
    })
      .catch((error) => {
        console.error('Error accessing webcam:', error);
      });
  };

  const stopWebcam = () => {
    if (webcamRef.current) {
      const tracks = (webcamRef.current as any).srcObject.getTracks(); // Use 'as any' here
      tracks.forEach((track: any) => track.stop()); // Use 'as any' here
      setIsWebcamOn(false);
    }
  };

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc)
    },
    [webcamRef]
  );
  
  return (
    <>
      <WebcamCapture></WebcamCapture>
    </>
  );
}

export default BiometriaFacial;
