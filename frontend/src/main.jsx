import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <StoreContextProvider>    {/*This setup allows you to provide the context to the entire app, making it accessible to all components that are wrapped by the provider*/}
        <App />
    </StoreContextProvider>
    </BrowserRouter>
)
