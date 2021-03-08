import React from 'react'
import PropTypes from 'prop-types'

function Video(props) {
  return (
    <div className="item item-video">
      <iframe
        title="uniq"
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}

Video.propTypes = {}

export default Video
