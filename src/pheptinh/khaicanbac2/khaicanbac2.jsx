import React, { useState } from 'react';
import khaican from './khai-can-bac-2.jpg';
import dothi from './do-thi-khai-can.jpg';
import congthuc from './cong-thuc-khai-can.jpg';
function KhaiCanBac2() {
    const [nhap, setNhap] = useState('');
    const [ketqua, setKetQua] = useState('');
    const [thapphan, setThapPhan] = useState(2);

    const TinhToan = () => {
        const number = parseFloat(nhap);
        if (!isNaN(number) && number >= 0) {
            const canhai = Math.sqrt(number).toFixed(thapphan);
            setKetQua(canhai);
        } else {
            const canhai = parseFloat(inputValue);
            if (!isNaN(canhai)) {
                const squaredValue = (canhai * canhai).toFixed(thapphan);
                setKetQua(squaredValue);
            }
        }
    };

    const Reset = () => {
        setNhap('');
        setKetQua('');
        setThapPhan(2);
    };

    return (
        <div className="khaicanbac2">
            <h1>Khai căn bậc 2</h1>
            <p><b>Căn bậc hai</b> của một số a là một số x sao cho x² = a, hay nói cách khác là số x mà bình phương lên thì = a. Ví dụ, 3 và −3 là căn bậc hai của 9 vì 3² = (−3)² = 9.</p>
            <p>Mọi số thực a không âm đều có một căn bậc hai không âm duy nhất, gọi là căn bậc hai chính, ký hiệu √a, ở đây √ được gọi là dấu căn.</p>
            <img src={khaican} alt="" />
            <h2>Đồ thị và công thức</h2>
            <img src={dothi} alt="" width={300} />
            <img src={congthuc} alt="" width={300}/>

            <h2>Máy tính khai căn bậc 2 Online</h2>
            <h3>Hãy đưa ra 1 giá trị</h3>
            <table className="input">
                <tbody>
                    <tr>
                        <td>x=</td>
                        <td><input type="text" value={nhap} onChange={(e) => setNhap(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>căn x</td>
                        <td><input type="text" value={ketqua} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Làm tròn đến <input type="text" className='thapphan' placeholder='2' /> số thập phân</p>
            <input className='button' type="button" value="Hãy tính toán" onClick={TinhToan} />
            <input className='button' type="reset" value="Xóa nội dung" onClick={Reset} />
        </div>
    );
}

export default KhaiCanBac2;
