import "./style.css"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import face from "../../assets/img/Volkswagen_logo_2019.svg"

export default function EntradaIdFacial (){


  useEffect(() => {
    document.title = "SecurePass - Login"
    
  }, [])


return(
  
    <>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
</style>
    <div className="content">
  <div className="rosto-leitura">
    <img className="image" src={face} alt="face"/>
  </div>
  <div className="btn">
    
   

  <Link to='idfacial'><button className="facial" type="button">Face ID</button></Link>
 
   











  </div>
</div>
    </>
)


}