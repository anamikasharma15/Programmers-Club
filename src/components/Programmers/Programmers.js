import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithub, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faHandPointRight, faCode } from '@fortawesome/free-solid-svg-icons';
import './Programmers.css';

//single member component

const Programmers = (props) => {
    const { img, name, country, salary,role,age } = props.programmer;
    return (
        <div className="programmers">
            <img src={img} alt="" />
            <div className="programmersDetails">
                <h2 className="memberName"> <small>{name}</small> </h2>
                <p> <small>Role: {role}</small></p>
                <p><small> Age: {age}</small></p>
                <p> <small> Country: {country}</small></p>
                <h4 className="salary"> Salary: ${salary}</h4>
                <p>
                    <FontAwesomeIcon style={{ color: "#4267B2" }} className="social-icon" icon={faFacebookSquare} />
                    <FontAwesomeIcon style={{ color: "#1DA1F2" }} className="social-icon" icon={faLinkedin} />
                    <FontAwesomeIcon style={{ color: "#2867B2" }} className="social-icon" icon={faTwitterSquare} />
                    <FontAwesomeIcon style={{ color: "#4078c0" }} className="social-icon" icon={faGithub} />
                </p>
                <button className="hireMeBtn btn" onClick={() => props.handleHireMe(props.programmer)}><FontAwesomeIcon icon={faHandPointRight} /> Hire Me</button>
                <button className="skillsBtn btn"><FontAwesomeIcon icon={faCode} /> Skills</button>
            </div>
        </div>
    );
};

export default Programmers;





// import React from 'react';
// import './Developer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faShoppingCart} />
// const Developer = (props) => {
//     const {name, img, salary, about, tech} = props.developer;
    
//     return (
//         <div>
//             <div className="col text-center">
//                 <div className="card h-100">
//                   <img src={img} className="card-img-top dev-img mx-auto mt-3" alt="..." />
//                   <div className="card-body">
//                     <h5 className="card-title fw-bold">{name}</h5>
//                        <h6>Salary: {salary}</h6> 
//                     <p className="card-text"> <span className="fw-bold">Expertise:</span> {tech}</p>
//                     <p className="card-text">{about.slice(0, 100)}</p>
//                     <button className="btn btn-info my-btn" onClick={ () => props.handleAddToCart(props.developer)}> {element} Hire Now</button>
//                   </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Developer;