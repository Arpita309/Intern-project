import React,{useState} from 'react'
import {useStripe, useElements,CardCvcElement,CardExpiryElement,CardNumberElement} from '@stripe/react-stripe-js';
import './pay.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {ApiPost} from '../../api'

var razorpay = new window.Razorpay({  key: 'rzp_test_abGPkyLg8rUCDC',      image: 'https://i.imgur.com/n5tjHFD.png',});
razorpay.once('ready', function(response) {  console.log(response.methods);})
const  Pay =()=>{
  const stripe = useStripe();
  const elements = useElements();
  const [name,setName]=useState();
  const [tab,setTab]=useState('tab-2');
  const [mainTab,setMainTab]=useState('main-tab-1');
  const [detail,setDetail]=useState(false)
  const [value,setValue]=useState();
  const [id,setId]=useState();
  function razorpay_payment_by_netbanking() {
    
    ApiPost("razorpay").then(res=>{
       
    razorpay.createPayment({
        
        amount: res.data.amount,  
        email: 'gaurav.kumar@example.com',
        contact: '9123456780',
         order_id: res.data.id, 
          method: 'netbanking',  
          bank:value
    })
    
    

    
})
}
function razorpay_payment_by_wallet() {
    
    ApiPost("razorpay").then(res=>{
        console.log(res)
    razorpay.createPayment({
        
        amount: res.data.amount,  
        email: 'gaurav.kumar@example.com',
        contact: '9123456780',
         order_id: res.data.id, 
          method: 'wallet',  
          wallet: value
    })}

)
}
function razorpay_payment_by_upi(e) {
    const wallet=e.target.value
    ApiPost("razorpay").then(res=>{
        console.log(res)
    
        razorpay.createPayment({
        
            amount: res.data.amount,  
            email: 'gaurav.kumar@example.com',
            contact: '9123456780',
             order_id: res.data.id, 
              method: 'upi',  
              wallet: wallet
        })
})
}
const setData=(e)=>{
    setId(e.target.id)
    setValue(e.target.value)
}
  const handleSubmit = async (event) => {
    
    event.preventDefault();

    if (!stripe || !elements) {
     
      return;
    }
    const cardNumber = elements.getElement(CardNumberElement);
    const cardExpiry = elements.getElement(CardExpiryElement);
    const cardCvc = elements.getElement(CardCvcElement);
   
    stripe.createToken(cardExpiry,{name}).then(result=>
    ApiPost('payment',result.token).then(res=>console.log(res))
    )
    };
    console.log(id)
        return(
            <div style={{backgroundColor:'white'}}>
                <div className='headerarea'>
                    <div className="logo">
                        <a href="/">
                            <img src="https://payments.builder.ai/assets/engineer-logo-4a3c4a324a12f36920468e9845dab1cca3495dd02b198dc3f23c62f67407b800.png" alt="Engineer logo"></img>
                        </a>
                    </div>
                    <div className="breadcrums">
                        <ul>
                            <li><a href="/paymentplan">Payment Plan</a></li>
                            <li><a href="/billingdetails">Billing Details/Contract</a></li>
                            <li className="active">Confirm and Pay</li>
                        </ul>
				    </div>
                    <div className="request ">
                        <div className="secure "><img src="https://payments.builder.ai/assets/shield-1a2d8fac9819aeb66a732190732a9eec8fe9dc4ad6864864529d0df9f22ed078.png" alt="Shield"></img> 100% Secure </div>
                    </div>
                </div>
                <div className='middlearea'>
                    <div className='paymentArea'>
                        <div className='paymentLeft'>
                            <div className='inr-user-block'>
                                <h2 >Select Payment Method</h2>
                                <div className="maintab-block2">
                                    <ul>
                                        <li className={`maintab-list ${mainTab=='main-tab-1'?'active':''}`} data-tab="main-tab-1" onClick={(e)=>setMainTab('main-tab-1')}> Onilne Modes </li>
                                        <li className={`maintab-list ${mainTab=='main-tab-2'?'active':''}`} id="other_tab" data-tab="main-tab-2" onClick={(e)=>setMainTab('main-tab-2')}>Other Modes</li>
                                    </ul>
                                </div>
                                <div className='paymentMethod2 active' id='main-tab-1' style={{display:mainTab=='main-tab-1'?'flex':'none'}}>
                                    <div className="paymentTabs2">
                                        <ul className="tabs">
                                            <li className={`tab-link ${tab=='tab-2'?'active':''}`} data-tab="tab-2"  onClick={(e)=>setTab('tab-2')}>Credit / Debit Card</li>
                                            <li className={`tab-link ${tab=='tab-3'?'active':''}`}  data-tab="tab-3" onClick={(e)=>setTab('tab-3')}> Internet Banking </li>
                                            <li className={`tab-link ${tab=='tab-4'?'active':''}`} data-tab="tab-4" onClick={(e)=>setTab('tab-4')}> Wallet </li>
                                            <li className={`tab-link ${tab=='tab-5'?'active':''}`} data-tab="tab-5" onClick={(e)=>setTab('tab-5')}> UPI </li>
                                        </ul>
                                    </div>
                                    <div className='paymentOption2'>
                                        <div className={`optionClick ${tab=='tab-2'?'active':''}`} data-tab="tab-2" onClick={(e)=>setTab('tab-2')}> Credit/Debit Card </div>
                                        <div className="stripeCards2 tab-content active" id="tab-2" style={{display:tab=='tab-2'?'block':'none'}}>
                                            <div id='payment-stripe' >
                                                <ul>
                                                <li>
                                                    <div className="form-group">
                                                        <label htmlFor="cc-number" className="control-label">Card Number</label>
                                                        <div className="input-group" >
                                                          <div id='card-number'>
                                                              <CardNumberElement/>
                                                        </div>
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
                                                        <input id="cc-holdername" type="text" name="cardholder_name" data-stripe="name" data-rule-required="true" maxLength="50" placeholder="Name on Card" required="" onChange={(e)=>setName(e.target.value)}></input>
                                                    </li>
                                                    <li className="smallView">
                                                        <div className="form-group">
                                                            <label>Card Expiry</label>
                                                            <div className="input-group" id='card-exp'>
                                                            <CardExpiryElement/>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="smallView mr-0">
                                                        <div className="form-group">
                                                            <label>CVV</label>
                                                            <div className="input-group" id='card-cvc'>
                                                            <CardCvcElement/>
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
                                        <div className={`optionClick ${tab=='tab-3'?'active':''}`} data-tab="tab-3" onClick={(e)=>setTab('tab-3')}> Internet Banking </div>
                                        <div className='savedCards2 InternetBanking tab-content' id='tab-3' style={{display:tab=='tab-3'?'block':'none'}}>
                                            <span id="banking_error" className="error-msg"></span>
                                            <ul className='InternetBanking-list'>
                                                <li  className={`${id=='intbankone'?'active':''}`}>
                                                    <div className="cardType2">
                                                        <input type="radio" name="creditcard" id="intbankone"  value="SBIN" onClick={(e)=>setData(e)}></input> 
                                                        <label htmlFor="intbankone" className="labeltag"> 
                                                        <div> 
                                                            <img src="https://payments.builder.ai/assets/razorpay/state-logo-02c5a28c4faadcba4937204963f175e02c5390ccefc96e5c47a176af17980f77.svg" alt="State logo"></img>
                                                        </div> 
                                                        </label>
                                                    </div>
                                                </li>
                                                <li  className={`${id=='intbanktwo'?'active':''}`}>
                                                    <div className="cardType2">
                                                        <input type="radio" name="creditcard" id="intbanktwo" checked="checked" value="ICIC" onClick={(e)=>setData(e)}></input> 
                                                        <label htmlFor="intbanktwo" className="labeltag"> 
                                                        <div> 
                                                            <img src="https://payments.builder.ai/assets/razorpay/icici-logo-98dafc88610cb591a5fb70519c0f3f90723fa97062d431526e4f1c1c8e26712b.svg" alt="Icici logo"></img>
                                                        </div> 
                                                        </label>
                                                    </div>
                                                </li>
                                                <li  className={`${id=='intbankthree'?'active':''}`}>
                                                    <div className="cardType2">
                                                        <input type="radio" name="creditcard" id="intbankthree" checked="checked" value="KKBK" onClick={(e)=>setData(e)}></input> 
                                                        <label htmlFor="intbankthree" class="labeltag"> 
                                                        <div> 
                                                            <img src="https://payments.builder.ai/assets/razorpay/kotak-logo-dfc22c3558565125cd036983aa8b91c02fc12390b1fdbd287d46904f1f4b25e3.svg" alt="Kotak logo"></img>
                                                        </div> 
                                                        </label>
                                                    </div>
                                                </li>
                                                <li  className={`${id=='intbankfour'?'active':''}`}>
                                                    <div className="cardType2">
                                                        <input type="radio" name="creditcard" id="intbankfour" checked="checked" value="UTIB" onClick={(e)=>setData(e)}></input> 
                                                        <label htmlFor="intbankfour" className="labeltag"> 
                                                        <div> 
                                                            <img src="https://payments.builder.ai/assets/razorpay/axis-logo-b8238eb3118ee732b18391d4a127869a5f58376528eedb82b09ab01a1ad5fad2.svg" alt="Axis logo"></img>
                                                        </div> 
                                                        </label>
                                                    </div>
                                                </li>
                                                <li  className={`${id=='intbankfive'?'active':''}`}>
                                                    <div className="cardType2">
                                                        <input type="radio" name="creditcard" id="intbankfive" checked="checked" value="CIUB" onClick={(e)=>setData(e)}></input> 
                                                        <label htmlFor="intbankfive" class="labeltag"> 
                                                        <div> 
                                                            <img src="https://payments.builder.ai/assets/razorpay/citi-logo-c1c7f8f7d662c7fe47a46e9daf19ba6fae11956ee172bdf48e42c7f07f946eab.svg" alt="Citi logo"></img>
                                                        </div>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li  className={`${id=='intbanksix'?'active':''}`}>
                                                    <div className="cardType2">
                                                        <input type="radio" name="creditcard" id="intbanksix" checked="checked" value="HDFC" onClick={(e)=>setData(e)}></input> 
                                                        <label htmlFor="intbanksix" className="labeltag"> 
                                                        <div> 
                                                            <img src="https://payments.builder.ai/assets/razorpay/hdfc-logo-48e56a9346ea90c36e93a29e376204c94eea65528b52fbf4f5e2a14a8e81bca2.svg" alt="Hdfc logo"></img>
                                                        </div>
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                            
                                            <div className="bankoption">
                                                <label>Other banks</label> 
                                                <div class="customSelect">
                                                    <select name="banking_payment_options" id="banking_payment_options"><option value="">Select Bank</option><option value="AUBL">AU Small Finance Bank</option>
                                            <option value="ABPB">Aditya Birla Idea Payments Bank</option>
                                            <option value="AIRP">Airtel Payments Bank</option>
                                            <option value="ALLA">Allahabad Bank</option>
                                            <option value="ANDB">Andhra Bank</option>
                                            <option value="ANDB_C">Andhra Bank - Corporate Banking</option>
                                            <option value="UTIB">Axis Bank</option>
                                            <option value="BDBL">Bandhan Bank</option>
                                            <option value="BBKM">Bank of Bahrein and Kuwait</option>
                                            <option value="BARB_R">Bank of Baroda - Retail Banking</option>
                                            <option value="BKID">Bank of India</option>
                                            <option value="MAHB">Bank of Maharashtra</option>
                                            <option value="BACB">Bassein Catholic Co-operative Bank</option>
                                            <option value="CSBK">CSB Bank</option>
                                            <option value="CNRB">Canara Bank</option>
                                            <option value="CBIN">Central Bank of India</option>
                                            <option value="CIUB">City Union Bank</option>
                                            <option value="CORP">Corporation Bank</option>
                                            <option value="COSB">Cosmos Co-operative Bank</option>
                                            <option value="DCBL">DCB Bank</option>
                                            <option value="BKDN">Dena Bank</option>
                                            <option value="DEUT">Deutsche Bank</option>
                                            <option value="DBSS">Development Bank of Singapore</option>
                                            <option value="DLXB">Dhanlaxmi Bank</option>
                                            <option value="DLXB_C">Dhanlaxmi Bank - Corporate Banking</option>
                                            <option value="ESAF">ESAF Small Finance Bank</option>
                                            <option value="ESFB">Equitas Small Finance Bank</option>
                                            <option value="FDRL">Federal Bank</option>
                                            <option value="HDFC">HDFC Bank</option>
                                            <option value="ICIC">ICICI Bank</option>
                                            <option value="IBKL">IDBI</option>
                                            <option value="IBKL_C">IDBI - Corporate Banking</option>
                                            <option value="IDFB">IDFC FIRST Bank</option>
                                            <option value="IDIB">Indian Bank</option>
                                            <option value="IOBA">Indian Overseas Bank</option>
                                            <option value="INDB">Indusind Bank</option>
                                            <option value="JAKA">Jammu and Kashmir Bank</option>
                                            <option value="JSBP">Janata Sahakari Bank (Pune)</option>
                                            <option value="KCCB">Kalupur Commercial Co-operative Bank</option>
                                            <option value="KJSB">Kalyan Janata Sahakari Bank</option>
                                            <option value="KARB">Karnataka Bank</option>
                                            <option value="KVBL">Karur Vysya Bank</option>
                                            <option value="KKBK">Kotak Mahindra Bank</option>
                                            <option value="LAVB_C">Lakshmi Vilas Bank - Corporate Banking</option>
                                            <option value="LAVB_R">Lakshmi Vilas Bank - Retail Banking</option>
                                            <option value="MSNU">Mehsana Urban Co-operative Bank</option>
                                            <option value="NKGS">NKGSB Co-operative Bank</option>
                                            <option value="NESF">North East Small Finance Bank</option>
                                            <option value="ORBC">Oriental Bank of Commerce</option>
                                            <option value="PSIB">Punjab &amp; Sind Bank</option>
                                            <option value="PUNB_R">Punjab National Bank - Retail Banking</option>
                                            <option value="RATN">RBL Bank</option>
                                            <option value="RATN_C">RBL Bank - Corporate Banking</option>
                                            <option value="SRCB">Saraswat Co-operative Bank</option>
                                            <option value="SVCB_C">Shamrao Vithal Bank - Corporate Banking</option>
                                            <option value="SVCB">Shamrao Vithal Co-operative Bank</option>
                                            <option value="SIBL">South Indian Bank</option>
                                            <option value="SCBL">Standard Chartered Bank</option>
                                            <option value="SBBJ">State Bank of Bikaner and Jaipur</option>
                                            <option value="SBHY">State Bank of Hyderabad</option>
                                            <option value="SBIN">State Bank of India</option>
                                            <option value="SBMY">State Bank of Mysore</option>
                                            <option value="STBP">State Bank of Patiala</option>
                                            <option value="SBTR">State Bank of Travancore</option>
                                            <option value="SURY">Suryoday Small Finance Bank</option>
                                            <option value="SYNB">Syndicate Bank</option>
                                            <option value="TMBL">Tamilnadu Mercantile Bank</option>
                                            <option value="TNSC">Tamilnadu State Apex Co-operative Bank</option>
                                            <option value="TBSB">Thane Bharat Sahakari Bank</option>
                                            <option value="TJSB">Thane Janata Sahakari Bank</option>
                                            <option value="UCBA">UCO Bank</option>
                                            <option value="UBIN">Union Bank of India</option>
                                            <option value="UTBI">United Bank of India</option>
                                            <option value="VARA">Varachha Co-operative Bank</option>
                                            <option value="VIJB">Vijaya Bank</option>
                                            <option value="YESB">Yes Bank</option>
                                            <option value="YESB_C">Yes Bank - Corporate Banking</option>
                                            <option value="ZCBL">Zoroastrian Co-operative Bank</option></select>
                                                </div>
                                                
                                            </div>
                                            <div className="action-block">
                                                <div className="paysecurely mobile-view-btn" id="banking_payment_pay_now"><button type="button" onClick={razorpay_payment_by_netbanking}>Pay Now</button></div>
                                            </div>
                                            
                                            
                                           
                                        </div>
                                        <div className={`optionClick ${tab=='tab-4'?'active':''}`} data-tab="tab-4" onClick={(e)=>setTab('tab-4')}> Wallet </div>
                                        <div className='savedCards2 InternetBanking tab-content' id='tab-4' style={{display:tab=='tab-4'?'block':'none'}}>
                                            <span id="banking_error" className="error-msg"></span>
                                            <ul className='InternetBanking-list'>
                                            <li  className={`${id=='walletone'?'active':''}`} style={{display: 'none'}}>
                                                    <div className="cardType2">
                                                        <input type="radio" name="creditcard" id="walletone" value="amazonpay" onClick={(e)=>setData(e)}></input> 
                                                        <label htmlFor="walletone" className="labeltag"> 
                                                            <div> <img src="https://payments.builder.ai/assets/razorpay/amazon-logo-a44db78b6e33329b839bd082368c36f0a0763801fd0948732181a19a65c74b4e.svg" alt="Amazon logo"></img> </div> 
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className={`${id=='wallettwo'?'active':''}`}>
                                                    <div className="cardType2">
                                                        <input type="radio" name="creditcard" id="wallettwo" value="airtelmoney" onClick={(e)=>setData(e)}></input> 
                                                        <label htmlFor="wallettwo" className="labeltag"> 
                                                            <div> <img src="https://payments.builder.ai/assets/razorpay/airtel-logo-0d9f8b98d1c4a0e44c56f901ce306b12157543b8ddb99584a9f794898c6ce220.svg" alt="Airtel logo"></img> </div> 
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className={`${id=='walletfour'?'active':''}`}>
                                                    <div className="cardType2">
                                                        <input type="radio" name="creditcard" id="walletfour" value="jiomoney" onClick={(e)=>setData(e)}></input> 
                                                        <label htmlFor="walletfour" className="labeltag"> 
                                                            <div> <img src="https://payments.builder.ai/assets/jiomoney-f4b7f6cac40cae3dea917f6dff66bc0e8d6dd39d33443e40e2a99100ee83334a.png" alt="Jiomoney"></img> </div> 
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className={`${id=='walletseven'?'active':''}`}>
                                                    <div className="cardType2">
                                                        <input type="radio" name="creditcard" id="walletseven" value="freecharge" onClick={(e)=>setData(e)}></input> 
                                                        <label htmFor="walletseven" className="labeltag"> 
                                                            <div> <img src="https://payments.builder.ai/assets/razorpay/freecharge-logo-707f16cb50316318f438c8b6a18696740e39e4c25524b8e6f214c0df01d5a9da.svg" alt="Freecharge logo"></img> </div> 
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className={`${id=='walleteight'?'active':''}`}>
                                                    <div className="cardType2">
                                                        <input type="radio" name="creditcard" id="walleteight" value="phonepe" onClick={(e)=>setData(e)}></input> 
                                                        <label htmlFor="walleteight" className="labeltag"> 
                                                            <div> <img src="https://payments.builder.ai/assets/razorpay/phonepay-logo-263998ac03ff6b95336ede245aaf5744fc05deada70a300a04f700e6be020448.svg" alt="Phonepay logo"></img> </div> 
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="action-block">
                                                <div className="paysecurely mobile-view-btn" id="wallet_payment_pay_now"><button type="button" onClick={razorpay_payment_by_wallet}>Pay Now</button></div>
                                            </div>
                                        </div>
                                        <div className={`optionClick ${tab=='tab-5'?'active':''}`} data-tab="tab-5" onClick={(e)=>setTab('tab-5')}> UPI </div>
                                        <div className='upi tab-content' id='tab-5' style={{display:tab=='tab-5'?'block':'none'}}>
                                            <span id="upi_error" className="error-msg"></span>
                                            <div className="accept-bx">
                                                <p> We accept <span> <img src="https://payments.builder.ai/assets/razorpay/we-accept-2501fcf9728493c377639aa47aa821dc012fa275dfe6eb59d47e372ab6e20f82.png" alt="We accept"></img> </span></p>
                                            </div>
                                            <div class="pay-block">
                                                <h3> Pay via New VPA </h3>
                                                <p> You must have a Virtual Payment Address </p>
                                            </div>
                                            <div className="upiInput">
                                                <input type="text" name="" id="upi_payment_options" placeholder="Enter VPA" onClick={(e)=>razorpay_payment_by_upi(e)}></input>
                                            </div>
                                            <div className="action-block">
                                                <div className="paysecurely mobile-view-btn" id="upi_payment_pay_now"><button type="button">Pay Now</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="otherWay tab-content" id="main-tab-2" style={{display:mainTab=='main-tab-2'?'block':'none'}}>
                                    <h3>Prefer to pay another way?</h3>
                                    <p>You can use cash, cheques, wire transfers and many more. Once <br/> you confirm your order, you can pay in the way that suits your <br/> business.</p>
                                    <div className="mobile-view-btn">
                                     <Link to='/status'><button type="button" id="payment_by_other" >Confirm Order</button></Link>   
                                    </div>
                                 </div>
                            </div>
                        </div>
                        <div className='rightside-fixwidth'>
                            <em className={`icon-cancel closePriceDetail ${detail?'abc':''}`} onClick={(e)=>setDetail(false)}></em>
                            <div className={`paymentRight ${detail?'':'showOnlyMobile'}`} onClick={(e)=>setDetail(true)}>
                
                                <h3 className="under-tooltip"> Due Now 
                                    <span className="info-icon-bx">
                                    <a> 
                                        <img src="https://payments.builder.ai/assets/info-icon-1eea8c16960501928c7989d456cdcfba785d65aed6facd654359ce76d29ffe5c.png" alt="Info icon"></img> 
                                        <div className="tooltip">
                                            
                                        <p> This is the amount of money you will pay at the end of checkout to begin your project. Later, you will be able to choose the date when your project begins development.</p>
                                        </div> 
                                    </a>
                                    
                                    </span>
                                </h3>
                                <div className="costduration">
                                <div className="detailRow">
                                    <label className="under-tooltip"> Security Deposit
                                        <span className="info-icon-bx">
                                            <a > 
                                            <img src="https://payments.builder.ai/assets/info-icon-1eea8c16960501928c7989d456cdcfba785d65aed6facd654359ce76d29ffe5c.png" alt="Info icon"></img> 
                                            <div className="tooltip">
                                                
                                                <p> This is payed up front and reserves your development team to ensure they are ready to start on time.
                                                <br/>
                                                This cost will be refunded at the end of the development process (we will deduct the cost from your final payment).</p>
                                            </div> 
                                            </a>
                                            
                                        </span>
                                    </label>
                                    <p> ₹1,50,616.84 </p>
                                </div>
                                    <div className="detailRow">
                                    <label className="under-tooltip"> Tax (18% GST)
                                    </label>
                                    <p> ₹27,111.03 </p>
                                    </div>
                                <div class="total-amount">
                                    <label> Total </label>
                                    <p> ₹1,77,727.87 </p>   
                                </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containerblock">
                    <div className="footer">
                        <div>
                            <img src="https://payments.builder.ai/assets/footer-10ca78d5f75ea64295a937692dd2b8d99ca1e52f148e72d407c8818a53828a99.png" alt="Footer"></img>
                        </div>
                        <div> Builder accepts all major credit and debit cards. </div>
                    </div>
                </div>
           </div>
        )
    
}
export default Pay;