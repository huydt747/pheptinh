import './contentmenu.css';
import thapphan from './logaritmenu/logarit-thap-phan.jpg'
import tunhien from './logaritmenu/logarit-tu-nhien.jpg'
import logarit from './logaritmenu/logarit.jpg'

function LogaritMenu(){
    return(
        <>
        <h1>Hàm lượng giác</h1>
        <div className="content-menu">
            <div className="content-item">
                <h4>Logarit thập phân</h4>
                <img src={thapphan} alt="" />
            </div>
            <div className="content-item">
                <h4>Logarit tự nhiên</h4>
                <img src={tunhien} alt="" />
            </div>
            <div className="content-item">
                <h4>Logarit</h4>
                <img src={logarit} alt="" />
            </div>
        </div>
        </>
    )
}
export default LogaritMenu;