const App=()=>{
return(
<>
    <h1> Welcome to React js</h1>
    <h2>This is JSX not a HTML</h2>
    <marquee behavior="scroll" direction="left"> <h1>I am a MERN Stack Developer</h1></marquee>
    <form action="" method="post">
    <fieldset>
        <legend>Form Details</legend>
        <br />
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required /><br /><br />



import Student from "./student";

        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required /><br /><br />
        
        <label for="mobile">Mobile:</label>
        <input type="number" id="mobile" name="mobile" inputmode="numeric" required /><br /><br />
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required /><br /><br />
        
        <button type="submit">Signup</button>
    </fieldset>
</form>

    </>
  )
  }
export default App;

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}



const name="amar"
const age=25
const salary=10000

const App=()=>{

return(

<p>welcome to react i am {name} my age is {age} salary is {salary}</p>

)

}
export default App;

LARGE BLOCK OF CODE WILL BE WRITTEN AS BELOW-----------------------------------------------------
const subject=<ul>
    <li>JAVA</li>
    <li>PHP</li>
    <li>MERN</li>
    <li>REACT</li>
</ul>


const App=()=>{

return(

<h1>My Subject: {subject}</h1>

)

}
export default App;

ONE TOP LEVEL ELEMENT----------------------------------------------

const App=()=>{

return(

<>
<h1>hii i am amar</h1>
<h2>mern developer</h2>

</>
)

}
export default App;

import Cybrom from "./cybrom";
const App=()=>{

    return(
    
    <>
 <h1>this is react classes</h1>
   <Cybrom />
    </>
     )
     }
    export default App;
    


   import Header from "./header"; 
   import Data from "./data";
   import Footer from "./footer";
const App=()=>{

    return(
    
    <>  

 <h1>this is react classes</h1>
   
<Header />
<Data />
<Footer />
    </>

     )
     }
    export default App;

---------------------props-----------------------------------------------------
import Student from "./student";
    const App=()=>{

      return(
      <>  
       <h1 align="center">This is REACT class</h1>
     
       <Student nm="amar" city="bhopal" subject="react"/>
      </>
  
       )
       }
      export default App;
      
import College from "./college"
const college="rgpv"
const seat="45"
const fees="45000"
      const App=()=>{

         return(
         <>  
          <h1 align="center">This is REACT class</h1>
        
         <College  clgname={college} seat={seat} fees={fees}/>
         </>
     
          )
          }
         export default App;



 import Cybrom from "./cybrom";
       const College={
         name:"patel college",
         fees:"55000",
         city:"indore",
         subject:"mern"
       }
         const App=()=>{

            return(
            <>  
             <h1 align="center">This is REACT class</h1>
           
           <Cybrom nm={College.name} fees={College.fees}  city={College.city} sub={College.subject}/>
            </>
        
             )
             }
            export default App;