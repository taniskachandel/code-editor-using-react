import React from 'react';
import unnamed from './unnamed.png';
import './FrontPage.css';

const NavBar = () => {
    return (
        <div>
            <nav>
                <div className="nav-container">
                    <a className="logoNav" href="/">
                        <img src={unnamed} alt="LOGO" className="logo-imgNav" />
                    </a>
                    <h1> CODE EDITOR </h1>
                    <div className="menu-toggle ">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </div>
    )
}


const Par = () => {
    
    return(
        
        <div>
            <div className="section1 animated fadeIn">
                <div className="content-section1">
                        <p>Welcome to <span id="content-name">The Online Code Editor</span><br/>
                        This code editor offers support for 45+ programming languages, ensuring that 
                        the code can be written in any user preferred language. It also provides memory status
                        and time taken to execute a code. As well as lets the user change the 
                        theme of the code editor.</p>
                        <div className="try-btn-main">
                            <div className="try-button">
                                <a href = '/code-editor'>
                                    <button>Try Editor</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
const FrontPage = () => {
    return (
        <div>
            <NavBar />
            <Par/>
        </div>
    );
}

export default FrontPage;