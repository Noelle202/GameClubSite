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
        <button onClick={this.handleClick("hello")}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>
        <button onClick={this.handleClick("async-dadjoke")}>
          {loading ? "Loading..." : "Call Async Lambda"}
        </button>
        <br />
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
          <nav>
            {/* 네비게이션 바 */}
            <ul>
              <li>
                <a href="/">문서</a>
              </li>
              <li>
                <a href="/repository">저장소</a>
              </li>
              <li>
                <a href="/developer-docs">개발자 문서</a>
              </li>
            </ul>
          </nav>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            사이트를 수정하고 저장하면 다시 로드됩니다.
          </p>
          <LambdaDemo />
        </header>
      </div>
    );
  }
}

export default App;