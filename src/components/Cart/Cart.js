
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

//add member and total expense component

const Cart = (props) => {
    const { addMember } = props;
    const totalExpense = addMember.reduce((previous, current) => previous + current.salary, 0)
    return (
        <div className="cart-member">
            <h2><FontAwesomeIcon icon={faUser} /> Total Members: {addMember.length}</h2>
            <h3>Total Expense: ${totalExpense}</h3>
            <hr />
            <h2> <small><FontAwesomeIcon icon={faCheckCircle} /> Selected Developers</small> </h2>
            {/* member name show part here  */}
            <ul className="list-container">
                {
                    addMember.map(singleMember => <li key={singleMember.id}>{singleMember.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;

// import React from 'react';
// import Selected from '../Selected/Selected';
// import './Cart.css'

// const Cart = (props) => {
//     console.log(props)
//     // console.log(props.cart)
//     const {cart} =props;
//     let total = 0;
//     for (const de of cart){
//         total = total + de.salary
//     }
//     return (
//         <div className="col card p-2 py-3">
//             <h2>Total Devs: {cart.length}</h2>
//             <h4>Total Expense: ${total}</h4>
//              <ol> <span className="text-primary fs-4">Your project Mates</span>
//                  {
//                      cart.map( developer => <Selected developer={developer}></Selected>)
//                  }
//              </ol>
//         </div>
//     );
// };
// export default Cart;