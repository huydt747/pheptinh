import './contentmenu.css';
import apsuat from './chuyendoidonvido/don-vi-ap-suat.jpg'
import chieudai from './chuyendoidonvido/don-vi-chieu-dai.jpg'
import congsuat from './chuyendoidonvido/don-vi-cong-suat.jpg'
import dientich from './chuyendoidonvido/don-vi-dien-tich.jpg'
import goc from './chuyendoidonvido/don-vi-goc.jpg'
import khoiluong from './chuyendoidonvido/don-vi-khoi-luong.jpg'
import nangluong from './chuyendoidonvido/don-vi-nang-luong.jpg'
import nhietdo from './chuyendoidonvido/don-vi-nhiet-do.jpg'
import thetich from './chuyendoidonvido/don-vi-the-tich.jpg'
import thoigian from './chuyendoidonvido/don-vi-thoi-gian.jpg'
import vantoc from './chuyendoidonvido/don-vi-van-toc.jpg'

function ChuyenDoiDonViDo(){
    return(
        <>
        <h1>Chuyển đổi đơn vị đo</h1>
        <div className="content-menu">
            <div className="content-item">
                <h4>Thời gian</h4>
                <img src={thoigian} alt="" />
            </div>
            <div className="content-item">
                <h4>Năng lượng</h4>
                <img src={nangluong} alt="" />
            </div>
            <div className="content-item">
                <h4>Công suất</h4>
                <img src={congsuat} alt="" />
            </div>
            <div className="content-item">
                <a href="">
                    <h4>Áp suất</h4>
                    <img src={apsuat} alt="" />
                </a>
            </div>
            <div className="content-item">               
                <h4>Góc</h4>
                <img src={goc} alt="" />
            </div>
            <div className="content-item">
                <h4>Nhiệt độ</h4>
                <img src={nhietdo} alt="" />
            </div>
            <div className="content-item">
                <h4>Vận tốc</h4>
                <img src={vantoc} alt="" />
            </div>
            <div className="content-item">
                <h4>Khối lượng</h4>
                <img src={khoiluong} alt="" />
            </div>
            <div className="content-item">
                <h4>Thể tích</h4>
                <img src={thetich} alt="" />
            </div>
            <div className="content-item">
                <h4>Diện tích</h4>
                <img src={dientich} alt="" />
            </div>
            <div className="content-item">        
                <h4>Chiều dài</h4>
                <img src={chieudai} alt="" />
            </div>
        </div>
        </>
    )
}
export default ChuyenDoiDonViDo;