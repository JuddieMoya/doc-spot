import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/Home'

import ProfilePage from './pages/Profile'
import ServicesPage from './pages/Services'
import ServiceDetailPage from './pages/ServiceDetail'
import LoginPage from './pages/Login'
import LogoutPage from './pages/Logout'
import RegisterPage from './pages/Register'

import DocMapPage from './pages/DocMap'
import ServiceCreatePage from './pages/services/ServiceCreate'
import UserServicesPage from './pages/services/UserServices'

import ReceivedOffers from './pages/offers/ReceivedOffers'
import SentOffers from './pages/offers/SentOffer'

import ReceivedCollaborationsPage from './components/collaborations/ReceivedCollaborations'
import CollaborationDetailPage from './pages/collaborations/CollaborationsDetail'

const Routes = () => 
  <Switch>
    
   
    <Route path="/register">
      <RegisterPage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/logout">
      <LogoutPage />
    </Route>
    <Route path="/collaborations/me">
      <ReceivedCollaborationsPage />
    </Route>
    <Route path="/collaborations/:id">
      <CollaborationDetailPage />
    </Route>
    <Route path="/offers/sent">
      <SentOffers/>
    </Route>
    <Route path="/offers/Received">
      <ReceivedOffers />
    </Route>
    <Route path="/services/me">
      <UserServicesPage />
    </Route>
    <Route path="/services/new">
      <ServiceCreatePage />
    </Route>
    <Route path="/Doc/Map">
      <DocMapPage />
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
