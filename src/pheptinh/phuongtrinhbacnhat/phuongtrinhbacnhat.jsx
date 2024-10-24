import React, { useState } from 'react';
import congthuc from './phuong-trinh-bac-nhat.jpg';

function PhuongTrinhBacNhat() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [ketqua, setKetQua] = useState('');

    const TinhToan = () => {
        const aValue = parseFloat(a);
        const bValue = parseFloat(b);
        const cValue = parseFloat(c);

        if (aValue === 0) {
            setKetQua('a không được bằng 0!');
        } else {
            const x = (cValue - bValue) / aValue;
            setKetQua(x.toFixed(2));
        }
    };

    const Reset = () => {
        setA('');
        setB('');
        setC('');
        setKetQua('');
    };

    return (
        <div className="phuongtrinhbatnhat">
            <h1>Phương trình bậc nhất</h1>
            <p>Phương trình ax + b = c, với a và b là hai số đã cho và a # 0 được gọi là <b>phương trình bậc nhất một ẩn.</b></p>
            <p>Bảng tính giải phương trình bậc một. Hãy đưa ra phương trình theo dạng mẫu chung.</p>
            <h2>Đồ thị</h2>
            <img src={congthuc} alt="" width={400} />
            <h2>Máy tính giải phương trình bậc 1 Online</h2>
            <h3>Hãy đưa ra biến số</h3>
            <p>
                <input type="text" placeholder="a" value={a} onChange={(e) => setA(e.target.value)}/>
                x + 
                <input type="text" placeholder="b" value={b} onChange={(e) => setB(e.target.value)}/>
                = 
                <input type="text" placeholder="c" value={c} onChange={(e) => setC(e.target.value)}/>
            </p>
            <p>Làm tròn đến 
                <input type="text" placeholder='2' className='thapphan' /> số thập phân
            </p>
            <input className='button' type="button" value="Hãy tính toán" onClick={TinhToan} />
            <input className='button' type="reset" value="Xóa nội dung" onClick={Reset} />
            <p>x = <input type="text" value={ketqua} readOnly /></p>
        </div>
    );
}

export default PhuongTrinhBacNhat;
