import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
)
