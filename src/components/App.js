import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home'
import RouteDrawer from './RouteDrawer'
import Calculator from './Calculator/Calculator';
import ToDoTracker from './ToDoTracker/ToDoTracker';
import Videos from './Videos/components/Videos';
import WikiSearch from './WikiSearch/components/WikiSearch'
import Navbar from './Navbar';

const App = () => {
  const links=[
              {key: 1, name:"Home" , path:"/", element:<Home/>},
              {key: 2, name:"Calculator" , path:"/calculator", element:<Calculator/>},
              {key: 3, name:"ToDoTracker" , path:"/todotracker", element:<ToDoTracker/>},
              {key: 4, name:"Videos" , path:"/videos", element:<Videos/>},
              {key: 5, name:"WikiSearch" , path:"/wikisearch", element:<WikiSearch/>},
            ];

  return(
    <div>
      <RouteDrawer links={links} />
      <Routes>
        {links.map(link => {
          return <Route key={link.key} path={link.path} element={link.element} />

        })}

      </Routes>
    </div>
  );

}

export default App;
