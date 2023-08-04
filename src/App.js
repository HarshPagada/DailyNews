import  './App.css';
import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


// export default class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       country: 'in', 
//     };
//     this.handleChangecountry = this.handleChangecountry.bind(this);
//   }
  
//   handleChangecountry = (country) => {
//     this.setProgress(30);
//     this.setState({ country });
//     setTimeout(() => {
//       this.setProgress(65);
//       setTimeout(() => {
//         this.setProgress(100);
//       }, 500); 
//     }, 500);
//   };

//   pageSize = 12;
//   apiKey = process.env.REACT_APP_NEWS_APP

//   state={
//     progress: 0
//   }

//   setProgress=(progress)=>{
//     this.setState({
//       progress:progress
//     })
//   }
  
//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//            <Navbar onChangeCountry={this.handleChangecountry} setProgress={this.setProgress}/>
//            <LoadingBar
//             height={3}
//         color='#f11946'
//         progress={this.state.progress}
//       />
//           <Routes>
//             <Route exact path="/general"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country={this.state.country} category="general" />} />
//             <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country={this.state.country} category="entertainment" />} />
//             <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country={this.state.country} category="business" />} />
//             <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country={this.state.country} category="health" />} />
//             <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country={this.state.country} category="science" />} />
//             <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country={this.state.country} category="sports" />} />
//             <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={this.state.country} category="technology" />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     )
//   }
// }


const App =()=> {

  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_APP

  const [country,setCountry] = useState('in')
  const [progress,setProgress] = useState(0)
  
  const handleChangecountry = (country) => {
    setProgress(30);
    setCountry(country);
    setTimeout(() => {
      setProgress(65);
      setTimeout(() => {
        setProgress(100);
      }, 500); 
    }, 500);
  };
  
  
    return (
      <div>
        <BrowserRouter>
           <Navbar onChangeCountry={handleChangecountry} country={country} setProgress={setProgress}/>
           <LoadingBar
            height={3}
        color='#f11946'
        progress={progress}
      />

          <Routes>
            <Route exact path="/general"  element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}
export default App;