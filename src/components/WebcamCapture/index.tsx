import React, { useState } from 'react';
import Webcam from "react-webcam";
import api from '../../utils/api';
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

        console.log(imageSrc)

        const byteCharacters = atob(imageSrc.replace('data:image/jpeg;base64,', ''));
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/octet-stream' });

        // Passo 2: Criar um objeto File a partir do Blob
        const file = new File([blob], 'nome_do_arquivo.jpg', { type: 'application/octet-stream' });

        // Passo 3: Criar um FormData e anexar o objeto File
        const formData = new FormData();
        formData.append('image', file);

        api.post("/photo", formData, {
            headers: {
                "content-type": "multipart/form-data"
            }
        }).then((resposta: any) => {
            console.log("teste");
            console.log(resposta.data);
            
        })

        console.log(formData);

        // var link = document.createElement('a')
        // link.download = "photo.png"
        // link.href = webcamRef.current.getScreenshot()
        // link.textContent = 'Clique para Baixar a imagem'
        // document.body.appendChild(link)

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