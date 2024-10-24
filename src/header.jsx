import './header.css';
import logo from './logo.png'
function Header(){
    return(
        <div className="header">
            <a href="/"><img src={logo} alt="" width={150}/></a>
            <a href="/">Trang chủ</a>
            <input className='search' type="text" placeholder='Tìm kiếm'/>
        </div>
    )
}
export default Header;