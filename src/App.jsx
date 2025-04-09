// import React, { useEffect } from 'react';
// import { Container, Nav, Navbar, Carousel, Button, Card, Row, Col } from 'react-bootstrap';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import myimg1 from "./coding4.jpg";
// import myimg2 from "./router.png";
// import myimg3 from "./codingbanner1.jpg";
// import myimg4 from "./coding1.jpg";
// import myimg5 from "./coding5.jpg";
// import myimg6 from "./coding2.jpg";
// import myimg7 from "./react.avif";
// import myimg8 from "./newreactlogo.png";
// import myimg9 from "./router.png";

// const App = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const cardsData = [
//     { id: 1, img: myimg7, title: "React", text: "React is a JavaScript library used for building user interfaces. "},
//     { id: 2, img: myimg6, title: "JSX", text: "JSX is a syntax extension for JavaScript used with React library. " },
//     { id: 3, img: myimg9, title: "Component", text: "A reusable and independent building block of a user interface." },
//     { id: 4, img: myimg4, title: "Listing", text: " you will render lists with some type of loop. " },
//     { id: 5, img: myimg2, title: "React-Router-Dom", text: "React Router DOM simplifies navigation in your web applications" },
//     { id: 6, img: myimg5, title: "Forms", text: "In React, form data is usually handled by the components" },
//     { id: 7, img: myimg3, title: "Modules", text: "Modularize code in React JS refers to dividing it into segments or modules" },
//     { id: 8, img: myimg1, title: "React-Bootstrap", text: "A flexible and extensible content container with multiple variant." },
//   ];

//   return (
//     <div className="page-container">
//       <Navbar className='nav'>
//         <Container>
//           <Navbar.Brand href="#home"  style={{ fontSize: '34px', color:"orangered" }}  data-aos="fade-right" data-aos-delay="200" data-aos-duration="2000"> <img src={myimg8} alt="react logo" style={{height:"50px",width:"50px" }} /> {''}Chai Aur <span style={{color:"#58C4DC"}}>React</span>  <span class="loader"></span></Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse>
//             <Nav  >
//               <Nav.Link href="#home" style={{color:"white"}} className='anchor' data-aos="fade-down" data-aos-delay="200" data-aos-duration="800">Home</Nav.Link>
//               <Nav.Link href="#contact" style={{color:"white"}} className='anchor'  data-aos="fade-down" data-aos-delay="200" data-aos-duration="1400">Contact</Nav.Link>
//               <Nav.Link href="#gallery" style={{color:"white"}} className='anchor'  data-aos="fade-down" data-aos-delay="200" data-aos-duration="2000">Gallery</Nav.Link>
//               <Nav.Link href="#about us" style={{color:"white"}} className='anchor' data-aos="fade-down" data-aos-delay="200" data-aos-duration="2500">About Us</Nav.Link>
//               <Nav.Link href="#testimonial" style={{color:"white"}}className='anchor' data-aos="fade-down" data-aos-delay="200" data-aos-duration="3000">Testimonial</Nav.Link>

// <button class="Btn"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">

//   <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

//   <div class="text">Login</div>
// </button>
//  </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Carousel>
//         <Carousel.Item>
//           <img className="d-block w-100 carousel-img" src={myimg1} alt="First slide" />
//           <Carousel.Caption>
//             <h3>Learn <span id='change'>React</span> </h3>
//             <p>React is a JavaScript library used for building user interfaces.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100 carousel-img" src={myimg2} alt="Second slide" />
//           <Carousel.Caption>
//             <h3><span id='change'>React</span> Router Dom</h3>
//             <p>React Router DOM simplifies navigation in your web applications, keeping the URL and UI in sync.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100 carousel-img" src={myimg3} alt="Third slide" />
//           <Carousel.Caption>
//             <h3><span id='change'>React</span> Component</h3>
//             <p>In React, a component is a reusable and independent building block of a user interface.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       <header style={{
//       backgroundColor: 'black',
//       color: '#61dafb',
//       padding: '20px',
//       textAlign: 'center',
//       fontFamily: 'sans-serif'
//     }}>

