import { Link, Outlet } from "react-router-dom";

const Layout=()=>{


    return(
           <>
            
            <Link to="home">Home</Link> |
            <Link to="about">About</Link> |
            <Link to="contact">Contact Us</Link> 
           
            <hr size="4" color="red" />
            
            <Outlet/>

            <hr size="4" color="red" />
            www.my company.com
          
           </>
       )
   }
   export default Layout;
