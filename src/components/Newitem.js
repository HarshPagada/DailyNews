import React, { Component } from 'react'
import PropTypes from 'prop-types'



// export class Newitem extends Component {

//   render() {
//     let { title, discription,imageurl,url,author,date,source } = this.props;
//     return (
//       <div style={{width: ""}} className=''>
//         <span className="badge text-bg-danger">{source}</span>
//         <div className="card" style={{width: "18rem"}}>
//           <img src={!imageurl ? "https://png.pngtree.com/thumb_back/fh260/background/20210831/pngtree-soil-plant-growth-background-in-sapling-palm-image_771612.jpg" : imageurl}  className="card-img-top" style={{height: "200px"}} alt="image"/>
//             <div className="card-body">
//               <h5 className="card-title">{title}...</h5>
//               <p className="card-text">{discription}...</p>
//               <p className="card-text"><small className="text-decondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
//               <a href={url} target='_blank' className="btn btn-ms btn-primary">Read More...</a>
//             </div>
//         </div>
//       </div>
//     )
//   }
// }


const Newitem = (props) => {
  let { title, discription, imageurl, url, author, date, source } = props;
  return (
    <div style={{ width: "" }} className=''>
      <span className="badge text-bg-danger">{source}</span>
      <div className="card" style={{ width: "18rem" }}>
        <img src={!imageurl ? "https://png.pngtree.com/thumb_back/fh260/background/20210831/pngtree-soil-plant-growth-background-in-sapling-palm-image_771612.jpg" : imageurl} className="card-img-top" style={{ height: "200px" }} alt="image" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{discription}...</p>
          <p className="card-text"><small className="text-decondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={url} target='_blank' className="btn btn-ms btn-primary">Read More...</a>
        </div>
      </div>
    </div>
  )
}

export default Newitem

