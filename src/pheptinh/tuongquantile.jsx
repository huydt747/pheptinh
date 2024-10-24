import React, { useState } from 'react';
// import './header.css';
// import logo from './logo.png'

function TuongQuanTiLe() {
    const [x, setx] = useState('');
    const [y, sety] = useState('');
    const [X, setX] = useState('');
    const [Y, setY] = useState('');
    const [ketqua, setKetQua] = useState('');
    const [thuan, setThuan] = useState(true);
    const [thapphan, setThapPhan] = useState(2);

    const handleCalculate = () => {
        const xNum = parseFloat(x);
        const yNum = parseFloat(y);
        const XNum = parseFloat(X);
        
        if (thuan) {
            const calculatedY = (yNum * XNum) / xNum;
            setKetQua(calculatedY.toFixed(thapphan));
        } else {
            const calculatedY = (yNum * xNum) / XNum;
            setKetQua(calculatedY.toFixed(thapphan));
        }
    };

    return (
        <div>
            <h1>Tương quan tỉ lệ</h1>
            <p>Ba đại lượng tương quan tỷ lệ là qui tắc tính tỉ lệ thuận và tỉ lệ nghịch.</p>
            <p><b>Tỉ lệ thuận</b> là mối tương quan giữa hai đại lượng x và y mà trong đó sự gia tăng về giá trị của đại lượng thứ nhất bao nhiêu lần luôn kéo theo sự gia tăng tương ứng về giá trị của đại lượng thứ hai bấy nhiêu lần, và ngược lại</p>
            <p><u>Ví dụ:</u> Tỉ lệ thuận -» càng nhiều, càng hơn:« 1 viên gạch cân nặng 7 kg, vậy 120 viên gạch cân nặng bao nhiêu?</p>
            <p><b>Tỉ lệ nghịch</b> là mối tương quan giữa hai đại lượng, mà nếu tăng đại lượng này bao nhiêu lần thì đại lượng kia giảm bấy nhiêu lần. Nói khác đi là: Nếu “a” là đại lượng thứ nhất, thì đại lượng tỉ lệ nghịch với “a” là “nghịch đảo - có hệ số - của a” (k/a), và “k” là một hằng số dương bất kì.</p>
            <p><i>Ví dụ:</i> Tỉ lệ nghịch -» càng nhiều, càng ít:«Nếu xe đi với vận tốc 50 km/h, thì sẽ đi hết quãng đường trong 35 phút. Nếu xe đi với vận tốc 80 km/h thì sẽ đi hết quãng đường trong bao lâu?</p>
            <h2>Máy tính tỉ lệ thuận nghịch Online</h2>
            <p>Hãy đưa ra các giá trị</p>
            <table className='input'>
                <tbody>
                    <tr>
                        <td><input type="text" value={x} onChange={(e) => setx(e.target.value)} placeholder="X" /></td>
                        <td><input type="text" value={X} onChange={(e) => setX(e.target.value)} placeholder="x" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" value={y} onChange={(e) => sety(e.target.value)} placeholder="Y" /></td>
                        <td><input type="text" value={Y} onChange={(e) => setY(e.target.value)} placeholder="y" /></td>
                    </tr>
                </tbody>
            </table>
            <li>
                <input type="radio" checked={thuan} onChange={() => setThuan(true)} />Tỉ lệ thuận
            </li>
            <li>
                <input type="radio" checked={!thuan} onChange={() => setThuan(false)} />Tỉ lệ nghịch
            </li>
            <p>Làm tròn đến <input className='thapphan' type="text" value={thapphan} onChange={(e) => setThapPhan(e.target.value)} placeholder='2' /> chữ số thập phân</p>
            <input className='button' type="button" value="Hãy tính toán" onClick={handleCalculate} />
            <input className='button' type="reset" value="Xóa nội dung" onClick={() => {
                setx('');
                sety('');
                setX('');
                setY('');
                setKetQua('');
                setThapPhan(2);
            }} />
            <p>Kết quả <input type="text" value={ketqua} readOnly /></p>
        </div>
    );
}

export default TuongQuanTiLe;
