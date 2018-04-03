import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../layouts/index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Új lap" />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