//       <div data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
//         <a href="https://react.dev/learn" style={{
//           color: '#61dafb',
//           margin: '0 10px',
//           textDecoration: 'none',
//           fontWeight: '800',
//           fontSize:"30px",

//         }}  >Learn React</a>

//         <a href="https://react.dev/reference" style={{
//           color: '#61dafb',
//           margin: '0 10px',
//           textDecoration: 'none',
//            fontWeight: '800',
//           fontSize:"30px"
//         }}>API Reference</a>

// <div style={{
//       maxWidth: '800px',
//       margin: '0 auto',
//       padding: '40px 20px',
//       fontFamily: 'system-ui, sans-serif',
//       lineHeight: '1.6',
//       color: 'white'
//     }}>
//       <h1 style={{
//         fontSize: '2.5rem',
//         fontWeight: '700',
//         marginBottom: '24px',
//         color: 'white'
//       }}>Use the best from every platform</h1>

//       <p style={{ fontSize: '1.2rem', marginBottom: '32px' }}>
//         People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform's unique strengths to let your interfaces feel just right on every platform.
//       </p>

//       <section style={{ marginBottom: '48px' }}>
//         <h2 style={{
//           fontSize: '1.8rem',
//           fontWeight: '600',
//           marginBottom: '16px',
//           color: 'orangered'
//         }}>Stay true to the web</h2>

//         <p style={{ marginBottom: '16px' }}>
//           People expect web app pages to load fast. On the server, React lets you start streaming HTML while you're still fetching data, progressively filling in the remaining content before any JavaScript code loads. On the client, React can use standard web APIs to keep your UI responsive even in the middle of rendering.
//         </p>

//         <div style={{
//           display: 'inline-block',
//           backgroundColor: '#f0f0f0',
//           padding: '8px 16px',
//           borderRadius: '4px',
//           fontWeight: '500',
//           background:"orangered"
//         }}>Search</div>
//       </section>

//       <section>
//         <h2 style={{
//           fontSize: '1.8rem',
//           fontWeight: '600',
//           marginBottom: '16px',
//           color: 'orangered'
//         }}>Go truly native</h2>

//         <p>
//           People expect native apps to look and feel like their platform. React Native and Expo let you build apps in React for Android, iOS, and more. They look and feel native because their UIs are truly native. It's not a web view—your React components render real Android and iOS views provided by the platform.
//         </p>
//       </section>
//     </div>

// <Container className="my-5">

// <div class="🤚">
// 	<div class="👉"></div>
// 	<div class="👉"></div>
// 	<div class="👉"></div>
// 	<div class="👉"></div>
// 	<div class="🌴"></div>
// 	<div class="👍"></div>
// </div>
//         <h1 className="text-center mb-4" ><span id='card'>Welcome To Chai Aur </span><span id='change'>React </span></h1>

//         <Row className="g-4">
//           {cardsData.map((card) => (
//             <Col key={card.id} lg={3} md={6}>
//               <div className="card-wrapper" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
//                 <Card className="h-100">
//                   <Card.Img variant="top" src={card.img} className="card-img" />
//                   <Card.Body>
//                     <Card.Title>{card.title}</Card.Title>
//                     <Card.Text>{card.text}</Card.Text>
//                     <Button variant="primary">View Details</Button>
//                   </Card.Body>
//                 </Card>
//                 <div className="light-reflection"></div>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//       </div>

//     </header>

//       <footer className="footer bg-dark text-white py-4">
//         <Container>
//           <Row>
//             <Col md={4}>
//               <h5>About Us</h5>
//               <p>React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of these components efficiently. React utilizes a virtual DOM, which optimizes updates and improves performance.
// </p>
//             </Col>
//             <Col md={4}>
//               <h5>Quick Links</h5>
//               <ul className="list-unstyled">
//                 <li><a href="#home" className="text-white">Home</a></li>
//                 <li><a href="#features" className="text-white">Features</a></li>
//                 <li><a href="#pricing" className="text-white">Pricing</a></li>
//               </ul>
//             </Col>
//             <Col md={4}>
//               <h5>Contact</h5>
//               <address>
//                 Email: amarnath2893@gmail.com<br />
//                 Phone: 8319960075
//               </address>
//             </Col>
//           </Row>
//           <div className="text-center mt-3">
//             <p>&copy; {new Date().getFullYear()} Created By AmarNath. All rights reserved.</p>
//           </div>

