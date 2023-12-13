// import "./style.css"
// import validacao from "../../assets/img/Validacao.png"
// import { Link } from "react-router-dom"
// import { useEffect } from "react"


// export default function IdFacial() {

//     useEffect(() => {
//         document.title = "SecurePass - Biometria facial"
        
//       }, [])

//     return (
//         <main>
//             {/* <h1> Pagina do usuario</h1> */}
//             <section className="banner">
//                 <div className="banner_conteudo">
//                     {/* <img src="../img/Backgronud.png" alt=""> */}
//                 </div>
//             </section>
//             <section className="conteudo">
//                 <div className="Detecção">
//                     <h2>Detecção De Rosto</h2>
//                     <br />
//                     <p>
//                         Alinhe seu rosto no <br /> do circulo
//                     </p>
//                 </div>
//                 <img className="valid" src={validacao} alt="Validacao" />
//             </section>
//             <div className="botoes_footer customer_btn">
//                 <Link to='/idfacialaprovado' className="">
//                     Aprovado
//                 </Link>
//             </div>
//         </main>

//     )


// }

import "./style.css";
import { Link } from "react-router-dom"

import React, { useState, useRef, MutableRefObject } from 'react';
import Webcam from 'react-webcam';
import { WebcamCapture } from "../../components/WebcamCapture";

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
    // <section className="grid">
    // <div className="webCam">
    
    //   <Webcam ref={webcamRef} />
    //   {isWebcamOn ? (
    //     <button onClick={stopWebcam}>Stop Webcam</button>
    //   ) : (
    //     <button onClick={startWebcam}>Start Webcam</button>
    //   )}
    // </div>
    // <button onClick={capture}>Tirar foto</button>
    // <span>{imgsrc}</span>
    // </section>
  );
}

export default BiometriaFacial;
