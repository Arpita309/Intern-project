import React from 'react'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import './pay.css'
const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  
  function CardSection() {
    return (
      <label>
        Card details
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </label>
    );
  };

const  Pay =()=>{
    const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const result = await stripe.confirmCardPayment('{CLIENT_SECRET}', {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'Jenny Rosen',
          },
        }
      });
  
      if (result.error) {
        // Show error to your customer (e.g., insufficient funds)
        console.log(result.error.message);
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
          console.log('succeeded')
        }
      }
    };
   
        return(
            <React.Fragment>
                <div className='middlearea'>
                    <div className='paymentArea'>
                        <div className='paymentLeft'>
                            <div className='inr-user-block'>
                                <h2 >Select Payment Method</h2>
                                <div className="maintab-block2">
                                    <ul>
                                        <li className="maintab-list active" data-tab="main-tab-1"> Onilne Modes </li>
                                        <li className="maintab-list" id="other_tab" data-tab="main-tab-2">Other Modes</li>
                                    </ul>
                                </div>
                                <div className='paymentMethod2 active' id='main-tab-1'>
                                    <div className="paymentTabs2">
                                        <ul className="tabs">
                                            <li className="tab-link active" data-tab="tab-2">Credit / Debit Card</li>
                                            <li className="tab-link" data-tab="tab-3"> Internet Banking </li>
                                            <li className="tab-link" data-tab="tab-4"> Wallet </li>
                                            <li className="tab-link" data-tab="tab-5"> UPI </li>
                                        </ul>
                                    </div>
                                    <div className='paymentOption2'>
                                        <div class="optionClick active" data-tab="tab-2"> Credit/Debit Card </div>
                                        <div class="stripeCards2 tab-content active" id="tab-2" style={{display: 'block'}}>
                                            <div id='payment-stripe' classname='container'>
                                                <ul>
                                                <li>
                                                    <div className="form-group">
                                                        <label htmlFor="cc-number" className="control-label">Card Number</label>
                                                        <div className="input-group">
                                                        <input id="cc-number" type="tel" className="input-lg form-control cc-number" autoComplete="cc-number" placeholder="Enter Card Number" data-payment="cc-number" required=""></input>
                                                        <div className="card-green-icon" style={{display: 'none'}}><em class="icon-right"></em></div>
                                                        <div className="card-number-icon" style={{display: 'none'}}>
                                                            <img style={{display: 'none'}} id="icon-visa" src="/assets/razorpay/card_icons/icon-visa-4617d8b7df88542b0186e1980c4b6b791fe5a19389d0e6755c85a0c7e4c87486.svg" alt="Icon visa"></img>
                                                            <img style={{display: 'none'}} id="icon-master" src="/assets/razorpay/card_icons/icon-master-b5baeadd1632f6e69c7e365b5f3b0e0bb83dca36084df988e39de0b1adc87f92.svg" alt="Icon master"></img>
                                                            <img style={{display: 'none'}} id="icon-amex" src="/assets/razorpay/card_icons/icon-amex-ad026adc989a21971d005dfa1aecbc9f598387ca04d69c25997d054bef5b2546.svg" alt="Icon amex"></img>
                                                            <img style={{display: 'none'}} id="icon-diners" src="/assets/razorpay/card_icons/icon-diners-994a257d64d6bd6ec47d292ae0c0fc00ee6d969fb979ca95215ae390869e4017.svg" alt="Icon diners"></img>
                                                            <img id="icon-discover" style={{display: 'none'}} src="/assets/razorpay/card_icons/icon-discover-eb72afe6d8de91b0210c16ed4a82082e61100f82a992c7e0d88e14d45e04a36e.svg" alt="Icon discover"></img>
                                                            <img style={{display: 'none'}} id="icon-maestro" src="/assets/razorpay/card_icons/icon-maestro-fd6edd3c458a371518f5cfbc2c73ff6851a10a6dbcf64a629d9e296251d146ff.svg" alt="Icon maestro"></img>
                                                            <img style={{display: 'none'}} id="icon-rupay" src="/assets/razorpay/card_icons/icon-rupay-c6d15fb3c2b8a49d442b320dd90c128defacd3b6c6ab841d919eb55091093129.svg" alt="Icon rupay"></img>
                                                            <img style={{display: 'none'}} id="icon-dinersclub" src="/assets/razorpay/card_icons/icon-diners club-994a257d64d6bd6ec47d292ae0c0fc00ee6d969fb979ca95215ae390869e4017.svg" alt="Icon diners club"></img>
                                                            <img style={{display: 'none'}} id="icon-jcb" src="/assets/razorpay/card_icons/icon-jcb-c831358753a12dcb0e0f69dbaa7cb589c189f36b49109618c210d2310872c94e.svg" alt="Icon jcb"></img>
                                                            <img style={{display: 'none'}} id="icon-unionpay" src="/assets/razorpay/card_icons/icon-unionpay-45acfb6027f85f7482694d7a289c44d8a688b6764d42adac4874350ea0642fda.svg" alt="Icon unionpay"></img>
                                                            <img style={{display: 'none'}} id="icon-mastercard" src="/assets/razorpay/card_icons/icon-mastercard-b5baeadd1632f6e69c7e365b5f3b0e0bb83dca36084df988e39de0b1adc87f92.svg" alt="Icon mastercard"></img>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                        <label>Name on Card</label> 
                                                        <input id="cc-holdername" type="text" name="cardholder_name" data-stripe="name" data-rule-required="true" maxLength="50" placeholder="Name on Card" required=""></input>
                                                    </li>
                                                    <li className="smallView">
                                                        <div className="form-group">
                                                            <label>Card Expiry</label>
                                                            <div className="input-group">
                                                            <input id="cc-exp" type="tel" class="input-lg form-control cc-exp" autocomplete="cc-exp" placeholder="MM / YYYY" data-payment="cc-exp" required=""></input>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="smallView mr-0">
                                                        <div className="form-group">
                                                            <label>CVV</label>
                                                            <div className="input-group">
                                                            <input id="cc-cvc" type="password" class="input-lg form-control cc-cvc" autoComplete="off" placeholder="CVV" data-payment="cc-cvc" required=""></input>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <dir className="payment_cards_icons"><img src="/assets/razorpay/card-types-c02f9e0bf70bf3e7f49d03c8b6fbd3f330885033d261ca92afb7c3032153ccdd.png" alt="Card types"></img></dir>
                                                <div className="action-block">
                                                    <div className="custom-checkbox">
                                                    <label>
                                                        <input id="razorpay_saved" type="checkbox"></input><span></span> Securely save this card for a faster checkout next time.
                                                    </label>
                                                    </div>
                                                    <div className="paysecurely mobile-view-btn" id="card_payment_pay_now"><button type="button" onClick={handleSubmit}>Pay Now</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </React.Fragment>
        )
    
}
export default Pay;