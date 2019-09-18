import React from 'react';
import { Redirect } from "react-router-dom";
import { Route } from 'react-router-dom';

// lazy load all the views
const Dashboard = React.lazy(() => import('./pages/Dashboard'));


const routes = [
  // auth and account

  // other pages
  { 
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    roles: ['Admin'], title: 'Dashboard' 
  },
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
  },
  
]

export { routes };