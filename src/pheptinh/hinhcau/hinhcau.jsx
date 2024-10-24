import React, { useState } from 'react';
import congthuc from './congthuc.jpg';
import hinhcau from './hinhcau.jpg';

function HinhCau() {
    const [bankinh, setBanKinh] = useState('');
    const [duongkinh, setDuongKinh] = useState('');
    const [thetich, setTheTich] = useState('');
    const [dientich, setDienTich] = useState('');
    const [thapphan, setThapPhan] = useState(2);

    const calculate = () => {
        let r = bankinh ? parseFloat(bankinh) : diameter ? parseFloat(diameter) / 2 : 0;

        if (r > 0) {
            const V = (4 / 3) * Math.PI * Math.pow(r, 3);
            const S = 4 * Math.PI * Math.pow(r, 2);
            setTheTich(V.toFixed(thapphan));
            setDienTich(S.toFixed(thapphan));
        }
    };

    const reset = () => {
        setBanKinh('');
        setDuongKinh('');
        setTheTich('');
        setDienTich('');
        setThapPhan(2);
    };

    return (
        <div className="hinhcau">
            <h1>Thể tích và diện tích hình cầu</h1>
            <p>Công thức tính thể tích hình cầu, hướng dẫn cách tính diện tích mặt cầu, cách tính thể tích khối cầu</p>
            <p>Mặt cầu (O,R) là mặt được tạo bởi quỹ tích các điểm cách điểm O 1 khoảng chiều dài không đổi bằng bán kính R trong không gian 3 chiều</p>
            <p><u>Khái niệm hình cầu</u></p>
            <p>Hình cầu được tạo bởi tâm và bán kính hoặc đường kính.</p>
            <h2>Các công thức</h2>
            <p><u><b>Công thức tính thể tích khối cầu</b></u>: V = 4/3(π.r³)</p>
            <p><u><b>Diện tích mặt cầu</b></u>: S = 4π.R²</p>
            <p>Trong đó  R là bán kính khối cầu (mặt cầu, hình cầu).</p>
            <img src={hinhcau} alt="Hình cầu" width={300} />
            <img src={congthuc} alt="Công thức" width={200} />
            <h2>Máy tính diện tích hình cầu Online</h2>
            <h3>Hãy đưa ra 1 giá trị</h3>
            <table className='input'>
                <tbody>
                    <tr>
                        <td>r =</td>
                        <td><input type="text" value={bankinh} onChange={(e) => setBanKinh(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>d =</td>
                        <td><input type="text" value={duongkinh} onChange={(e) => setDuongKinh(e.target.value)} /></td>
                    </tr>
                </tbody>
            </table>
            <p>Làm tròn đến <input className='thapphan' type="text" value={thapphan} onChange={(e) => setThapPhan(e.target.value)} placeholder='2'/> chữ số thập phân</p>
            <input className='button' type="button" value="Hãy tính toán" onClick={calculate} />
            <input className='button' type="button" value="Xóa nội dung" onClick={reset} />
            <table className='output'>
                <tbody>
                    <tr>
                        <td>Thể tích V =</td>
                        <td><input type="text" value={thetich} readOnly /></td>
                    </tr>
                    <tr>
                        <td>Diện tích A =</td>
                        <td><input type="text" value={dientich} readOnly /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default HinhCau;
