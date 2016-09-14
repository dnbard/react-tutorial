# Readability

## First Example

```jsx
return <Link to={`/people/${parseInt(this.props.params.id) + 1}`}><button>Next</button></Link>
```

Better to read:
```jsx
const id = parseInt(this.props.params.id) + 1;

<Link to={`/people/${id}`}>
  <button>Next</button>
</Link>
```

## Second Example

```jsx
return (
  <div className={styles.person_container}>
    {
      Object.keys(this.state)
        .filter(key => this.getDisplayStateProp(key))
        .map(key => <div className={styles.person_prop} key={key}> {this.getDisplayStateProp(key)} : {this.state[key]} </div>)
    }
  </div>
);
```

Better to read:

```jsx
const propertiesComponents = Object.keys(this.state)
  .filter(key => this.getDisplayStateProp(key))
  .map(key => <div className={styles.person_prop} key={key}> {this.getDisplayStateProp(key)} : {this.state[key]} </div>);

return (
  <div className={styles.person_container}>{propertiesComponents}<div>
);
```
