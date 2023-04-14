import React from 'react'
import Layout from '../components/layout'
import CustomPayPal from '../components/PayPalButtonWrapper/CustomPayPal'

const customPayment = () => {
  return (
    <Layout>
        <div className='flex justify-center items-center'>$470</div>
        <CustomPayPal price='470' />
    </Layout>
  )
}

export default customPayment