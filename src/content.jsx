import './content.css';

function Content(){
    return(
        <div>
            <h1>Phép tính trực tuyến, công thức, tính toán</h1>
            <p>Phép tính online là máy tính tính trực tuyến, tính toán công thức, chuyển đổi đơn vị và nhiều công cụ khác cho môn toán giúp việc tính toán dễ dàng!</p>
            <div className="container">
                <a href="/may-tinh-online"><div className="item" >Máy tính Online</div></a>
                <a href="/tuong-quan-ti-le"><div className="item">Tương quan tỉ lệ</div></a>
                <a href="/tinh-phan-tram"><div className="item">Tính phần trăm</div></a>
                <a href="/chuyen-doi-don-vi-do"><div className="item">Chuyển đổi đơn vị đo</div></a>
                <a href="/dien-tich-va-chu-vi"><div className="item">Diện tích và chu vi</div></a>
                <a href="/ham-luong-giac"><div className="item">Hàm lượng giác</div></a>
                <a href="/logarit-menu"><div className="item">Logarit</div></a>   
                <div className="item">Lũy thừa và khai căn</div>
                <div className="item">Năng lượng và nhiên liệu</div>
                <div className="item">Phương Trình</div>
                <div className="item">Thể tích và diện tích</div>
                <div className="item">Trung bình</div>
            </div>           
        </div>
    )
}

export default Content;