import React from 'react'
import './currencyBox.css'
class CurrencyBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        }
        this.toggleBox=this.toggleBox.bind(this);
    }
    toggleBox(){
        this.setState({isOpen:!this.state.isOpen})
    }
    render(){
    return(
        <div className='currencySelBox' >
            <span className="sel_state" onClick={this.toggleBox}>INR</span>
            <div className={`userDropdown ${this.state.isOpen?'active':''}`}>
                <div className="userDropdownBox">
                    <div className="currencychoose">
                        
                        <div className="icons">
                             <img alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/591a9aa814c49f7f467463f7/Dollar.svg"></img>
                        </div>
                        <span className="currencyName">US Dollars</span>
                    </div>
                    <div className="currencychoose">
                        <div className="icons">
                            <img alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/5bdfefe51f0c640e7cfadee0/yen.png"></img>
                        </div>
                        <span class="currencyName">YEN</span>
                    </div>
                    <div class="currencychoose">
                        <div class="icons">
                            <img alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/591a9aa614c49f7f467463f5/Ringgit.svg"></img>
                        </div>
                        <span class="currencyName">Ringgit</span>
                    </div>
                    <div class="currencychoose active">
                        <div class="icons">
                            <img alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/591a9aa714c49f7f467463f6/Rupee.svg"></img>
                        </div>
                        <span class="currencyName">Indian Rupee</span>
                    </div>
                    <div class="currencychoose">
                        <div class="icons">
                            <img alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/5ab3ab3c0b82ec47eda97d71/AED_0.5x.png"></img>
                        </div>
                        <span class="currencyName">Dirham</span>
                    </div>
                    <div class="currencychoose">
                        <div class="icons">
                            <img alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd4ef688f3ac67bbadfda8/euro-symbol__1_.png"></img>
                        </div>
                        <span class="currencyName">Euro</span>
                    </div>
                    <div class="currencychoose">
                        <div class="icons">
                            <img alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/376/SAR__1_.png"></img>
                        </div>
                        <span class="currencyName">Saudi Riyal</span>
                    </div>
                    <div class="currencychoose">
                        <div class="icons">
                            <img alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/5ce3b012b0a5a94038945727/Canada.png"></img>
                        </div>
                        <span class="currencyName">Canadian Dollar</span>
                    </div>
                    <div class="currencychoose">
                        <div class="icons">
                            <img alt="" src="https://duj87royd3ze0.cloudfront.net/uploads/image/file/59fd4e9588f3ac67bbadfda0/pounds-symbol__1_.png"></img>
                        </div>
                        <span class="currencyName">Pounds</span>
                    </div>
                </div>
            </div>
        </div>
    )}
}
export default CurrencyBox;