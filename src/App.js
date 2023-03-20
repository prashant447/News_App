
// import './App.css';
// import Navbar from './Component/Navbar';

// import React, { Component } from 'react'
// import News from './Component/News';



// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

   
    

// export default class App extends Component {

//   apikey= process.env.REACT_APP_NEWS_API
//   state= {
//     progress:0
//   }

//    setProgress=(progress)=>{
//     this.setState({progress:progress})
//    }
//   pageSize=6;
//   render() {
//     return (
      
//       <div>
//       <BrowserRouter>
//       <LoadingBar
//       height = {3}
//         color='#f11946'
//         progress={this.state.progress}
       
//       />
        

//         <Navbar/>
//         {/* <News setProgress={setProgress} pageSize = {this.pageSize} country = "in" category = "sports"/> */}
//         <Routes>
//           <Route exact path="/" element = {<News setProgress={this.setProgress} apikey={this.apikey} key = "general" pageSize = {this.pageSize} country = "in" category = "general"/>}></Route>
//           <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key = "business" pageSize = {this.pageSize} country = "in" category = "business"/>}></Route>
//           <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key = "entertainment" pageSize = {this.pageSize} country = "in" category = "entertainment"/>}></Route>
//           <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key = "general" pageSize = {this.pageSize} country = "in" category = "general"/>}></Route>
//           <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key = "health" pageSize = {this.pageSize} country = "in" category = "health"/>}></Route>
//           <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key = "science" pageSize = {this.pageSize} country = "in" category = "science"/>}></Route>
//           <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key = "sports" pageSize = {this.pageSize} country = "in" category = "sports"/>}></Route>
//           <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key = "technology" pageSize = {this.pageSize} country = "in" category = "technology"/>}></Route>
//         </Routes>
         
//       </BrowserRouter>
//       </div>
      
//     )
//   }
// }



import './App.css';

import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <BrowserRouter>
        <Navbar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
          <Route exact path="/" element = {<News setProgress={setProgress} apikey={apikey} key = "general" pageSize = {pageSize} country = "in" category = "general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key = "business" pageSize = {pageSize} country = "in" category = "business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key = "entertainment" pageSize = {pageSize} country = "in" category = "entertainment"/>}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey} key = "general" pageSize = {pageSize} country = "in" category = "general"/>}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key = "health" pageSize = {pageSize} country = "in" category = "health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key = "science" pageSize = {pageSize} country = "in" category = "science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key = "sports" pageSize = {pageSize} country = "in" category = "sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key = "technology" pageSize = {pageSize} country = "in" category = "technology"/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
 
}

export default App;



