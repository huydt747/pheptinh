import React, { useState } from 'react';
import hinhtron from'./hinhtron.jpg';
import congthuc from'./congthuc.jpg';
function HinhTron() {
    const [bankinh, setBanKinh] = useState('');
    const [duongkinh, setDuongKinh] = useState('');
    const [dientich, setDienTich] = useState('');
    const [chuvi, setChuvi] = useState('');
    const [sothapphan, setSoThapPhan] = useState('');

    const calculate = () => {
        const r = parseFloat(bankinh);
        const d = parseFloat(duongkinh);
        
        const CTDienTich = Math.PI * (r ** 2);
        const CTChuVi = 2 * Math.PI * r;

        const LamTronDienTich = CTDienTich.toFixed(sothapphan || 2);
        const LamTronChuVI = CTChuVi.toFixed(sothapphan || 2);

        setDienTich(LamTronDienTich);
        setChuvi(LamTronChuVI);
    };

    return (
        <div>
            <h1>Hình tròn</h1>
            <p><b>Chu vi c của hình tròn</b> bằng chu vi của đường tròn bao quanh nó, tức là bằng pi nhân với hai lần bán kính r (đường kính d)</p>
            <p><b>Diện tích hình tròn</b> bằng pi nhân với bình phương bán kính của đường tròn bao quanh</p>
            <h2>Các công thức</h2>
            <img src={hinhtron} alt="" width={300} />
            <img src={congthuc} alt="" width={250} />

            <h1>Máy tính diện tích hình tròn Online</h1>
            <p>Hãy đưa ra 1 giá trị</p>
            <table className='input'>
                <tbody>
                    <tr>
                        <td>r=</td>
                        <td><input type="text" value={bankinh} onChange={(e) => setBanKinh(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>d=</td>
                        <td><input type="text" value={duongkinh} onChange={(e) => setDuongKinh(e.target.value)} /></td>
                    </tr>
                </tbody>
            </table>
            <p>Làm tròn đến <input className='thapphan' type="text" value={sothapphan} onChange={(e) => setSoThapPhan(e.target.value)} placeholder='2'/> chữ số thập phân</p>
            <input className='button' type="button" value="Hãy tính toán" onClick={calculate} />
            <input className='button' type="reset" value="Xóa nội dung" onClick={() => {
                setBanKinh('');
                setDuongKinh('');
                setDienTich('');
                setChuvi('');
                setSoThapPhan('');
            }} />
            <table className="output">
                <tbody>
                    <tr>
                        <td>Diện tích S =</td>
                        <td><input type="text" value={dientich} readOnly /></td>
                    </tr>
                    <tr>
                        <td>Chu vi P =</td>
                        <td><input type="text" value={chuvi} readOnly /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default HinhTron;