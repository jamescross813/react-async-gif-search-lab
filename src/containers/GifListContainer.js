import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

    state = {
            info: []
    }

    render(){
        return(
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList info={this.state.info} />
            </div>
        )
    }

    fetchGIFs = (query="") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=GIpbaTtbLX8OGS9pjMXiJ40yBsQQTChu&rating=g`)
          .then(res => res.json())
          .then(({data}) => {
            this.setState({ info: data.map( info => ({ info: info.images.original.url }) ) })
          })
      }

      componentDidMount() {
        this.fetchGIFs()
      }
}

export default GifListContainer