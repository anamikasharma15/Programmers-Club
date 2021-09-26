
import React, { useEffect, useState } from 'react';
import Programmers from '../Programmers/Programmers';
import Cart from '../Cart/Cart';
import './Container.css';
//Cart container  component
const Container = () => {
    //declare state
    const [containers, setContainers] = useState([]);
    const [addMember, setAddMember] = useState([]);
    //fetch data using useEffect
    useEffect(() => {
        fetch('./programmers.JSON')
            .then(res => res.json())
            .then(data => setContainers(data));
    }, []);
    // Hire me Btn handler
    const handleHireMe = Programmer => {
        const addNewCart = [...addMember, Programmer]
        setAddMember(addNewCart);


    }
    return (
        <div className="container">
            {/* programmers area */}
            <div className="Programmer">
                {
                    containers.map(programmer => <Programmers
                        key={programmer.id}
                        programmer={programmer}
                        handleHireMe={handleHireMe}
                    >

                    </Programmers>)
                }
            </div>
            {/* cart added area */}
            <div className="Programmers-calculation">
                {
                    <Cart addMember={addMember}></Cart>
                }
            </div>
        </div>
    );
};

export default Container;
// import React, { useEffect, useState } from 'react';
// import Cart from '../Cart/Cart';
// import Developer from '../Developer/Developer';
// import './Container.css'

// const Container = () => {
//     const [developers, setDevelopers] = useState([]);
//     const [cart, setCart] = useState([]);
//     useEffect( () => {
//         fetch('./developer.json')
//         .then(res => res.json())
//         .then(data => setDevelopers(data))
//     } , [])
//     const handleAddToCart =(developer) => {
//         // console.log(developer);
//         const newCart = [...cart, developer];
//         setCart(newCart);
//         // console.log(newCart)
//     }
//     return (
//         <div className="developer-container">
//                 <div className="row row-cols-1 row-cols-md-3 g-4 container">

//                 {
//                     developers.map( developer =>  <Developer 
//                         key={developer.key}
//                         developer={developer}
//                         handleAddToCart={handleAddToCart}
//                     ></Developer>)
//                 }
//                 </div>
//                     <Cart cart={cart}></Cart>
//         </div>
//     );
// };

// export default Container;