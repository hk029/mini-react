import { render, createElement, Component } from './react.js';

class MyComponent extends Component {
    render() {
        return <div>{this.props.title}</div>
    }

}

render(<div>
    <div style="color:red;">123</div>
    <MyComponent title="haha"></MyComponent>
    <p></p>
</div>);
