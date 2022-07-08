import React, { Component } from 'react';
import axios from 'axios';


/**
 * Mounting
 * Updating
 * Unmounting
 * 
 * 
 * ******** Mounting ********
 * -> constructor() --> method is called before anything or when component is intiated
 * -> render() --> method is required, and method is actully giving output of the HTML to the DOM
 * -> componentDidMount() --> method is called after the component rendered
 * -> getDerivedStateFromProps() --> method is called right before renderging the element of the DOM.
 * 
 * 
 * ******* Updating **********
 * -> render() --> method is required, and method is actully giving output of the HTML to the DOM
 * -> componentDidUpdate() -> method is called after the component is updated in DOM
 * -> getDerivedStateFromProps() --> this method calls once component gets updated
 * -> shouldComponentUpdate() --> method will return Boolean value tha React should countinue or not
 * -> getSanpshotBeforeUpdate() --> method will give you an access to the props and state before the update.
 * 
 * ****** Unmounting *********
 * -> componentWillUnmount --> method is called when the component is abouth to be removed from DOM.
 * 
 * 
 */
class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "name": "ankit",
      "education": "Masters",
      "salary": "1000000000",
      "post": []
    }
  }


  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        console.log("RESPONSE ==>", response);
        this.setState({ "post": response.data })
        // setPost(response.data)
      })
      .catch(error => {
        console.log("ERROR ==>", error);
      })
  }

  componentDidUpdate() {
    console.log("update", this.state)
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("before update", prevState)
  // }

  // componentWillUnmount() {
  //   console.log("unmouting")
  // }


  changeName = () => {
    this.setState({ name: "Gorakh", education: "P.HD" })
  }

  render() {
    return (
      <>
        <h1>Welcome {this.state.name} & education: {this.state.education} & salary: {this.state.salary}</h1>
        {
          this.state.post.length && this.state.post.map((data) => <li>{data.title}</li>)
        }
        <button onClick={this.changeName}>Change Name</button>
      </>
    )
  }
}

export default Welcome;