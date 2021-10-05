import React from 'react'
import GifListContainer from '../containers/GifListContainer'
   

    const GifList = props => {
        // {console.log(props)}
        return (
            <div>
                {props.info.map(gif => <img src={gif.info} />)}
            </div>
        )
    }



export default GifList
