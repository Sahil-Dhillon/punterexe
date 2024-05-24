
import { useEffect, useState } from 'react';
// import $ from "jquery";
import { Routes, Route } from "react-router-dom";
import SplashScreen from './components/splash';
import IndexOne from './pages/IndexOne';
import Contact from './pages/Contact';
import $ from "jquery";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  // useEffect(()=>{

  //   function preloader() {
  //     $('#preloader').delay(3).fadeOut();
  //   };
    
  //   $(window).on('load', function () {

  //     preloader();
     
  //   });
    
  // },[])
  return (
    <div className="App">
    {loading ? <SplashScreen/> : 
      <Routes>
        <Route path="/" element={<IndexOne/>}/>
        {/* <Route path="index-2" element={<IndexTwo/>}/> */}
        {/* <Route path="index-3" element={<IndexThree/>}/> */}
        {/* <Route path="about-us" element={<AboutUs/>}/> */}
        {/* <Route path="tournaments" element={<Tournament/>}/> */}
        <Route exact path="contact" element={<Contact/>}/>
        {/* <Route path="blog" element={<Blog/>}/> */}
        {/* <Route path="blog-details" element={<BlogDetails/>}/> */}
        {/* <Route path="match-single" element={<MatchSingle/>}/> */}
        {/* <Route path="our-squad" element={<Squad/>}/> */}
        {/* <Route path="shop" element={<Shop/>}/> */}
        {/* <Route path="shop-details" element={<ShopDetails/>}/> */}
      </Routes>
    }
    </div>
  );
}

export default App;
