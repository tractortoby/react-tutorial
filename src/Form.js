import React, { Component } from "react";

class Form extends Component {
  // 第一种写法
  initialState = {
    name: "",
    job: "",
  };

  // 第二种写法
  // state = {
  //   name: "",
  //   job: "",
  // }

  // 第三种写法
  // state = {
  //   name: "",
  //   job: "",
  // };

  // 第一种写法,适用于处理state为空并利用state的name和job的值清空输入框
  state = this.initialState;

  // 第二种写法，适用于处理state为空并利用state的name和job的值清空输入框
  // temporaryState = this.state

  // 第三种写法,适用于当默认state不为空且input输入框要清空的情况
  // cleanInput = () => {
  //   this.setState({
  //     name: "",
  //     job: "",
  //   });
  // };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    // console.log(this.state)

    // 第一种写法
    this.setState(this.initialState)

    // 第二种写法
    // this.setState(this.temporaryState)

    // 第三种写法
    // this.cleanInput();
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          id="job"
          name="job"
          value={job}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
