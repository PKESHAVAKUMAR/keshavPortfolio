
import './App.css';
import Keshav from './Keshav';
import Navbar from './Navbar';
import Portfolio from './components/Portfolio';


import ContactForm from './contact/Contact';

import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom';




function App() {
  return (
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element= {<Navbar/>} >
  //       <Route index element={<Portfolio/>}/>
  //     <Route path="/contactform" element={<ContactForm/>}/>
  //     </Route>
  //   </Routes>
  // </BrowserRouter>

<BrowserRouter>

<Routes>

<Route path="/" element= {<Navbar/>} >

   <Route index element={<Portfolio/>}/>
   <Route path="/contactform" element={<ContactForm/>}/>
   <Route path = "/keshav"  element={<Keshav/>} />

  </Route>

</Routes>


</BrowserRouter>


  );
}

export default App;


