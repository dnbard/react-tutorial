# React Components Testing Examples

## Shallow Rendering

### Component contains another component

```jsx
it('should render three <Foo /> components', () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find(Foo)).to.have.length(3);
});
```

### Component have HTML node with class (id, attribute etc)

```jsx
it('should render an `.icon-star`', () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find('.icon-star')).to.have.length(1);
});
```

### Component have valid children

```jsx
  it('should render children when passed in', () => {
    const child = <div className="unique" />;
    const wrapper = shallow(<MyComponent>{child}</MyComponent>);
    expect(wrapper.contains(child)).to.equal(true);
  });
```

### Node has class

```jsx
const wrapper = shallow(<MyComponent />);
expect(wrapper.find('.my-button').hasClass('disabled')).to.equal(true);
```

### Simulate click event(or any other)

```jsx
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
```

### Check for component's `text`

```jsx
const wrapper = shallow(<div><b>important</b></div>);
expect(wrapper.text()).to.equal('important');
```

### Check for component's `html`

```jsx
const wrapper = shallow(<Bar />);
expect(wrapper.html()).to.equal(
  `<div class="foo-in-bar"></div>`
);
```

### Check for component's property

```jsx
const wrapper = shallow(<MyComponent foo={10} />);
expect(wrapper.prop('foo')).to.equal(10);
```

### Check current node tag

```jsx
const wrapper = shallow(<div/>);
expect(wrapper.name()).to.equal('div');
```

```jsx
const SomeWrappingComponent = () => <Foo />;
const wrapper = shallow(<SomeWrappingComponent />);
expect(wrapper.name()).to.equal('Foo');
```

## Full Rendering (mount)

> The recommended approach to using `mount` is to depend on a library called `jsdom`
> which is essentially a headless browser implemented completely in JS.

### All lifecycle methods are called

```jsx
  it('calls componentDidMount', () => {
    spy(Foo.prototype, 'componentDidMount');
    const wrapper = mount(<Foo />);
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });
```