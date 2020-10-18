import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/Home'

import ProfilePage from './pages/Profile'
import ServicesPage from './pages/Services'
import ServiceDetailPage from './pages/ServiceDetail'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import SecretPage from './pages/Secret'

const Routes = () => 
  <Switch>
    <Route path="/secret">
      <SecretPage />
    </Route>
    <Route path="/register">
      <RegisterPage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/services/:serviceId">
      <ServiceDetailPage />
    </Route>
    <Route path="/services">
      <ServicesPage />
    </Route>
    <Route path="/profile">
      <ProfilePage />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>

export default Routes