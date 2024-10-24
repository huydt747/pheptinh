import React, { useState } from 'react';

function LogaritThapPhan() {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [decimalPlaces, setDecimalPlaces] = useState(2);

    const handleCalculate = () => {
        const num = parseFloat(value);
        if (!isNaN(num) && num > 0) {
            const logValue = Math.log10(num);
            setResult(logValue.toFixed(decimalPlaces));
        } else {
            alert("Vui lòng nhập giá trị hợp lệ!");
        }
    };

    const handleReset = () => {
        setValue('');
        setResult('');
        setDecimalPlaces(2);
    };

    return (
        <div>
            <h1>Logarit thập phân</h1>    
            <p>Logarit thập phân là logarit có cơ số bằng 10.</p>
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
                                value={value}
                                onChange={(e) => setValue(e.target.value)} 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>log x =</td>
                        <td>
                            <input 
                                type="text" 
                                value={result}
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
                /> số thập phân
            </p>
            <input 
                className='button' 
                type="button" 
                value="Hãy tính toán" 
                onClick={handleCalculate} 
            />
            <input 
                className='button' 
                type="reset" 
                value="Xóa nội dung" 
                onClick={handleReset} 
            />
        </div>
    );
}

export default LogaritThapPhan;
