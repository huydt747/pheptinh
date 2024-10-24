import './contentmenu.css';
import cos from './hamluonggiac/cos.jpg'
import cotag from './hamluonggiac/cotag.jpg'
import sin from './hamluonggiac/sin.jpg'
import tan from './hamluonggiac/tan.jpg'

function HamLuongGiac(){
    return(
        <>
        <h1>Hàm lượng giác</h1>
        <div className="content-menu">
            <div className="content-item">
                <h4>Cotang</h4>
                <img src={cotag} alt="" />
            </div>
            <div className="content-item">
                <h4>Tang</h4>
                <img src={tan} alt="" />
            </div>
            <div className="content-item">
                <h4>Cos</h4>
                <img src={cos} alt="" />
            </div>
            <div className="content-item">
                <a href="">
                    <h4>Sin</h4>
                    <img src={sin} alt="" />
                </a>
            </div>
        </div>
        </>
    )
}
export default HamLuongGiac;