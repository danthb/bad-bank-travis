import ReactDOM from 'react-dom';
import App from './App'
import AuthProvider from './Components/Auth/AuthProvider';
import './index.css';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>
  ,
    document.getElementById('root')
  );

  /* reportWebVitals(); */

