import { Box, Button } from "@mui/material";
import React, { Component, ErrorInfo } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box>
          <h2>{"Oops, something went wrong!"}</h2>
          <Button onClick={() => this.setState({ hasError: false })}>
            {"Try again?"}
          </Button>
        </Box>
      );
    }

    // Render children
    return this.props.children;
  }
}

export { ErrorBoundary };
