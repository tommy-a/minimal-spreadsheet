import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>Hellow World!</div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
