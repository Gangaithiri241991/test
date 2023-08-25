
import './App.css';
import img from "./i.png"
import img1 from "./d.png"
import img2 from "./fa.avif"
import img3 from "./download (3).png"
import img4 from "./download (2).png"
import img5 from  "./youtupe.avif"
import Navbar from "./component/navbar"
import Carosel from './component/carosel';
import Card from "./component/card"
function App() {
  return (
    <div className="App">
     <header >
      <nav className="header" >
    
        <img src={img2} height="2%" width="2%"/>
      <img src={img3} height="2%" width="2%"/>
        
       <img src={img1} height="2%" width="2%"/>
       <img src={img4} height="2%" width="2%"/>
       <img src={img} height="3%" width="3%"/>
        <img src={img5} height="2%" width="2%"/>
        
        

      
    
      </nav>
      <hr/>
      <Navbar/>
     
      </header><br/><br/>
      <section>
        <div className="car">
          
        </div>
      </section>
     <section className='car2'>

      <h5 className="section2">BUILDING THE GAP BETWEEN BUSINESS AND TECHNOLOGY</h5>
     <p className='sect2'>OUR SERVICES</p>
     
     <Card/><br/><br/>
    <Card/>
     
     
     </section>
      
   </div>
   
  );
}

export default App;
