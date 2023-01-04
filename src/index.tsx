import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SideBar from './components/SideBar';
import { AppContainer } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div>
    <AppContainer>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppContainer>
    <SideBar />
  </div>
);
