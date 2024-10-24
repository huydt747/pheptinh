import './contentmenu.css';
import binhhanh from './dientichvachuvi/binh-hanh.jpg'
import chunhat from './dientichvachuvi/chu-nhat.jpg'
import dagiacdeu from './dientichvachuvi/da-giac-deu.jpg'
import lucgiacdeu from './dientichvachuvi/luc-giac-deu.jpg'
import ngugiacdeu from './dientichvachuvi/ngu-giac-deu.jpg'
import pytago from './dientichvachuvi/pytago.jpg'
import tamgiacvuong from './dientichvachuvi/tam-giac-vuong.jpg'
import tamgiac from './dientichvachuvi/tam-giac.jpg'
import thang from './dientichvachuvi/thang.jpg'
import thoi from './dientichvachuvi/thoi.jpg'
import tron from './dientichvachuvi/tron.jpg'
import vuong from './dientichvachuvi/vuong.jpg'

function DienTichVaChuVi(){
    return(
        <>
        <h1>Diện tích và chu vi</h1>
        <div className="content-menu">
            <div className="content-item">
                <h4>Định lý Pytagore</h4>
                <img src={pytago} alt="" />
            </div>
            <div className="content-item">
                <h4>Đa giác đều</h4>
                <img src={dagiacdeu} alt="" />
            </div>
            <div className="content-item">
                <h4>Lục giác đều</h4>
                <img src={lucgiacdeu} alt="" />
            </div>
            <div className="content-item">
                <a href="">
                    <h4>Ngũ giác đều</h4>
                    <img src={ngugiacdeu} alt="" />
                </a>
            </div>
            <div className="content-item">               
                <h4>Diện tích hình thang</h4>
                <img src={thang} alt="" />
            </div>
            <div className="content-item">
                <h4>Hình bình hành</h4>
                <img src={binhhanh} alt="" />
            </div>
            <div className="content-item">
                <h4>Hình thoi</h4>
                <img src={thoi} alt="" />
            </div>
            <div className="content-item">
                <h4>Hình chữ nhật</h4>
                <img src={chunhat} alt="" />
            </div>
            <div className="content-item">
                <h4>Hình vuông</h4>
                <img src={vuong} alt="" />
            </div>
            <div className="content-item">
                <h4>Tam giác</h4>
                <img src={tamgiac} alt="" />
            </div>
            <div className="content-item">        
                <h4>Hình tròn</h4>
                <img src={tron} alt="" />
            </div>
            <div className="content-item">        
                <h4>Tam giác vuông</h4>
                <img src={tamgiacvuong} alt="" />
            </div>
        </div>
        </>
    )
}
export default DienTichVaChuVi;