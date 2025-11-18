// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TourCard from "../components/TourCard";

function App() {
  const tours = [
    {
      id: 1,
      title: "Hạ Long Huyền Bí - 3 Ngày 2 Đêm",
      image:
        "https://tructhang.vn/wp-content/uploads/2022/08/Vinh-Ha-Long-1024x576.jpg",
    },
    {
      id: 2,
      title: "Khám phá Phố Cổ Hội An",
      image:
        "https://gocheapv.b-cdn.net/storage/app/media/Travel/h%E1%BB%99i%20an/pho-co-hoi-an.png",
    },
    {
      id: 3,
      title: "Đà Lạt Mộng Mơ - Tour Cắm Trại",
      image:
        "https://samtenhills.vn/wp-content/uploads/2024/11/kinh-nghiem-du-lich-da-lat-1-minh.jpg",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto bg-blue-50 pt-5">
      <Header />
      <hr />
      <main>
        <h1 className="font-bold text-5xl text-blue-500 mt-10 flex justify-around">
          ✈️ TOUR MANAGEMENT SYSTEM
        </h1>
        <h2 className="pt-5 font-medium mb-50 flex justify-around">
          Sẵn Sàng Cất Cánh: Các Điểm Đến Nổi Bật Mà Bạn Không Thể Bỏ Qua Trong
          Mùa Du Lịch Này
        </h2>
        <div className="flex gap-2 my-4 justify-center">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              title={tour.title}
              image={tour.image}
              className="w-1/3 max-w-sm"
            />
          ))}
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