// <ul class="wrapper">
//   <li class="icon facebook">
//     <span class="tooltip">Facebook</span>
//     <svg
//       viewBox="0 0 320 512"
//       height="1.2em"
//       fill="currentColor"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
//       ></path>
//     </svg>
//   </li>
//   <li class="icon twitter">
//     <span class="tooltip">Twitter</span>
//     <svg
//       height="1.8em"
//       fill="currentColor"
//       viewBox="0 0 48 48"
//       xmlns="http://www.w3.org/2000/svg"
//       class="twitter"
//     >
//       <path
//         d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
//       ></path>
//     </svg>
//   </li>
//   <li class="icon instagram">
//     <span class="tooltip">Instagram</span>
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       height="1.2em"
//       fill="currentColor"
//       class="bi bi-instagram"
//       viewBox="0 0 16 16"
//     >
//       <path
//         d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
//       ></path>
//     </svg>
//   </li>
// </ul>

//         </Container>
//       </footer>
//     </div>
//   );
// };

// export default App;

// const App=()=>{
//   const display=()=>{
//     alert("this is clicked")
//   }
//   return(
//     <>

//     <h1>Welcome to Rect Event</h1>
//     <button onClick={display}>click here</button>
//     </>
//   )

// }
// export default App;
// -----------------------------------------parameterized function-----------------------------
// const App=()=>{
//   const display=(dis)=>{
//     alert(`"my name is:${dis}"`)
//   }
//   return(
//     <>

//     <h1>Welcome to Rect Event</h1>
//     <button onClick={()=>{display("AmarNath")}}>click here</button>
//     </>
//   )

// }
// export default App;

// --------------------event handling--------------------------------

// const App=()=>{
//   const display=(nm,e)=>{
//     alert("Name:"+nm +"btnName:"+e.target.name+ "value:" +e.target.value)
//   }
//   return(
//     <>

//     <button name="myBTN" value="btn0" onClick={(e)=>{display("amarnath",e)}}>click here</button>
//     </>
//   )

// }
// export default App;

// const App=()=>{

//   return(
//     <>

//     <h1>Application Form</h1>

//     </>
//   )

// }
// export default App;

// const App=()=>{
//   const Student=[
//     {
//      "rollno":121,
//      "name":"amar",
//      "city":"bhopal",
//      "fees":12000,
//      },
//      {
//       "rollno":122,
//       "name":"nikhil",
//       "city":"bhopal",
//       "fees":13000,
//       },
//       {
//         "rollno":123,
//         "name":"sapna",
//         "city":"bhopal",
//         "fees":14000,
//         },
//         {
//           "rollno":124,
//           "name":"harshal",
//           "city":"bhopal",
//           "fees":15000,
//           },
//           {
//             "rollno":125,
//             "name":"ana   ",
//             "city":"bhopal",
//             "fees":16000,
//             }
// ]
//    const ans=Student.map((key)=>{

//       return(
//         <>
//         <tr >
//           <td>{key.rollno}</td>
//           <td>{key.name}</td>
//           <td>{key.city}</td>
//           <td>{key.fees}</td>
//         </tr>
//         </>
//    )

//     });

//     return(
//       <>
//      <table border="1" width="400">
//       <tr>
//         <th>rollno</th>
//         <th>name</th>
//         <th>city</th>
//         <th>fees</th>
//       </tr>
//       {ans}
//      </table>

//     </>

//        )
//       }
//       export default App;

// const App=()=>{
//   const display=(nm,e)=>{
//     alert("Name:"+nm +"btnName:"+e.target.name+ "value:" +e.target.value)
//     console.log()
//   }
//   return(
//     <>

//     <button name="myBTN" value="btn0" onClick={(e)=>{display("amarnath",e)}}>click here</button>
//     </>
//   )

// }
// export default App;

