import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css';
import favicon from '../data/favicon.ico';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title='Új lap'>
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
