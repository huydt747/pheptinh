import React, { useState } from 'react';
import tamgiac from './tamgiac.jpg';
import congthuc from './congthuc.jpg';

function TamGiac() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [alpha, setAlpha] = useState('');
    const [beta, setBeta] = useState('');
    const [gamma, setGamma] = useState('');
    const [Goc, setGoc] = useState('degree');
    const [dientich, setDienTich] = useState('');
    const [chuvi, setChuVi] = useState('');

    const tinhTamGiac = () => {
        const canhA = parseFloat(a);
        const canhB = parseFloat(b);
        const canhC = parseFloat(c);

        if (canhA + canhB > canhC && canhA + canhC > canhB && canhB + canhC > canhA) {
            const p = canhA + canhB + canhC;
            setChuVi(p.toFixed(2));

            let tinhDienTich;

            if (alpha && Goc === 'degree') {
                const alphaRad = (alpha * Math.PI) / 180;
                tinhDienTich = 0.5 * canhA * canhB * Math.sin(alphaRad);
            } else if (alpha && angleUnit === 'rad') {
                tinhDienTich = 0.5 * canhA * canhB * Math.sin(alpha);
            } else {
                const s = p / 2;
                tinhDienTich = Math.sqrt(s * (s - canhA) * (s - canhB) * (s - canhC));
            }

            setDienTich(tinhDienTich.toFixed(2));
        }
    };

    return (
        <div>
            <h1>Diện tích và chu vi của tam giác</h1>
            <p><b>Chu vi tam giác</b> bằng tổng 3 cạnh của tam giác đó.</p>
            <p><b>Diện tích tam giác</b> sẽ bằng 1/2 tích của chiều cao và chiều dài cạnh đáy của tam giác.</p>
            <p><u>Định nghĩa tam giác</u></p>
            <li>Tổng các góc của một tam giác là 180°.</li>
            <li>Đường cao là đường vuông góc từ một điểm tới cạnh đối diện.</li>
            <li>Tâm đường tròn ngoại tiếp là giao điểm đường trung trực của các cạnh.</li>
            <li>Đường trung trực của cạnh là đường vuông góc với cạnh tại trung điểm của cạnh đó.</li>
            <li>Tâm của đường tròn nội tiếp là giao điểm của các đường phân giác.</li>
            <li>Đường phân giác chia góc thành hai nửa bằng nhau.</li>
            <li>Trung tuyến là đường nối đỉnh tam giác với điểm giữa của cạnh đối diện.</li>
            <li>Trung tuyến cắt nhau tại điểm chia chiều dài của chúng theo tỷ lệ 2:1.</li>
            <h2>Các công thức</h2>
            <img src={tamgiac} alt="" width={300} />
            <img src={congthuc} alt="" width={250} />
            <h1>Máy tính diện tích tam giác Online</h1>
            <h2>Hãy đưa ra 3 giá trị</h2>
            <table className='input'>
                <tbody>
                    <tr>
                        <td>a=</td>
                        <td><input type="text" value={a} onChange={(e) => setA(e.target.value)} /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>b=</td>
                        <td><input type="text" value={b} onChange={(e) => setB(e.target.value)} /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>c=</td>
                        <td><input type="text" value={c} onChange={(e) => setC(e.target.value)} /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>α=</td>
                        <td><input type="text" value={alpha} onChange={(e) => setAlpha(e.target.value)} /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>β=</td>
                        <td><input type="text" value={beta} onChange={(e) => setBeta(e.target.value)} /></td>
                        <td>
                            <select value={Goc} onChange={(e) => setGoc(e.target.value)}>
                                <option value="degree">Độ</option>
                                <option value="rad">Rad</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>γ=</td>
                        <td><input type="text" value={gamma} onChange={(e) => setGamma(e.target.value)} /></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <p>Làm tròn đến <input type="text" className='thapphan' placeholder='2' /> số thập phân</p>
            <input className='button' type="button" value="Hãy tính toán" onClick={tinhTamGiac} />
            <input className='button' type="reset" value="Xóa nội dung" onClick={() => {
                setA('');
                setB('');
                setC('');
                setAlpha('');
                setBeta('');
                setGamma('');
                setDienTich('');
                setChuVi('');
                setGoc('degree');
            }} />
            <div className="output">
                <table>
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
        </div>
    );
}

export default TamGiac;
