import React, { Component } from "react";

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.items = ["David", "John", "Joe", "Leo", "Edom"];
    this.state = {
      suggestion: [],
      text: ""
    };
    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(e) {
    const value = e.target.value;
    let suggestion = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestion = this.items.sort().filter(v => {
        return regex.test(v);
      });
    }
    this.setState(() => ({
      suggestion,
      text: value
    }));
  }

  renderSuggestion() {
    const { suggestion } = this.state;
    if (suggestion.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestion.map(item => (
          <li onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }

  suggestionSelected(value) {
    this.setState(() => ({
      suggestion: [],
      text: value
    }));
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <input value={text} onChange={this.onTextChange} type="text" />
        {this.renderSuggestion()}
      </div>
    );
  }
}

export default AutoComplete;
