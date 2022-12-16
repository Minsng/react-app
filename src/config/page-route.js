import React from 'react';
import {Redirect} from 'react-router';

import Home from './../pages/home.js';
import About from './../pages/about.js';
import Contact from './../pages/contact.js';

const routes = [
    {
        path: '/react/' ,
        exact:true,
        component: () => <Redirect to="/react/home" />
    }, 
   {
       path: '/react/home' ,
       component: () => <Home />
   },
   {
    path: '/react/about' ,
    component: () => <About />
    },
    {
        path: '/react/contact' ,
        component: () => <Contact />
    }
];

export default routes;