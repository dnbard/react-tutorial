# React Overview (GlobalLogic Ukraine)

![react-complexity](http://content.screencast.com/users/dnbard/folders/Jing/media/037762b9-771a-43c6-896b-623787ced4af/2016-08-03_1119.png)

1. [Introduction to React](https://github.com/dnbard/react-tutorial/tree/master/1-introduction)  

 - Simple example
 - [Introduction to JSX](https://github.com/dnbard/react-tutorial/blob/master/jsx.md)

2. [Getting Started](https://github.com/dnbard/react-tutorial/tree/master/2-getting-started)  

 - Getting started with Webpack
 - Babel JSX + ES6 code transformation in real-life example
 - [React Starter Kit](https://github.com/kriasoft/react-starter-kit)
 - [Create React App](https://github.com/facebookincubator/create-react-app)
 - Inline styles

3. [Gulp + Mocha integration](https://github.com/dnbard/react-tutorial/tree/master/3-gulp%2Bmocha)

4. [Component lifetime cycle](https://github.com/dnbard/react-tutorial/tree/master/4-component-lifecycle)

5. [Components](https://github.com/dnbard/react-tutorial/tree/master/5-components)

 - Properties and state
 - Property validation
 - Data-binding
 
6. [Component testing](https://github.com/dnbard/react-tutorial/tree/master/6-component-testing)
 
 - [Examples](https://github.com/dnbard/react-tutorial/blob/master/6-component-testing/examples.md)

7. [Cross-component communication](https://github.com/dnbard/react-tutorial/tree/master/7-cross-component-communication)

 - Properties
 - Events
 - Handlers

8. [Animation](https://github.com/dnbard/react-tutorial/tree/master/8-animation)

9. [React Router](https://github.com/dnbard/react-tutorial/tree/master/9-react-router)

10. [Context](https://github.com/dnbard/react-tutorial/blob/master/10-context.md)

11. [Flux](https://github.com/dnbard/react-tutorial/blob/master/11-flux.md)

12. [Redux](https://github.com/dnbard/react-tutorial/blob/master/12-redux/readme.md)

 - [Introduction](https://github.com/dnbard/react-tutorial/tree/master/12-redux#about)
 - [Creating an action](https://github.com/dnbard/react-tutorial/tree/master/12-redux#creating-an-action)
 - [Creating a reducer](https://github.com/dnbard/react-tutorial/tree/master/12-redux#creating-a-reducer)
 - [Creating a root reducer](https://github.com/dnbard/react-tutorial/tree/master/12-redux#creating-a-root-reducer)
 - [Creating a store](https://github.com/dnbard/react-tutorial/tree/master/12-redux#creating-a-store)
 - [Dispatching first message](https://github.com/dnbard/react-tutorial/tree/master/12-redux#dispatching-first-message)
 - [Link component to the store](https://github.com/dnbard/react-tutorial/tree/master/12-redux#link-component-to-the-store)
 - [Async actions](https://github.com/dnbard/react-tutorial/tree/master/12-redux#async-actions)
 - [Logger](https://github.com/dnbard/react-tutorial/tree/master/12-redux#logger)

13. Tips

  - [Style Guide](https://github.com/airbnb/javascript/tree/master/react)
  - [DOM Differences](https://facebook.github.io/react/docs/dom-differences.html)


## Installation

You should have `NodeJS` version >=4 & <6
Don't forget to run `npm install` in every folder before running the examples.

## How to run examples

Usually it is enough to run `npm start` to run the example. First example doesn't use `npm` so just open `index.html` in this case.

## Additional console commands

* `gulp` - default command to start development server with debug version of application; usually an alias to `npm start`
* `gulp script:test` - run tests once
* `gulp build` - build production version of application; an alias to `npm run build`