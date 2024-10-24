import congthuc from './trung-binh-cong-don-gian.jpg';
import './trungbinhcongdongian.css';
function TrungBinhCongDonGian(){
    return(
        <div className="trungbinhcongdongian">
            <h1>Trung bình cộng đơn giản</h1>        
            <p>Bình cộng đơn giản là kết quả của tổng tất cả các giá trị chia cho số các số hạng. Trung bình cộng đơn giản của một dãy số là thương số giữa tổng giá trị của tập hợp số đó và số phần tử trong tập hợp đó.</p> 
            <h2>Công thức</h2>  
            <p>Trung bình cộng của n số có dạng tổng quát là:</p>
            <img src={congthuc} alt="" />
            <h2>Máy tính giải trung bình cộng Online</h2>
            <h3>Hãy đưa ra các giá trị để tính trung bình</h3>
            <table>
                <tr>
                    <td className='x'>x1</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td className='x'>x2</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td className='x'>x3</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td className='x'>x4</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td className='x'>x5</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td className='x'>x6</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td className='x'>x7</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td className='x'>x8</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td className='x'>x9</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td className='x'>x10</td>
                    <td><input type="text" /></td>
                </tr>
            </table>
            <br />
            <p>Làm tròn đến <input className='thapphan' type="text" placeholder='2' /> chữ số thập phân</p>
            <input className='button' type="button" value="Hãy tính toán" />
            <input className='button' type="reset" value="Xóa nội dung" />
            <p>Trung bình: <input type="text" /></p>
        </div>
    )
}

export default TrungBinhCongDonGian;