import React from "react"
class MyComponent extends React.Component {
    state = {
        count: 0,
        date: new Date(),
    }
    componentDidMount() {
        const {count} = this.state;
        document.title = `Clicked ${count} times`;
        setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        const {count} = this.state;
        document.title = `Clicked ${count} times`;
    }

    addCount = () => {
        this.setState(({count}) => ({
            count: count + 1,
        }));
    }

    tick = () => {
        this.setState(() => ({
            date: new Date(),
        }))
    }

    render() {
        const {date} = this.state;
        return(
          <div>
            <p>{date.toLocaleTimeString()}</p>  
            <button type="button" onClick={this.addCount}>Click Me</button>
          </div>
        )
    }
}

export default MyComponent;