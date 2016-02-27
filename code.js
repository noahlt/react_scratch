var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return <div>
      Hello, hello, hello!
      <Menu items={['foo', 'bar', 'baz']}/>
    </div>;
  },
});

var Menu = React.createClass({
  render: function() {
    var makeHandler = (i) => (evt) => console.log('clicked item:', i);
    return <ul>
      {this.props.items.map((item, i) =>
        <li onClick={makeHandler(item)}>{item}</li>
      )}
    </ul>;
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
