// Luca 100%
import React from 'react';
import { render } from 'react-dom';
import BaseLayout from "./Components/Core/Layout";
import { HashRouter } from "react-router-dom";


render(
  <React.StrictMode>

    <HashRouter>

      <BaseLayout/>

    </HashRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
