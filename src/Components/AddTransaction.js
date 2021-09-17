import React, { useState } from 'react'
import Items from './Items';

export default function AddTransaction() {
    const [text, settext] = useState([])
    const [amount, setamount] = useState([])

    const [mainText, setMainText] = useState([])
    const [mainAmount, setMainAmount] = useState([])



    const handelChangeText = (e) => {
        settext(e.target.value)
    }
    const handelChangeAmount = (e) => {
        setamount(e.target.value)
    }

    // var allItems=[
    //     {text:'',amount:''}
    // ]

    const handelClick = () => {


        settext('')
        setamount('')

        if (text.length > 0 && amount.length > 0) {
            setMainAmount((oldItems) => {
                return [...oldItems, amount]

            })
            setMainText((oldItems) => {
                return [...oldItems, text]

            })
        }

    }
    const deleteItems=(id)=>{

        setMainAmount((oldItems)=>{
            return (oldItems.filter((arrItems,index)=>{
                return index!==id ;
            }))
        })

        setMainText((oldItems)=>{
            return (oldItems.filter((arrItems,index)=>{
                return index!==id ;
            }))
        })
      }

    

const arrStr = mainAmount;
const nuevo = arrStr.map((i) => Number(i));

    // Getting sum of numbers
    var sum = nuevo.reduce(function (a, b) {
        return a + b;
    }, 0);

  
    return (
        <>
            <div className="container">
                <h4>Your Total</h4>
                <h1>₹{sum}</h1>
            </div>

            <h3>History</h3>

            {mainText.map((total, index) => {
                return <Items onDelete={deleteItems} text={total} amount={mainAmount[index]} id={index} key={index} />
            })}



            <h3>Add new transaction</h3>
            <form id="form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>

                    <input onChange={handelChangeText} value={text} type="text" id="text" placeholder="Enter text..." />

                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                    </label>

                    <input onChange={handelChangeAmount} value={amount} type="number" id="amount" placeholder="Enter amount..." />

                </div>
                <button onClick={handelClick} className="btn">Add transaction</button>
            </form>


       <center>     <footer class="page-footer font-small purple pt-4 fixed-bottom">

            <div class="footer-copyright text-center py-3"> <b>  @Sumittripathi07 </b> <br/><br/> 
     <a rel="noreferrer" target="_blank" href="https://sumittripathi07.github.io/react-TodoList/"> ---TodoList---</a>
    </div>
    </footer>
    </center>

  
            
        </>
    )
}
