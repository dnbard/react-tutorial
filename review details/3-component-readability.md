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
