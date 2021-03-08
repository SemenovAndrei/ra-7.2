import React from 'react'
import PropTypes from 'prop-types'
import Video from '../Video/Video'
import Article from '../Article/Article'

function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case 'video':
        return <Video {...item} />

      case 'article':
        return <Article {...item} />

      default:
        return null
    }
  })
}

List.propTypes = {}

export default List
