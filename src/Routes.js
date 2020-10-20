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

import RequestAppointment from './pages/offers/RequestAppointment'
import ConfirmAppointment from './pages/offers/ConfirmAppointment'

import ReceivedCollaborationsPage from './components/collaborations/ReceivedCollaborations'
import CollaborationDetailPage from './components/collaborations/CollaborationDetail'

const Routes = () => 
  <Switch>
    
   
    <Route path="/register">
      <RegisterPage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/collaborations/me">
      <ReceivedCollaborationsPage />
    </Route>
    <Route path="/collaborations/:id">
      <CollaborationDetailPage />
    </Route>
    <Route path="/appointment/Request">
      <RequestAppointment />
    </Route>
    <Route path="/appointment/confirmed">
      <ConfirmAppointment />
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
