import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <div className="sidebar">
            <a href="/tuong-quan-ti-le"><ul >Tương quan tỉ lệ</ul></a>
            <a href="/tinh-phan-tram"><ul>Tính phần trăm</ul></a>
            <button onClick={() => toggleDropdown(1)} className="toggle-button">
                <ul>Diện tích và chu vi [+]</ul>
            </button>
            <ul className={`dropdown ${openDropdown === 1 ? 'open' : ''}`}>
                <a href="/hinh-tron"><li>Hình Tròn</li></a>
                <a href="/tam-giac"><li>Tam Giác</li></a>
                <a href="/tam-giac-vuong"><li>Tam giác vuông</li></a>
                <a href="/hinh-vuong"><li>Hình vuông</li></a>
                <a href="/hinh-chu-nhat"><li>Hình chữ nhật</li></a>
                <a href="/hinh-thoi"><li>Hình thoi</li></a>
                <a href="/hinh-binh-hanh"><li>Hình bình hành</li></a>      
                <a href="/hinh-thang"><li>Hình thang</li></a>
                <a href="/ngu-giac"><li>Ngũ giác</li></a>
                <a href="/luc-giac"><li>Lục giác</li></a>
                <a href="/da-giac"><li>Đa giác</li></a>
                <a href="/dinh-ly-pytagore"><li>Định lý Pytagore</li></a> 
            </ul>
            <button onClick={() => toggleDropdown(2)} className="toggle-button">
                <ul>Lũy thừa và khai căn [+]</ul>
            </button>
            <ul className={`dropdown ${openDropdown === 2 ? 'open' : ''}`}>
                <a href="/khai-can-bac-2"><li>Khai căn bậc 2</li></a>
                <a href="/khai-can-bac-3"><li>Khai căn bậc 3</li></a>
                <a href="/khai-can-bac-n"><li>Khai căn bậc n</li></a>
                <a href="/luy-thua-bac-2"><li>Lũy thừa bậc 2</li></a>
                <a href="/luy-thua-bac-3"><li>Lũy thừa bậc 3</li></a>
                <a href="/luy-thua-bac-n"><li>Lũy thừa bậc n</li></a>
            </ul>
            <button onClick={() => toggleDropdown(3)} className="toggle-button">
                <ul>Phương trình [+]</ul>
            </button>
            <ul className={`dropdown ${openDropdown === 3 ? 'open' : ''}`}>
                <a href="/phuong-trinh-bac-nhat"><li>Phương trình bậc nhất</li></a>
                <a href="/phuong-trinh-bac-hai"><li>Phương trình bậc hai</li></a>
                <a href="/he-phuong-trinh"><li>Hệ phương trình</li></a>
            </ul>
            <button onClick={() => toggleDropdown(4)} className="toggle-button">
                <ul>Trung bình [+]</ul>
            </button>
            <ul className={`dropdown ${openDropdown === 4 ? 'open' : ''}`}>
                <a href="/trung-binh-cong-don-gian"><li>Trung bình cộng đơn giản</li></a>        
                <a href="/trung-binh-cong-co-trong-so"><li>Trung bình cộng có trọng số</li></a>
            </ul>
            <button onClick={() => toggleDropdown(5)} className="toggle-button">
                <ul>Thể tích và diện tích [+]</ul>
            </button>
            <ul className={`dropdown ${openDropdown === 5 ? 'open' : ''}`}>
                <a href="/hinh-cau"><li>Hình cầu</li></a>
                <a href="/hinh-chop"><li>Hình chóp</li></a>
                <a href="/hinh-hop-chu-nhat"><li>Hình hộp chữ nhật</li></a>
                <a href="/hinh-lang-tru"><li>Hình lăng trụ</li></a>
                <a href="/hinh-non"><li>Hình nón</li></a>
                <a href="/hinh-tru-tron"><li>Hình trụ tròn</li></a>
                <a href="/hinh-lap-phuong"><li>Hình lập phương</li></a>
            </ul>
            <button onClick={() => toggleDropdown(6)} className="toggle-button">
                <ul>Hàm lượng giác [+]</ul>
            </button>
            <ul className={`dropdown ${openDropdown === 6 ? 'open' : ''}`}>
                <a href="/sin"><li>Sin</li></a>
                <a href="/cos"><li>Cos</li></a>
                <a href="/tang"><li>Tang</li></a>
                <a href="/cotang"><li>Cotang</li></a>
            </ul>
            <button onClick={() => toggleDropdown(7)} className="toggle-button">
                <ul>Logarit [+]</ul>
            </button>
            <ul className={`dropdown ${openDropdown === 7 ? 'open' : ''}`}>
                <a href="/logarit"><li>Logarit</li></a>
                <a href="/logarit-tu-nhien"><li>Logarit tự nhiên</li></a>
                <a href="/logarit-thap-phan"><li>Logarit thập phân</li></a>
            </ul>
            <button onClick={() => toggleDropdown(8)} className="toggle-button">
                <ul>Năng lượng và nhiên liệu [+]</ul>
            </button>
            <ul className={`dropdown ${openDropdown === 8 ? 'open' : ''}`}>
                <a href="/tieu-thu-dien"><li>Tiêu thụ điện</li></a>
                <a href="/tieu-thu-nhien-lieu"><li>Tiêu thụ nhiên liệu</li></a>
                <a href="/tieu-thu-gas"><li>Tiêu thụ gas</li></a>
            </ul>
            <button onClick={() => toggleDropdown(9)} className="toggle-button">
                <ul>Chuyển đổi đơn vị đo [+]</ul>
            </button>
            <ul className={`dropdown ${openDropdown === 9 ? 'open' : ''}`}>
                <a href="/chieu-dai"><li>Chiều dài</li></a>
                <a href="/dien-tich"><li>Diện tích</li></a>
                <a href="/the-tich"><li>Thể tích</li></a>
                <a href="/khoi-luong"><li>Khối lượng</li></a>
                <a href="/van-toc"><li>Vận tốc</li></a>
                <a href="/nhiet-do"><li>Nhiệt độ</li></a>
                <a href="/goc"><li>Góc</li></a>
                <a href="/cong-suat"><li>Công suất</li></a>
                <a href="/ap-suat"><li>Áp suất</li></a>
                <a href="/nang-luong"><li>Năng lượng</li></a>
                <a href="/thoi-gian"><li>Thời gian</li></a>
            </ul>

            <div className="chude">
                <h3>Chủ đề mới nhất</h3>
                <ul>
                    <li>Đổi Kilôgam (kg) sang Ounce (oz)</li>
                    <li>Đổi Đêcimét vuông (dm2) sang Mét vuông (m2)</li>
                    <li>Đổi Centimet vuông (cm2) sang Mét vuông (m2)</li>
                    <li>Đổi Ki lô mét vuông (km2) sang rd2 (rd2)</li>
                    <li>Đổi Centimet vuông (cm2) sang Thước anh vuông (yd2)</li>
                </ul>
            </div>
        </div>
    );
};

{/* <li>Diện tích và chu vi</li>
<li>Lũy thừa và khai căn</li>
<li>Phương trình</li>
<li>Trung bình</li>
<li>Thể tích và diện tích</li>
<li>Hàm lượng giác</li>
<li>Logarit</li>
<li>Năng lượng và nhiên liệu</li>
<li>Chuyển đổi đơn vị đo</li> */}
export default Sidebar;    