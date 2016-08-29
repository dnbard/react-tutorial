# Context

Context should be used when you want to pass same properties down to the several levels of components.

> Context is an experimental feature. The API is likely to change in future releases.

## Passing properties automatically through components tree

```jsx
class Button extends React.Component {
  constructor(){
    super();
    
    this.contextTypes = {
      color: React.PropTypes.string
    };
  }

  render() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
}

class MessageList extends React.Component {
  constructor(){
    super();
    
    this.childContextTypes = {
      color: React.PropTypes.string
    }
  }

  getChildContext() {
    return {color: "purple"};
  }

  render() {
    const children = this.props.messages.map((message) =>
      <Message text={message.text} />
    );
    return <div>{children}</div>;
  }
}
```

By adding `childContextTypes` and `getChildContext` to `MessageList` (the context owner),
React passes the information down automatically and any component in the subtree (in this case, `Button`)
can access it by defining `contextTypes`.

## Context in lifecycle methods

If `contextTypes` is defined within a component, the following lifecycle methods will receive a context object:

```jsx
function componentWillReceiveProps(
  object nextProps, object nextContext
)

function shouldComponentUpdate(
  object nextProps, object nextState, object nextContext
)

function componentWillUpdate(
  object nextProps, object nextState, object nextContext
)

function componentDidUpdate(
  object prevProps, object prevState, object prevContext
)
```

## Context in stateless(functional) components

Stateless functional components are also able to reference context if `contextTypes` is defined as a property of the function:

```jsx
const Button = (props, context) =>
  <button style={{background: context.color}}>
    {props.children}
  </button>;

Button.contextTypes = { color: React.PropTypes.string };
```

## Updating context

The `getChildContext` function will be called when the state or props changes.
In order to update data in the context, trigger a local state update with `this.setState`.
This will trigger a new context and changes will be received by the children.

## How to write components without context

> Just as global variables are best avoided when writing clear code, you should **avoid using context in most cases**.
> Using context makes your components more coupled and less reusable, 
 >because they **behave differently depending on where they're rendered**.
> (Facebook)  

```jsx
import ColorsProvider from '../providers/colors';
import Types from '../enums/types';

const Button = ({children}) =>
  <button style={{background: ColorsProvider.get(Types.Button)}}>
    {children}
  </button>;

export default Button;
```
