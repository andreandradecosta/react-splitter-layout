import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router';

export default function(props) {
  return (
    <Link {...props} activeClassName="active" />
  );
}
