# Flux & MVC


## PubSub

**PubSub pattern** is often used in many MVC application to introduce communication between defferent parts of applications.

![PubSub](https://s3.amazonaws.com/media-p.slid.es/uploads/contra/images/179840/pubsub.png)


## MVC

**MVC** is a legendary pattern that has been used for various projects since 1976. It has stood the test of time and most of the biggest projects still use it today. **Why even try to replace it?**

The main problem is **the bidirectional communication**, where one change can loop back and have cascading effects across the codebase (making things **very complicated to debug and understand**). In general the flow inside the MVC pattern is not well defined.

![MVC](http://image.slidesharecdn.com/flux-150703233217-lva1-app6892/95/about-flux-4-638.jpg?cb=1435966385)


## Flux

How does **Flux** solve the problem of the bidirectional communication? By forcing **an unidirectional flow of data** between a system’s components. Flux is all about controlling the flow inside the app — and making it as simple to understand as possible.

![flux](https://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png)

Flux has four roles: **actions, stores, the dispatcher and views**. Their responsibilities can be defined as following:

* **Actions** are simple objects with a type property and some data.

```js
{
  “type”: “IncreaseCount”,
  “local_data”:{
    “delta”: 1
  }
}
```

* **Stores** contain the application’s state and logic. The best abstraction is to think of stores as managing a particular domain of the application. They **aren’t the same as models in MVC** since models usually try to model single objects, while stores in Flux can store anything.

* **The Dispatcher** acts as a central hub.

* **Views** are controller-views, also very common in most GUI MVC patterns. The views are usually coded in [React](https://facebook.github.io/react/).

![complex-flux](http://image.slidesharecdn.com/flux-150703233217-lva1-app6892/95/about-flux-10-638.jpg?cb=1435966385)