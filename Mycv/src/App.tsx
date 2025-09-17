import React from 'react';
import './styles/App.css'
import AppRoutes from './routes/AppRoutes.tsx'
import Layout from './layout/Layout.tsx';

function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  )
}

export default App