// import { useState } from "react";
// const App=()=>{
// const [name,setName]= useState("khushi");
// return(
//   <>
//   <h1>welcome my name is {name}</h1>
//   <button onClick={()=>{setName("amar")}}>click me</button>

//   </>
// )

// }
// export default App;

// import { useState } from "react";
// const App=()=>{
// const [color,setName]= useState("red");
// return(
//   <>
//   <h1 style={{color:color}}>my favourite color is {color}</h1>
//   <button onClick={()=>{setName("green")}}>green color</button>
//   <button onClick={()=>{setName("red")}}>red color</button>
//   <button onClick={()=>{setName("blue")}}>blue color</button>
//   <button onClick={()=>{setName("pink")}}>pink color</button>

//   </>
// )

// }
// export default App;

//

// import { useState,useEffect } from "react";

// const App=()=>{
//   const [count,setCount]=useState(0);

// useEffect(()=>{
//   setTimeout(()=>{

//    setCount(count+1)

//   },4000);
// })
//   return (
//     <>
//       <h1 align="center">My Counter App:{count}</h1>

//     </>
//   );
// }

// export default App;

// import { useState,useEffect } from "react";

// const App=()=>{
//   const [count,setCount]=useState(0);

// useEffect(()=>{
// setTimeout(()=>{
//   setCount(count+1)
// },2000)

// },[]);
// return (
//     <>
//     <p align="center">Hook useEffect</p>
//       <h1 align="center">My React App:{count}</h1>
//       </>
//   );
// }
// export default App;

// import { useState,useEffect } from "react";

// const App=()=>{
//   const [count,setCount]=useState(0);
//   const[multi,setMulti]=useState(0)

// useEffect(()=>{
// setMulti(count*2)

// },[count]);
// return (
//     <>

//       <h1 >My React Counter:{count}</h1>
//       <h2>Multiplication:{multi}</h2>
//       <button onClick={()=>{setCount(count+1)}}>click here</button>
//       </>
//   );
// }
// export default App;

// import { useState} from "react";

// const App=()=>{

// const[name,setName]=useState("");
// const[city,setCity]=useState("");

// const handleSubmit=()=>{
// alert(`My Name:${name} City:${city}`)
// }
// return (
//     <>
//    <h1 >My Form</h1>
//     name: <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} />
//     <br />
//     city: <input type="text" name="" id="" value={city} onChange={(e)=>{setCity(e.target.value)}} />
//     <br />
//     <button onClick={handleSubmit} >save</button>
//       </>
//   );
// }
// export default App;

// import { useState } from "react";
// const App = () => {
//   const [input, setInput] = useState({});
//   const handleInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setInput((values) => ({ ...values, [name]: value }));
//     console.log(input);
//   };
//   return (
//     <>
//       <h1>Application form</h1>
//       rollno: <input type="text" name="rollno" onChange={handleInput} />
//       <br />
//       <br />
//       name: <input type="text" name="name" onChange={handleInput} />
//       <br /> <br />
//       city: <input type="text" name="city" onChange={handleInput} />
//       <br />
//       <br />
//       fees: <input type="text" name="fees" onChange={handleInput} />
//       <br />
//       <br />
//       <button>Save</button>
//     </>
//   );
// };
// export default App;


import { useState, useEffect } from "react";

const App = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    console.log(input);
  }, [input]);

  const formStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif"
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold"
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  };

  return (
    <div style={formStyle}>
      <h1 style={{ textAlign: "center" }}>Form Data Handling</h1>

      <label style={labelStyle}>Name:</label>
      <input type="text" name="name" onChange={handleInput} style={inputStyle} />

      <label style={labelStyle}>Age:</label>
      <input type="number" name="age" onChange={handleInput} style={inputStyle} />

      <label style={labelStyle}>Email:</label>
      <input type="email" name="email" onChange={handleInput} style={inputStyle} />

      <label style={labelStyle}>City:</label>
      <input type="text" name="city" onChange={handleInput} style={inputStyle} />

      <button style={buttonStyle}>Save</button>

      <pre style={{ background: "#eef", padding: "10px", marginTop: "20px" }}>
        {JSON.stringify(input, null, 4)}
      </pre>
    </div>
  );
};

export default App;

