import React from 'react'
import { Route } from 'react-router-dom'

/**
* @author
* @function PrivateRoute
**/

export const PrivateRoute = (props) => {
  return(
    <Route path={props.path} exact={props.exact} component={props.component}/>
   )

 }