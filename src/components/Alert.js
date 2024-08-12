import React from "react";

function Alert(error){
  return (
    error !== null && (
        <div className='container'>
            <div className={`alert alert-${error.type}`}>
                {error.msg}
            </div>
        </div>
    )
)
}
export default Alert

// export class Alert extends Component {
//   render() {
//     return (
//         this.props.error !== null && (
//             <div className='container'>
//                 <div className={`alert alert-${this.props.error.type}`}>
//                     {this.props.error.msg}
//                 </div>
//             </div>
//         )
//     )
//   }
// }
// export default Alert
