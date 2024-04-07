
import React from 'react';
import  './Header.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-left">
                    <div className="logo">T</div>
                    <div className="market-info">
                        <div className="market-price">$601.25</div>
                        <div className="market-change">24.43%</div>
                    </div>
                    <div className="market-stats">
                        <div className="market-cap">
                            Market Cap
                            <div className='value'>$3.85b</div>
                        </div>
                        <div className="market-volume">
                            24hr Volume
                            <div className='value'>$27.97m</div>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <a href="https://corcel.io" className="corcel-link">Visit Corcel.io</a>
                    <button className="buy-button">$ Buy</button>
                    <button className="stake-button">Stake</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
