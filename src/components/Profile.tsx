import { useState } from "react";
import { useShop } from "../context/ShopContext";


const Profile = () => {
    const [image, setImage] = useState("default-avatar.png")
    const { profile } = useShop();

    const handleImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (ev) => setImage(ev.target.result);
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    
    return (
        
      <div 
      className="ml-11 mt-11 font-bold flex flex-col items-center justify-center text-center"
      >
         <h2>firstName: {profile?.firstName}</h2>
         <h2>lastName:  {profile?.lastName}</h2>
         <h2>handle: {profile?.handle}</h2>

         <img 
         src={image} 
         alt="pic" 
         className=" w-24 h-24 rounded-full object-cover"
         />
         <input type="file" onChange={handleImage} />
      </div>

        
         
        
        
       

    )
}

export default Profile;