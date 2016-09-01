# Method binding in Components

```jsx
export default class Application extends Component {
    constructor(){
        super();

        this.state = {
            id: 1,
            data: {
                films: []
            }
        };
        this.loadNext = () => this.setState({id: this.state.id + 1}, this.load_data); //do like that
        this.loadPrevious = this.loadPrevious.bind(this); //don't do it
    }

    loadPrevious(e) {
        var new_id = this.state.id - 1;
        if (new_id >= 1) {
            this.setState({id: new_id}, this.load_data);
        }
    }
}
```