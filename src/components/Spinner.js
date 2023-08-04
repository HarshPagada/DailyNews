import React, { Component } from 'react'
import loading from './loading.gif'

// export default class Spinner extends Component {
//     render() {
//         return (
//             <div className='text-center'>
//                 <img style={{height:"80px"}} src={loading} alt='loading' />
//             </div>
//         )
//     }
// }


const Spinner =()=>{
        return (
            <div className='text-center'>
                <img style={{height:"80px"}} src={loading} alt='loading' />
            </div>
        )
}

export default Spinner


