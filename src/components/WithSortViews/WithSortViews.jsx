import React from 'react'
import PropTypes from 'prop-types'
import Popular from '../Popular/Popular'
import New from '../New/New'

function WithSortViews(Component) {
  return function (props) {
    if (props.views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      )
    }

    if (props.views >= 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      )
    }

    return <Component {...props} />
  }
}

WithSortViews.propTypes = {
  views: PropTypes.number.isRequired,
}

export default WithSortViews
