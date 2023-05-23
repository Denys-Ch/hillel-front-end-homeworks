import { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;
        return hasError ? <h1>Something went wrong!</h1> : children;
    }
}