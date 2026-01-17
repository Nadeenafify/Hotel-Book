
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';
import { AuthProvider } from './contextApi/AuthContext';
import { Toaster } from 'react-hot-toast';
import { FavouriteProvider } from './contextApi/FavouriteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider> 
    <FavouriteProvider>
    <App />
    <Toaster position="top-right" reverseOrder={false} />
    </FavouriteProvider>
    </AuthProvider> 
);


