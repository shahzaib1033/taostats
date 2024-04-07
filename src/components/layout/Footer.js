
import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className='footer'>
            <img src="https://res.cloudinary.com/dvgvsqeeq/image/upload/v1712419189/v82f53063gg8ff1elbfi.svg" alt="Logo" />
            <div className="footer-content">
                <div className="footer-section details">
                    <p>τaostats is a Block Explorer and Analytics Platform for Bittensor, a decentralized machine learning network.</p>
                    <p>This site is not affiliated with the Opentensor Foundation.
                        The content of this website is provided for information purposes only.</p>
                    <p>No claim is made as to the accuracy or currency of the content on this site at any time.</p>
                    <p>τaosτaτs is created and maintained by mogmachine. We hope you found it helpful, if you have any suggestions or issues please contact us at taostats@mogmachine.com.</p>
                </div>
                <div className="footer-section">
                    <h3>Blockchain</h3>
                    <span>Blocks</span>
                    <span>Transfers</span>
                    <span>Delegation</span>
                    <span>Validators</span>
                    <span>Accounts</span>
                    <span>Subnets</span>
                    <span>Tokenomics</span>
                    <span>Nakamoto</span>
                    <span> Kusanagi</span>

                </div>
                <div className="footer-section">
                    <h3>Validators</h3>
                    <span>Verified Validators</span>
                    <span> Delegation/Staking</span>
                    <br />
                    <br />
                    <h3>Resources</h3>
                    <span>Links</span>
                    <span>Media</span>

                </div>
                <div className="footer-section">
                    <h3>Developers</h3>
                    <span> Corcel API</span>
                    <span>Taostats API</span>
                    <h3>Apps</h3>
                    <span>Corcel Chat</span>
                    <span> Corcel Image Studio</span>
                    <span>Corcel Translate</span>
                    <span> Corcel Mobile</span>
                </div>
            </div>
            <div className="copyright">
                <p>Taostats ©2024</p>
                <p>Taostats is funded by public delegation. Support us by delegating <u>stake to the taostats.io validator </u></p>
            </div>
        </footer>
    );
};

export default Footer;
