import React, { Component } from 'react';
import Markdown from 'react-markdown';
import Text from './about.md';

class About extends Component {
  constructor(props) {
    super(props)

    this.state = { text: null }
  }

  componentWillMount() {
    fetch(Text).then((response) => response.text()).then((text) => {
      this.setState({ text: text })
    })
  }
    render() {
      return (
        <Markdown escapeHtml={false} source={this.state.text} />
    );
  }
}

export default About;