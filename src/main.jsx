import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Content from "./content.jsx";
import HinhTron from "./pheptinh/hinhtron/hinhtron.jsx";
import TamGiac from "./pheptinh/tamgiac/tamgiac.jsx";
import MayTinhOnline from "./pheptinh/maytinhonline.jsx";
import TinhPhanTram from "./pheptinh/tinhphantram/tinhphantram.jsx";
import TuongQuanTiLe from "./pheptinh/tuongquantile.jsx";
import KhaiCanBac2 from "./pheptinh/khaicanbac2/khaicanbac2.jsx";
import PhuongTrinhBacNhat from "./pheptinh/phuongtrinhbacnhat/phuongtrinhbacnhat.jsx";
import TrungBinhCongDonGian from "./pheptinh/trungbinhcongdongian/trungbinhcongdongian.jsx";
import ChuyenDoiDonViDo from "./pheptinh/chuyendoidonvido.jsx";
import DienTichVaChuVi from "./pheptinh/dientichvachuvi.jsx";
import HamLuongGiac from "./pheptinh/hamluonggiac.jsx";
import LogaritMenu from "./pheptinh/logaritmenu.jsx";
import HinhCau from "./pheptinh/hinhcau/hinhcau.jsx";
import Logarit from "./pheptinh/logarit/logarit.jsx";
import LogaritTuNhien from "./pheptinh/logarittunhien/logarittunhien.jsx";
import LogaritThapPhan from "./pheptinh/logaritthapphan/logaritthapphan.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <App />
    ),
    errorElement:<div>Link loi he thong 404</div>,
    children:[
      {
        path: "/",
        element: <Content/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/may-tinh-online",
        element: <MayTinhOnline/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/tuong-quan-ti-le",
        element: <TuongQuanTiLe/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/tinh-phan-tram",
        element: <TinhPhanTram/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/hinh-tron",
        element: <HinhTron/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/tam-giac",
        element: <TamGiac/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/khai-can-bac-2",
        element: <KhaiCanBac2/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/phuong-trinh-bac-nhat",
        element: <PhuongTrinhBacNhat/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/trung-binh-cong-don-gian",
        element: <TrungBinhCongDonGian/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/chuyen-doi-don-vi-do",
        element: <ChuyenDoiDonViDo/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/dien-tich-va-chu-vi",
        element: <DienTichVaChuVi/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/ham-luong-giac",
        element: <HamLuongGiac/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/logarit-menu",
        element: <LogaritMenu/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/logarit",
        element: <Logarit/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/logarit-tu-nhien",
        element: <LogaritTuNhien/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/logarit-thap-phan",
        element: <LogaritThapPhan/>,
        errorElement:<div>Link loi he thong 404</div>
      },
      {
        path: "/hinh-cau",
        element: <HinhCau/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);