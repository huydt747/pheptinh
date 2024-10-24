import React, { useState } from 'react';
import congthuc from './tinh-phan-tram.jpg';

function TinhPhanTram() {
    const [phantram, setPhantram] = useState('');
    const [nhapso, setNhapSo] = useState('');
    const [ketqua, setKetQua] = useState('');
    const [sothapphan, setSoThapPhan] = useState(2);

    const TinhToan = () => {
        const p = parseFloat(phantram);
        const n = parseFloat(nhapso);
        if (!isNaN(p) && !isNaN(n)) {
            const res = (p / 100) * n;
            setKetQua(res.toFixed(sothapphan));
        }
    };

    const Xoa = () => {
        setPhantram('');
        setNhapSo('');
        setKetQua('');
        setSoThapPhan('');
    };

    return (
        <div>
            <h1>Tính phần trăm</h1>
            <p>Hướng dẫn công thức tính % của số, cách tính phần trăm % nhanh nhất chính xác.</p>
            <p>Tính phần trăm có thể có rất nhiều trường hợp khác nhau và yêu cầu khác nhau có thể làm phân vân với các bạn. Trong đó thường gặp nhất là tính phần trăm % chênh lệch giữa 2 năm, % của 1 con số, tính % lãi suất ngân hàng, tính phần % tăng trưởng, phần trăm lợi nhuận, phần trăm hoàn thành…</p>
            <h2>Máy tính Online</h2>
            <h3>X % của số Y là bao nhiêu?</h3>
            <p>Ví dụ: 15 % của 168 là bao nhiêu?</p>
            <img src={congthuc} alt="" width={250} />
            <p>15 % của 168 là 25,2</p>
            <p>
                <input 
                    type="text" value={phantram} onChange={(e) => setPhantram(e.target.value)} placeholder="X" 
                /> % của 
                <input 
                    type="text" value={nhapso} onChange={(e) => setNhapSo(e.target.value)} placeholder="Y" 
                /> là 
                <input 
                    type="text" value={ketqua} readOnly 
                />
            </p>
            <p>Làm tròn đến 
                <input className='thapphan' type="text" value={sothapphan} onChange={(e) => setSoThapPhan(e.target.value)} placeholder='2' 
                /> số thập phân.
            </p>
            <input className='button' type="button" value="Hãy tính toán" onClick={TinhToan} 
            />
            <input className='button' type="button" value="Xóa nội dung" onClick={Xoa} 
            />
        </div>
    );
}

export default TinhPhanTram;
