import React from 'react'
import './currencyBox.css'
import axios from 'axios'
class CurrencyBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false,
            currency:[],
            currencyId:1
        }
        this.toggleBox=this.toggleBox.bind(this);
    }
    componentDidMount(){
        axios.get(`http://localhost:4000/configurations`)
          .then(res => {
            const data = res.data;
            this.setState({currency: data });
          })  
                        
          
    }
    toggleBox(){
        this.setState({isOpen:!this.state.isOpen})
    }
    chooseCurrency=(id)=>{
        this.setState({currencyId:id})
    }
    render(){
        let code=this.state.currency.map(value=>
            value.currencies.filter(info=>info.id==this.state.currencyId))[0]
        console.log(code)
    return(
        <div className='currencySelBox' >
            <span className="sel_state" onClick={this.toggleBox}>{this.state.currencyId&&this.state.currency.length?code.map(value=>value.code):''}</span>
            <div className={`userDropdown ${this.state.isOpen?'active':''}`}>
                <div className="userDropdownBox">
                    {this.state.currency.map(value=>
                        value.currencies.map(info=>
                            <div className={`currencychoose ${this.state.currencyId==info.id?'active':''}`} onClick={(e)=>this.chooseCurrency(info.id)}>
                        
                                <div className="icons">
                                    <img alt="" src={info.icon_image_file_url}></img>
                                </div>
                                <span className="currencyName">{info.name}</span>
                            </div>
                        ))}
                    
                    
                </div>
            </div>
        </div>
    )}
}
export default CurrencyBox;