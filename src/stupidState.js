class State {
  constructor() {
    this.state = {};
    this.setState = this.setState.bind(this);
  }
  setState(newState) {
    this.state = Object.assign({}, this.state, newState);
  }
}
export default State;
