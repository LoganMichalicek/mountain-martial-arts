import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import * as themes from './themes/schema.json';
import { setToLS } from './utils/localStorage.ts';

const clerkPubKey = import.meta.env.VITE_DEV_REACT_APP_CLERK_PUBLISHABLE_KEY;

const Index = () => {
  setToLS('all-themes', JSON.stringify(themes));
  return (
    <App />
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <Index />
    </ClerkProvider>
  </React.StrictMode>,
)
