import React from 'react';
import {Redirect} from 'react-router';

import Home from './../pages/Home.js';
import About from './../pages/About.js';
import Visual from './../components/Visual.js';
import Contact from './../pages/Contact.js';

const routes = [
    {
        path: '/' ,
        exact:true,
        component: () => <Redirect to="/home" />
    }, 
   {
       path: '/home' ,
       component: () => <Home />
   },
   {
    path: '/about' ,
    component: () => <About />
    },
    {
        path: '/contact' ,
        component: () => <Contact />
    }
    //빌드시
//     {
//         path: '/react/' ,
//         exact:true,
//         component: () => <Redirect to="/react/home" />
//     }, 
//    {
//        path: '/react/home' ,
//        component: () => <Home />
//    },
//    {
//     path: '/react/about' ,
//     component: () => <About />
//     },
//     {
//         path: '/react/contact' ,
//         component: () => <Contact />
//     }
];

export default routes;