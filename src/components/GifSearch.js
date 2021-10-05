import React from 'react'

class GifSearch extends React.Component{

    state = {
        input: ""
    }

    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <label>Search</label>
            <input type="text" value={this.state.input} onChange={event=>this.handleChange(event)}/>
        </form>
        )
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.fetchGIFs(this.state.input)
        this.setState({
            input: ""
        })
    }
}

export default GifSearch