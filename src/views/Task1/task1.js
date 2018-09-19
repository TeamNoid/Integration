// import React, { Component } from "react";
// import Axios from "axios";

// class Task1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {}
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("http://197.136.81.99:8082/test/api/dataSets/eVrg3w7MAk0", {
//         auth: {
//           username: "iHRIS",
//           password: "1234"
//         }
//       })
//       .then(response => {
//         this.successShow(response);
//       })
//       .catch(error => {
//         this.errorShow(error);
//       });
//   }

//   successShow(response) {
//     this.setState({
//       person: response.data
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Welcome to React</h2>
//         <h3>{JSON.stringify(this.state.person.data)}</h3>

//         <pre>{JSON.stringify(this.state.person.data)}</pre>

//         <div>{this.member}</div>
//       </div>
//     );
//   }
// }

// export default Task1;
