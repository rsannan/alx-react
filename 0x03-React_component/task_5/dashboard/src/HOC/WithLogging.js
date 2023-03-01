import React from "react";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function mount(wrappedComponent) {
  class Hoc extends React.Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(wrappedComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(
        `Component ${getDisplayName(wrappedComponent)} is going to unmount`
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  Hoc.displayName = `WithLogging(${getDisplayName(wrappedComponent)})`;
  return Hoc;
}

export default mount;
