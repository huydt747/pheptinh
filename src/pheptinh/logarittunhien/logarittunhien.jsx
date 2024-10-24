import React, { useState } from 'react';

function LogaritTuNhien() {
    const [x, setX] = useState('');
    const [result, setResult] = useState(null);
    const [decimalPlaces, setDecimalPlaces] = useState(2);

    const calculateLog = () => {
        const value = parseFloat(x);
        if (!isNaN(value) && value > 0) {
            const lnValue = Math.log(value);
            setResult(lnValue.toFixed(decimalPlaces));
        } else {
            setResult('Giá trị không hợp lệ!');
        }
    };

    const reset = () => {
        setX('');
        setResult(null);
        setDecimalPlaces(2);
    };

    return (
        <div className="logarittunhien">
            <h1>Logarit tự nhiên</h1>
            <p>Logarit tự nhiên là logarit có cơ số bằng hằng số e = 2,72.</p>  
            <h2>Đồ thị và công thức</h2> 

            <h2>Bảng tính</h2>
            <h3>Hãy đưa ra 1 giá trị</h3>
            <table>
                <tbody>
                    <tr>
                        <td>x =</td>
                        <td>
                            <input 
                                type="text" 
                                value={x} 
                                onChange={(e) => setX(e.target.value)} 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>ln x =</td>
                        <td>
                            <input 
                                type="text" 
                                value={result !== null ? result : ''} 
                                readOnly 
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Làm tròn đến 
                <input 
                    type="text" 
                    className='thapphan' 
                    value={decimalPlaces} 
                    onChange={(e) => setDecimalPlaces(e.target.value)} 
                    placeholder='2' 
                /> số thập phân
            </p>
            <input 
                className='button' 
                type="button" 
                value="Hãy tính toán" 
                onClick={calculateLog} 
            />
            <input 
                className='button' 
                type="reset" 
                value="Xóa nội dung" 
                onClick={reset} 
            />
        </div>
    );
}

export default LogaritTuNhien;
