var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return <div>
      Hello, world!
      <Menu items={['foo', 'bar', 'baz']}/>
    </div>;
  },
});

var Menu = React.createClass({
  render: function() {
    var makeHandler = (i) => (evt) => console.log('clicked item:', i);
    return <ul>
      {this.props.items.map((item, i) =>
        <li onClick={makeHandler(i)}>{item}</li>
      )}
    </ul>;
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
