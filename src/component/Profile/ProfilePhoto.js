 import source from "./ranim.jpg"
 import "./Style.css"
 function ProfilePhoto() {
    
    let style = {
        margin: "auto"
      
      };
    return <img src={source} alt='img' style={style} width="300px" height="300px" />;
  }
   
  export default ProfilePhoto;