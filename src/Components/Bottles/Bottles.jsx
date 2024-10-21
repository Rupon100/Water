import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoredCaet, removeItem } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";
 

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [buy, setBuy] = useState([]);

    // for rander data from api
    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    // for store data in saveCArt and set it in setBuy
    useEffect(() => {
        if(bottles.length){
            const storedCart = getStoredCaet();
            //console.log(storedCart)

            const savedCart = [];
            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            // console.log(savedCart)
            setBuy(savedCart)
        }
        
    }, [bottles])

    // save to LS
    const handleAddToCart = (bottle) => {
        const newAddCart = [...buy, bottle];
        setBuy(newAddCart)

        addToLs(bottle.id)
        //console.log(bottle)
    }

    // remove from LS and UI
    const handleRemoveFromCart = id => {
        //remove from Ui
        const remainingCart = buy.filter(bottle => bottle.id !== id)
        setBuy(remainingCart)
        //remove from LS
        removeItem(id)
    }

    return (
        <div>
            <h2>Bottle available {bottles.length}</h2>

            <Cart cart={buy} handleRemoveFromCart={handleRemoveFromCart}></Cart>

            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;