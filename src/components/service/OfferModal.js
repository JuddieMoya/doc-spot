import React, { useState } from 'react'
import Modal from 'components/Modal'
import { useToasts } from 'react-toast-notifications'

import { createRef, createOffer } from 'actions '

const OfferModal = ({service, auth}) => {

  const { addToast } = useToasts()
  const [ offer, setOffer ] = useState({
    fromUser: '',
    toUser: '',
    service: '',
    status: 'pending',
    price: 0,
    time: 0,
    note: ''
  })

  const handleChange = ({ target: {value, name}}) => {
    if (name === 'time') {
      const price = Math.round(value * service.price * 100) / 100
      return setOffer({...offer, [name]: value, price})
    }

    return setOffer({...offer, [name]: value})
  }

  const handleSubmit = (closeModal) => {
    const offerCopy = { ...offer }

    offerCopy.fromUser = createRef('profiles', auth.user.uid)
    offerCopy.toUser = createRef('profiles', service.user.id)
    offerCopy.service = createRef('services', service.id)
    offerCopy.time = parseInt(offer.time, 10)

    createOffer(offerCopy)
      .then(_ => {
        closeModal()
        addToast('Offer was succefuly created! (:', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 3000 })
      }, (error) => {
        console.log(error)
      })

  }


  return (
    <Modal 
      onModalSubmit={handleSubmit}
      openButtonText="Request an appointment">
      <div className="field">
        <input
           onChange={handleChange}
           name="note"
           className="input is-large"
           type="text"
           placeholder="name"
           max="5"
           min="0"/>
        <p className="help"></p>
      </div>
     
      <div className="field">
        <input
           onChange={handleChange}
           name="note"
           className="input is-large"
           type="text"
           placeholder="date requesting appointment"
           max="5"
           min="0"/>
        <p className="help"></p>
      </div>
      <div className="field">
        <input
           onChange={handleChange}
           name="note"
           className="input is-large"
           type="text"
           placeholder="what kind of doctor do you need?"
           max="5"
           min="0"/>
        <p className="help"></p>
      </div>
      <div className="field">
        <input
           onChange={handleChange}
           name="time"
           className="input is-large"
           type="number"
           placeholder="how many people?"
/>
        <p className="help">Co-pay</p>
      </div>
      <div className="service-price has-text-centered">
        <div className="service-price-title">
          {service.user && `Uppon acceptance ${service.user.fullName}" will charge you 10 copay:`}
        </div>
        <div className="service-price-value">
          <h1 className="title">{offer.price}$</h1>
        </div>
      </div>
    </Modal>
  )
}


export default OfferModal