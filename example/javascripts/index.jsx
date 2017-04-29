import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import NavLink from './components/NavLink';
import StandardHorizontalLayout from './components/StandardHorizontalLayout';
import StandardVerticalLayout from './components/StandardVerticalLayout';
import LayoutWithMinimalSize from './components/LayoutWithMinimalSize';
import PercentageLayout from './components/PercentageLayout';
import NestedLayout from './components/NestedLayout';
import TogglableSidebarLayout from './components/TogglableSidebarLayout';
import '../stylesheets/index.css';

function NoMatch(location) {
  return (
    <div className="not-found">
      <h2>Not Found</h2>
      <h3>No match for <code>{location.pathname}</code></h3>
      <p>Please one of links on the left.</p>
    </div>
  );
}

render(
  <BrowserRouter>
    <div>
      <header>
        <h1>React Splitter Layout</h1>
        <p>A split layout for React and modern browsers.</p>
      </header>
      <div className="main">
        <nav className="navigation-bar">
          <ul className="navigation">
            <li><NavLink to="/standard-horizontal">Standard Horizontal</NavLink></li>
            <li><NavLink to="/standard-vertical">Standard Vertical</NavLink></li>
            <li><NavLink to="/minimal-size">Pane Minimal Size</NavLink></li>
            <li><NavLink to="/percentage">Width in Percentage</NavLink></li>
            <li><NavLink to="/nested">Nested Layout</NavLink></li>
            <li><NavLink to="/sidebar">Sidebar</NavLink></li>
          </ul>
        </nav>
        <div className="child-content">
          <Route exact path="/" component={StandardHorizontalLayout} />
          <Route path="/standard-horizontal" component={StandardHorizontalLayout} />
          <Route path="/standard-vertical" component={StandardVerticalLayout} />
          <Route path="/minimal-size" component={LayoutWithMinimalSize} />
          <Route path="/percentage" component={PercentageLayout} />
          <Route path="/nested" component={NestedLayout} />
          <Route path="/sidebar" component={TogglableSidebarLayout} />
          <Route component={NoMatch} />
        </div>
      </div>
      <footer>Licensed under MIT</footer>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
