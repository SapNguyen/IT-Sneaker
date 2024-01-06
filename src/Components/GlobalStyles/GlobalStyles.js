import './GlobalStyles.scss';
import PropTypes from 'prop-types'
import React from 'react';

function GlobalStyles({ children }) {
    return React.Children.only(children);//chỉ cho  phép truyền 1 children
}

GlobalStyles.prototype = {
    children: PropTypes.node.isRequired,
}

export default GlobalStyles;
