import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/Home'

import ProfilePage from './pages/Profile'
import ServicesPage from './pages/Services'
import ServiceDetailPage from './pages/ServiceDetail'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'


import ServiceCreatePage from './pages/services/ServiceCreate'
import UserServicesPage from './pages/services/UserServices'

import SentOffersPage from './pages/offers/SentOffers'
import ReceivedOffersPage from './pages/offers/ReceivedOffers'

const Routes = () => 
  <Switch>
    
   
    <Route path="/register">
      <RegisterPage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/offers/sent">
      <SentOffersPage />
    </Route>
    <Route path="/offers/received">
      <ReceivedOffersPage />
    </Route>
    <Route path="/services/me">
      <UserServicesPage />
    </Route>
    <Route path="/services/new">
      <ServiceCreatePage />
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
