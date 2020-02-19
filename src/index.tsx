import React from "react";
import ReactDOM from "react-dom";

interface State {
  messageVisible: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    messageVisible: false
  };

  toggleMessage = () =>
    this.setState(({ messageVisible }) => ({
      messageVisible: !messageVisible
    }));

  render() {
    const { messageVisible } = this.state;

    return (
      <>
        <strong>React is apparently working!</strong>
        <br />
        <button onClick={this.toggleMessage}>Test state</button>
        <br />
        {messageVisible && "A wild message appears."}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
