import React, {useState,useEffect} from "react";

function MortgageCalc(props) {
    const [sum,setSum]  = useState(0);
    const [deposit,setDeposit]  = useState(0);
    const [time,setTime]  = useState(0);
    const [result,setResult] = useState(0);

    const calculate = () =>{
        let monthly = deposit/100/12;
        let tmp = Math.pow(1+monthly,time);
        let final = sum * monthly * tmp/(tmp-1);
        setResult(final.toFixed(2));
    };

    useEffect(()=>{
        calculate();
    });
    return(
      <div className={'container'}>
          <label>
              Сумма:
              <input type="number" onChange={(e)=>{setSum(e.target.value);}}/><span>$</span>
          </label>
          <label>
              Ставка:
              <input type="number" onChange={(e)=>{setDeposit(e.target.value);}} /><span>%</span>
          </label>
          <label>
              Срок:
              <input type="number" onChange={(e)=>{setTime(e.target.value);}} /><span>лет</span>
          </label>
          <p>Ежемесячный платеж:{result}$</p>
      </div>
    );
}

export default MortgageCalc;