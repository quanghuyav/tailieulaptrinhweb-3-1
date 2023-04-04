import { useState } from "react"

function Game() {

    const [myValue, setMyValue] = useState()
    const [computerValue, setComputerValue] = useState()
    const [result, setResult] = useState()
    const [money,setMoney] = useState(10000)
    const [bet, setBet] = useState(0)


    const handleClick = (e) => {
        let x = (e.target.id) // Lựa chọn của mình
        var myTrick
        if (x == 0){
            myTrick = [0,0,1,1,1,1,1,1,2,2]
        }
        if (x == 1){
            myTrick = [1,1,1,2,2,0,0,0,0,0]
        }
        if (x == 2){
            myTrick = [2,2,2,0,0,1,1,1,1,1]
        }
        let y = myTrick[Math.floor( Math.random()*10)] // Lựa chọn của máy
        const myArr =["búa","kéo","bao"]
        setMyValue(myArr[x])
        setComputerValue(myArr[y])
        if (x == 0){
            if (y==0){
                setResult("hoà")
            }
            if (y==1){
                setResult('thắng')
                setMoney(money+bet)
            }
            if (y==2){
                setResult('thua')
                setMoney(money-bet)
                setBet(bet>money-bet?money-bet:bet)
            }
        }
        if (x == 1){
            if (y==0){
                setResult('thua')
                setMoney(money-bet)
                setBet(bet>money-bet?money-bet:bet)

            }
            if (y==1){
                setResult('hoà')
            }
            if (y==2){
                setResult('thắng')
                setMoney(money+bet)
            }
        }
        if (x == 2){
            if (y==0){
                setResult('thắng')
                setMoney(money+bet)
            }
            if (y==1){
                setResult('thua')
                setMoney(money-bet)
                setBet(bet>money-bet?money-bet:bet)
                

            }
            if (y==2){
                setResult('hoà')
            }
        }

    }    
    
    const handleChange = (e) =>{
        let x = e.target.value-0
        if(x<0){
            setBet(0)
        }
        else if (x>money){
            setBet(money-0)
        }
        else {
            setBet(x)
        }
        
    }
    return ( <>
        <h1>Chào mừng bạn đến với nhà cái hàng đầu Việt Nam</h1>
        <h1>Tiền: {money} </h1>
        <span>Tiền cược: </span>
        <input onChange={handleChange} value={bet} type="number" min={0} max = {money}></input>
        <div id={0} onClick={handleClick} style={{width:100,height:100, backgroundColor:"red"}}>Búa</div>
        <div id={1} onClick={handleClick} style={{width:100,height:100, backgroundColor:"blue"}}>Kéo</div>
        <div id={2} onClick={handleClick} style={{width:100,height:100, backgroundColor:"yellow"}}>Bao</div>
       {result &&
            <>
                <div> Lựa chọn của bạn là: {myValue} </div>
                <div> Lựa chọn của máy là: {computerValue} </div>
                <div> Kết quả là: {result} </div>
            </>

       }



    </> );
}

export default Game;