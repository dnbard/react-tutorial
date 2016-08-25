# Hometask #1

Create web application using React to serve data from [http://swapi.co](http://swapi.co/)

* User should see person's details available through `api/people/:id` endpoint
* User should be able to move to different person's details page using `previous`, `next` navigation buttons
* A list of films should be displayed at the same page
  * this list are going to be different for every person (it can be found in `films` field of `api/people/:id` response)
  * film details should be fetched differently through `api/films/:id` endpoint
  * every film entity should be a separate component
* Any type of CSS styling (inline, plain CSS, preprocessing) could be used for this task
