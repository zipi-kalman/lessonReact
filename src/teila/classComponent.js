import React from 'react'

//1
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// export default Welcome


// //2
// export class User extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, </h1>
//         <h2>{this.props.user}</h2>
//       </div>
//     );
//   }
// }

// 3
// export class User extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       user: "tehila"
//     , age: 21 };
//   }
//    a="aaa"

//   alertName = () => (
//     alert(this.state.user)
//   )

//   render() {
//     return (
//       <div>
//         <h1>Hello, </h1>
//         <h2>{this.state.user}</h2>
//         <h2>{this.state.age}</h2>
//         <p>{this.a}</p>

//         <input type="text" value={this.state.user} onChange={(e)=>this.setState({user:e.target.value })}/>
//         <button onClick={this.alertName}>alert user name</button>
//       </div>
//     );
//   }
// }


// 4
//lifecycle-מחזור חיים של פקד 
export class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      m: 0,
      countries: null
    };
  }

  componentWillUnmount() {
    this.setState({ m: 0 })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.m === 5)
      this.setState({ m: 0 })

  }

  componentDidCatch(error, info) {
    this.setState({
      msg: `Error:error`
    })
  }

  async componentDidMount() {
    debugger
    const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000')
    const countries = await response.json()
    this.setState({ countries: countries })
  }

  tick = () => {
    this.setState({ m: this.state.m + 1 })
  }
  render() {
    const { m } = this.state;
    return (
      <div>
        <button onClick={this.tick}>plus</button>
        <label>{m}</label>
      </div>
    )
  }
}
