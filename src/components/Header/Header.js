import React from 'react';
import './Header.css';
// Header Component
const Header = () => {
    return (
        <div className="header">
            <h1 className="main-title"> Welcome To Programmers Club</h1>
            <h2 className="programmers-code"> <span className="programmers">Top  Programmers </span>in the World of All Time</h2>
            <h2 className="your-budget">Your Budget: <span className="balance">$1 Million</span></h2>
        </div>
    );
};

export default Header;


// import React from 'react';
// import './Header.css';
// import logo from '../../images/logo.png';

// const Header = () => {
//     return (
//         <>
//         <div className="header">
//            <img src={logo} alt="Logo"></img> 
//             <div className="my-nav-items">
//             <a href="/">Home</a>
//            <a href="/">About</a>
//            <a href="/">Programming</a>
//            <a href="/">Development</a>
//            <a href="/">Books</a>
//             </div>
//             <div className="my-nav-items2">
//             <a href="/">Log in</a>
//            <a href="/">Sign Up</a>
//             </div>
//         </div>
//         <div className="container">
//             <h1 className="text-center"><span className="text-primary">me ProgrammTo Welcoers Club</span></h1>
//             <h3 className="text-center"> <span className="text-primary">Top  Programmers </span>in the World of All Time</h3>
//             <h2 className="text-center">Your Budget: <span className="text-info">$1 Million</span> </h2>
//         </div>
//         </>
//     );
// };

// export default Header;