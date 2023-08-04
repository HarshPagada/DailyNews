import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// export class Navbar extends Component {
// render() {
//     return (
//         <div className='sticky-top'>
//             <nav className="navbar navbar-expand-lg bg-warning ">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="">Daily-<img src="https://cdn-icons-png.flaticon.com/512/21/21601.png" style={{ width: '40px' }} alt="logo" /></Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link className="nav-link fw-semibold" aria-current="page" to="">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link fw-semibold" to="">About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link fw-semibold" to="/general">General</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link fw-semibold" to="/entertainment">Entertainment</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link fw-semibold" to="/business">Business</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link fw-semibold" to="/health">Health</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link fw-semibold" to="/science">Science</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link fw-semibold" to="/sports">Sports</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link fw-semibold" to="technology">Technology</Link>
//                             </li>
//                         </ul>

//                         <div className="container-sm d-flex justify-content-end align-items-center">
//                             <label htmlFor="inputState" className="form-label text-danger fw-semibold">select country :</label>
//                             <select id="inputState" className="form-select w-25 mx-1" value={this.props.country} 
//                             onChange = {(e) => {
//                                 const country = e.target.value;
//                                 this.props.onChangeCountry(country);
//                             }}>
//                                 <option value='in'>India</option>
//                                 <option value='us'>Usa</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }
// }

const Navbar=(props)=> {
        return (
            <div className='sticky-top'>
                <nav className="navbar navbar-expand-lg bg-warning ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="">Daily-<img src="https://cdn-icons-png.flaticon.com/512/21/21601.png" style={{ width: '40px' }} alt="logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold" to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold" to="technology">Technology</Link>
                                </li>
                            </ul>
    
                            <div className="container-sm d-flex justify-content-end align-items-center">
                                <label htmlFor="inputState" className="form-label text-danger fw-semibold">select country :</label>
                                <select id="inputState" className="form-select w-25 mx-1" value={props.country} 
                                onChange = {(e) => {
                                    const country = e.target.value;
                                    props.onChangeCountry(country);
                                }}>
                                    <option value='in'>India</option>
                                    <option value='us'>Usa</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

export default Navbar
