import React = require('react');

export interface AboutProps {}

export interface AboutState {}

class About extends React.Component<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);
  }
  render() {
    return <div>About</div>;
  }
}

export default About;
