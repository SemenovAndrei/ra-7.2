import React from 'react'
import PropTypes from 'prop-types'

function Video(props) {
  return (
    <div className="item item-video">
      <iframe
        title="uniq"
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
}

export default Video
