import React from 'react'
import './header.css';
import traders from '../../assets/traders.jpg'


const Header = () => {
  return (
    <div className="main_header_tag">
      <div className="trader_header_logo_name">
        <h1 className='gradient__text'>AS</h1>
        <p className='gradient__text'>Trades</p>
      </div>
      <div className="header_upper_text">
        Risk Disclosure Statement: Investing in the stock market involves inherent risks, including market volatility, 
        economic factors, company-specific risks, liquidity risks, potential loss of capital, market timing risks, 
        currency risks, regulatory risks, information risks, and diversification risks. These risks can result in financial losses. 
        It is important to conduct thorough research and seek professional advice before making any investment&nbsp;decisions 
      </div>
      <img src={traders} alt='traders' />
      <div className="header_main_features_lists">
        <ul>
          <li>We are not responsible for your profits and losses, while are you trading.</li>
          <li>It is technical analysis tool for indian stock market.</li>
          <li>9 out of 10 traders are loss marking traders.</li>
          <li>On an average, Loss markers registered net loss close to 50k.</li>
          <li>Only do trading when you have enough trading knowledge.</li>
          <li>Not randomly buy and sell any stock on tips basis.</li>
          <li>I'm not SEBI registered.</li>
        </ul>
      </div>
      <div className="header_features_tag">
        <p>Features</p>
        <h4>We are actually providing these are all services.</h4>
        <div className="header_features_lists">
          <ul>
            <li>OI Analysis.</li>
            <li>PCR Data</li>
            <li>FII and DII Daily Data.</li>
            <li>Support and Resistance Data.</li>
            <li>Something</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
