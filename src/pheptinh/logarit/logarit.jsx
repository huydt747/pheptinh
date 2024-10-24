import React, { useState } from 'react';

function Logarit() {
    const [a, setA] = useState('');
    const [x, setX] = useState('');
    const [logResult, setLogResult] = useState('');
    const [decimalPlaces, setDecimalPlaces] = useState(2);

    const calculateLog = () => {
        let base = parseFloat(a);
        let number = parseFloat(x);
        let result;

        if (base > 0 && base !== 1 && number > 0) {
            result = Math.log(number) / Math.log(base);
            if (!isNaN(decimalPlaces) && decimalPlaces >= 0) {
                result = result.toFixed(decimalPlaces);
            }
            setLogResult(result);
        } else {
            setLogResult('Vui lòng nhập giá trị hợp lệ cho a và x!');
        }
    };

    const resetInputs = () => {
        setA('');
        setX('');
        setLogResult('');
        setDecimalPlaces(2);
    };

    return (
        <div className='logarit'>
            <h1>Logarit</h1>    
            <p>
                <li>Số logarit x là y = logₐ x , thỏa mãn đẳng thức: aʸ = x:</li>
                <li>y – số mũ</li>
                <li>x – số logarit</li>
                <li>a – cơ số</li>
                <li>x &gt; 0; a &gt; 0; a &ne; 1</li>
            </p>  
            <h2>Máy tính giải Logarit Online</h2>  
            <h3>Hãy đưa ra a và 1 giá trị x</h3>
            <table>
                <tbody>
                    <tr>
                        <td>a =</td>
                        <td><input type="text" value={a} onChange={e => setA(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>x =</td>
                        <td><input type="text" value={x} onChange={e => setX(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Kết quả logₐ(x) =</td>
                        <td><input type="text" value={logResult} readOnly /></td>
                    </tr>
                </tbody>
            </table>
            <p>Làm tròn đến 
                <input type="text" className='thapphan' value={decimalPlaces} onChange={e => setDecimalPlaces(e.target.value)} placeholder='2' /> 
                số thập phân
            </p>
            <input className='button' type="button" value="Hãy tính toán" onClick={calculateLog} />
            <input className='button' type="reset" value="Xóa nội dung" onClick={resetInputs} />
        </div>
    );
}

export default Logarit;
