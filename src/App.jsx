// import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
const App =()=> {
  const pageSize = 20 
    return (
      <>

        <Router>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route exact path="/" element={<News key="general" pageSize={pageSize} country="in" category="general" title="General" />} />
              <Route exact path="/business" element={<News key="business" pageSize={pageSize} country="in" category="business" title="Business" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment"title="Entertainment" />} />
              <Route exact path="/health" element={<News key="health" pageSize={pageSize} country="in" category="health"title="Health" />} />
              <Route exact path="/general" element={<News key="general" pageSize={pageSize} country="in" category="general"title="General" />} />
              <Route exact path="/science" element={<News key="science" pageSize={pageSize} country="in" category="science"title="Science" />} />
              <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} country="in" category="sports" title="Sports"/>} />
              <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} country="in" category="technology"title="Technology" />} />
            </Routes>
          </div>
          <Footer title="TodaysNews"  />
        </Router>
      </>
    )
}
export default App;