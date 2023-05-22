import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = (api) => (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then((response) => response.json())
      .then((json) => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        {/* "Call Lambda" 버튼 */}
        <button onClick={this.handleClick("hello")}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>

        {/* "Call Async Lambda" 버튼 */}
        <button onClick={this.handleClick("async-dadjoke")}>
          {loading ? "Loading..." : "Call Async Lambda"}
        </button>
        
        <br />
        
        {/* API 응답 메시지 */}
        <span>{msg}</span>
      </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* 로고 이미지 */}
          <img src={logo} className="App-logo" alt="logo" />

          {/* 안내 문구 */}
          <p>
            사이트트트<code>src/App.js</code> and save to reload.
          </p>

          {/* LambdaDemo 컴포넌트 */}
          <LambdaDemo />
        </header>
      </div>
    );
  }
}

export default App;