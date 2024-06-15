import { useEffect, useState } from "react";

const getPrices = async() => {
    try {
        const res1 = await fetch("https://api.coinbase.com/v2/exchange-rates?currency=eth");
    const res2 = await fetch("https://api.coinbase.com/v2/exchange-rates?currency=bnb");
    const eth_usd = await res1.json()
    const bnb_usd = await res2.json()
    let price_eth = parseFloat(eth_usd.data.rates.USD).toFixed(3);
    let price_bnb = parseFloat(bnb_usd.data.rates.USD).toFixed(3);
    price_eth=parseFloat(price_eth)
    price_bnb=parseFloat(price_bnb)
    return {price_eth , price_bnb}
    } catch (error) {
        error && console.error(error.message)
    }
}

const prices = await getPrices();
const tokenPrice = 0.02;//USDT

const Presale = () => {
    const [ebPrices, setebPrices] = useState({});
    const [activeToken, setActiveToken] = useState("ETH");
    const [tokenAmount, setTokenAmount] = useState("");
    const [firstValue, setFirstValue] = useState("");

    // console.log({activeToken , firstValue , tokenAmount})

    const tokenHandler=(e)=>{
        const value = e.target.value;
        setActiveToken(()=>value)

        setTokenAmount("")
        setFirstValue("")
    }

    const usdtToToken = (e) => {
        const value = e.target.value;
        setFirstValue(value)
        setTokenAmount(()=> value== "" ? value : (parseFloat(value)/tokenPrice))
    }

    const mytokenToTokens = (e) => {
        const value = e.target.value;
        setTokenAmount(value);

        if(activeToken === "USDT"){
            setFirstValue(()=> parseFloat(value)*tokenPrice)
        }

        if(activeToken === "BNB"){
            setFirstValue(()=> (1/ebPrices.price_bnb)*(parseFloat(value)*tokenPrice))
        }

        if(activeToken === "ETH"){
            setFirstValue(()=> (1/ebPrices.price_eth)*(parseFloat(value)*tokenPrice))
        }
    }

    const ethToToken = (e) => {
        const value = e.target.value;
        setFirstValue(value)
        setTokenAmount(()=> value== "" ? value : (parseFloat(value)*ebPrices.price_eth)/tokenPrice)
    }

    const bnbToToken = (e) => {
        const value = e.target.value;
        setFirstValue(value)
        setTokenAmount(()=> value== "" ? value : (parseFloat(value)*ebPrices.price_bnb)/tokenPrice)
    }

    useEffect(() => {   
        setebPrices(prices)
    }, [])
  return (
    <div className="m-20 w-[400px]">
        <h1 className="mb-3">Token Price : 0.02 USDT</h1>
        <div className="flex items-center justify-between w-full">
            <button value={"ETH"} onClick={tokenHandler} className={`${activeToken === "ETH" ? "bg-pink-500" : "bg-purple-400"} flex justify-center items-center w-32 h-8 text-white hover:text-black transition-all duration-300`}>ETH</button>
            <button value={"BNB"} onClick={tokenHandler} className={`${activeToken === "BNB" ? "bg-pink-500" : "bg-purple-400"} flex justify-center items-center w-32 h-8 text-white hover:text-black transition-all duration-300`}>BNB</button>
            <button value={"USDT"} onClick={tokenHandler} className={`${activeToken === "USDT" ? "bg-pink-500" : "bg-purple-400"} flex justify-center items-center w-32 h-8 text-white hover:text-black transition-all duration-300`}>USDT</button>
        </div>
        <div className="flex mt-3 mb-3  justify-between items-center">
            <input placeholder={activeToken} value={firstValue} onChange={activeToken==="USDT" ? usdtToToken : activeToken==="ETH" ? ethToToken : bnbToToken } className="border-2 outline-none px-2 py-1 border-pink-500 w-[45%]" type="number" />
            <input placeholder="ELT" value={tokenAmount} onChange={mytokenToTokens} className="border-2 outline-none px-2 py-1 border-purple-500 w-[45%]" type="number" />
        </div>
        <button className="w-full h-8 mx-auto bg-gray-500 hover:bg-green-500 text-white transition-all duration-300">BUY NOW</button>
    </div>
  )
}

export default Presale