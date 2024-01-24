import React, { useState } from 'react';
import Webcam from "react-webcam";
import "./style.css"


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 450,
    height: 1080,
    facingMode: "user"
};

export const WebcamCapture = () => {

    const [image, setImage] = useState('');
    const webcamRef: any = React.useRef(null);


    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
    }, []);

    const enviarImagem = () => {
        // Pegar o state -> image
        // Criar requisicao POST para a API -> axios
    }


    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image == '' ? <Webcam className="webcam-container"
                    audio={false}
                    
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                   
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Capture</button>
                }
            </div>


        </div>
    );
};