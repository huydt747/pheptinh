import React, { useState } from 'react';
import './maytinhonline.css';

const Calculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setInput(eval(input).toString());
            } catch {
                setInput("Error");
            }
        } else if (value === 'AC') {
            setInput("");
        } else if (value === 'DEL') {
            setInput(input.slice(0, -1));
        } else {
            setInput(input + value);
        }
    };

    return (
        <>
            <h1>Máy tính online</h1>
            <h2>Máy tính online tính toán đơn giản và thuận tiện</h2>
            <p>Sử dụng cho công việc, học tập hoặc tính toán cá nhân. Máy tính online thực hiện các phép tính toán đơn giản, tính lãi cho khoản vay & lãi suất cho vay của ngân hàng, việc tính toán chi phí cho các công trình và tiện ích.</p>
            <br />
            <div className="calculator">
                <div className="output">
                    <input type="text" placeholder="0" value={input} readOnly />
                </div>
                <div className="input">
                    {['AC', 'DEL', '%', '/'].map((btn) => (
                        <button key={btn} onClick={() => handleClick(btn)} className="operator">{btn}</button>
                    ))}
                    {['7', '8', '9', '*'].map((btn) => (
                        <button key={btn} onClick={() => handleClick(btn)} className={btn === '*' ? 'operator' : ''}>{btn}</button>
                    ))}
                    {['4', '5', '6', '-'].map((btn) => (
                        <button key={btn} onClick={() => handleClick(btn)} className={btn === '-' ? 'operator' : ''}>{btn}</button>
                    ))}
                    {['1', '2', '3', '+'].map((btn) => (
                        <button key={btn} onClick={() => handleClick(btn)} className={btn === '+' ? 'operator' : ''}>{btn}</button>
                    ))}
                    {['00', '0', '.', '='].map((btn) => (
                        <button key={btn} onClick={() => handleClick(btn)} className={btn === '=' ? 'ans' : ''}>{btn}</button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Calculator;