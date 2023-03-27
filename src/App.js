import './App.css';
import NavBar from './NavBar';
import NewsItem from './NewsItem';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
// import News from './News';

function App() {
  const[progress, setProgress]= useState(10)
  return (
    <>
    <Router>
      <div className="container d-flex" style={{backgroundColor:'#f7f7f7'}}>
        <img src="https://www.kindpng.com/picc/m/396-3969430_news-icon-icon-news-logo-hd-png-download.png" width="200px" alt="icon" /><h1 style={{fontSize:'8.5rem'}}>Tezz News</h1>
      </div>
    <NavBar />
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(10)}
      />
    <Routes>
      <Route path="/" exact element={<NewsItem key='general' setProgress={setProgress} category="general" />} />
      <Route path="/business" exact element={<NewsItem key='business' setProgress={setProgress} category="business" />} />
      <Route path="/entertainment" exact element={<NewsItem key='entertainment' setProgress={setProgress} category="entertainment" />} />
      <Route path="/health" exact element={<NewsItem key='health' setProgress={setProgress} category="health" />} />
      <Route path="/science" exact element={<NewsItem key='science' setProgress={setProgress} category="science" />} />
      <Route path="/sports" exact element={<NewsItem key='sports' setProgress={setProgress} category="sports" />} />
      <Route path="/technology" element={<NewsItem key='technology' setProgress={setProgress} category="technology" />} />
    </Routes>
  </Router>
   
    </>
  );
}

export default App;
