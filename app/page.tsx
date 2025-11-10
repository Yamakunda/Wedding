"use client"
import React, { useState, useEffect } from 'react';
import Calendar from './calendar';
import LoveRain from './LoveRain';
import MusicPlayer from './music_player';
export default function Home() {
  const data = {
    codau: "Nguyệt Hà",
    chure: "Đăng Chung",
    tencodau: "Nguyễn Thị Nguyệt Hà",
    tenchure: "? Đăng Chung",
    chacodau: "Nguyễn Văn Khang",
    mecodau: "Sầm Thị Thủy",
    chachure: "? ? ?",
    mechure: "? ? ?",
    ttchure: `Chàng trai sở hữu gen di truyền rất hay ngại ngùng. Đa tài nhưng nói không với 
    showbiz. Tương lai sống và làm việc theo chủ nghĩa vô sản.`,
    ttcodau: `Cô gái dù sợ béo nhưng đam mê ẩm thực. Sống và làm việc theo con 
    tim mách bảo nhưng luôn muốn kết quả đạt được theo lí trí.`,
    timeline: [
      { date: "Date 1", description: "Event 1 Description", image: "images/codau.jpg" },
      { date: "Date 2", description: "Event 2 Description", image: "images/chure.jpg" },
      { date: "Date 3", description: "Event 3 Description", image: "images/codau.jpg" },
      { date: "Date 4", description: "Event 4 Description", image: "images/chure.jpg" },
    ],
    thoigian_trai: "11:00 10/03/2023",
    thoigian_gai: "11:00 17/03/2023",
    diachi_trai: "Nhà số 6, ngõ 116, khối Hòa Đông, thị trấn Thạch Giám, huyện Tương Dương, tỉnh Nghệ An",
    diachi_gai: "Xóm 9, xã Xuân Lam, huyện Hưng Nguyên, tỉnh Nghệ An",
    nganhang_codau: {
      nganhang: "Vietcombank",
      tentaikhoan: "Nguyễn Thị Nguyệt Hà",
      sotaikhoan: "123456789",
      chinhanh: "Vietcombank Nghệ An"
    },
    nganhang_chure: {
      nganhang: "Vietcombank",
      tentaikhoan: "Đặng Chung",
      sotaikhoan: "123456789",
      chinhanh: "Vietcombank Nghệ An"
    }
  }
  const [screenWidth, setScreenWidth] = useState(0);
  const albumImages = [
    "https://png.pngtree.com/background/20250102/original/pngtree-a-romantic-white-and-gold-wedding-ceremony-with-delicate-floral-arrangements-picture-image_16015177.jpg",

  ];
  const images = albumImages.map(image => `url("${image}")`);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', updateScreenWidth);
    updateScreenWidth();
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);
  useEffect(() => {
    // Change the background image every 2 seconds
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentImage(images[imageIndex]);
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [imageIndex, images]);
  const backgroundImage = screenWidth > 768
    ? "url('/images/anh_bia.jpg')" // Image for PC
    : "url('/images/anh_bia1.jpg')"; // Image for mobile
  return (
    <main className="w-full items-center justify-center">
      {/* Khuc tren */}
      <LoveRain />
      <MusicPlayer />

      <div className="flex flex-col w-full items-center px-4 sm:px-8 bg-[#ffd1dc] py-6">
        <div className="flex text-lg px-2 sm:px-0 mt-4">
          <span className="dancing-script text-5xl">{data.chure}</span>
          <img src="images/rose.png" className="w-16 h-auto mx-2"></img>
          <span className="dancing-script text-5xl">{data.codau}</span>
        </div>
        <div className='flex flex-row items-center justify-center my-4 parisienne'>
          <div className='border border-[#000] w-24 sm:w-36 mr-2 sm:mr-5'></div>
          <div className='text-[#000000] text-3xl'>Just Married</div>
          <div className='border border-[#000] w-24 sm:w-36 ml-2 sm:ml-5'></div>
        </div>
      </div>
      <div className='border border-[#C5C5CF] w-full'></div>
      {/* Navigation */}
      <div className="w-full flex justify-center items-center inter">
        <div className="flex flex-wrap justify-center">
          <a href="#couple" className="px-4 py-2 my-2 text-center hover:bg-gray-200 rounded-md transition-colors duration-300">Cặp đôi</a>
          <a href="#loveStory" className="px-4 py-2 my-2 text-center hover:bg-gray-200 rounded-md transition-colors duration-300">Chuyện tình yêu</a>
          <a href="#weddingAlbum" className="px-4 py-2 my-2 text-center hover:bg-gray-200 rounded-md transition-colors duration-300">Album hình cưới</a>
          <a href="#weddingEvent" className="px-4 py-2 my-2 text-center hover:bg-gray-200 rounded-md transition-colors duration-300">Sự kiện cưới</a>
          <a href="#congratulations" className="px-4 py-2 my-2 text-center hover:bg-gray-200 rounded-md transition-colors duration-300">Mừng cưới</a>
        </div>
      </div>
      {/* Slide show */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: currentImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center 10%',
        zIndex: -99,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-image 1s ease-in-out', // Smooth transition for background image change
        opacity: 1,
        filter: 'brightness(0.5)',
      }} className='fade-animation'>
      </div>


      <div className="w-full flex items-center justify-center bg-transparent py-8 sm:py-16 px-4 sm:px-48" style={{ height: 'auto', minHeight: '80vh' }}>
        <div className='flex flex-col sm:flex-row w-full h-full space-y-4 sm:space-y-0 sm:space-x-4'>
          {/* Left */}
          <div className='w-full sm:p-12 p-4 border border-white'>
            <div className='border-[#EF9C66] border-4 h-full flex flex-col items-center justify-center space-y-4 p-4 rounded-xl'>
              <div>{data.tencodau}</div>
              <div>{data.ttcodau}</div>
            </div>
          </div>
          {/* Right */}
          <div className='w-full sm:p-12 p-4 border border-white'>
            <div className='border-[#EF9C66] border-4 h-full flex flex-col items-center justify-center space-y-4 p-4 rounded-xl'>
              <div>{data.tenchure}</div>
              <div>{data.ttchure}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Countdown */}
      <div className="w-full flex items-center justify-center bg-[#F6F1F3] py-8 sm:py-16 px-4 sm:px-48" style={{ height: 'auto', minHeight: '80vh' }}>
        <div className='flex flex-col sm:flex-row w-full h-full space-y-4 sm:space-y-0 sm:space-x-4'>
          {/* Left */}
          <div className='w-full sm:p-12 p-4 border border-white'>
            <div className='border-[#EF9C66] border-4 h-full flex flex-col items-center justify-center space-y-4 p-4 rounded-xl'>
              <div>
                Save the Date
              </div>
              <div>
                For the wedding of
              </div>
              <div>
                {data.chure} & {data.codau}
              </div>
              <div className='text-center'>
                {data.codau} rất mong nhận được lời chúc iu thương của mọi người. Biết ơn vì đã xuất hiện trong websites của {data.codau} ^^
              </div>
              <button className='px-4 py-2 bg-[#EF9C66] flex items-center'>
                Gửi lời chúc
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9L15 12M15 12L12 15M15 12L7 12" stroke="#151515" />
                </svg>
              </button>
            </div>
          </div>
          {/* Right */}
          <div className='w-full sm:p-12 p-4 border border-white'>
            <div className='border-[#EF9C66] border-4 h-full flex flex-col items-center justify-center rounded-xl'>
              <Calendar></Calendar>
            </div>
          </div>
        </div>
      </div>
      {/* Love Story */}
      {/* Timeline */}
      <div id="loveStory" className="w-full flex flex-col items-center justify-center py-8">
        <h2 className="text-2xl font-bold mb-4">Our Love Story</h2>
        <div className="flex flex-col items-center justify-center">
          {data.timeline.map((event, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'} items-stretch justify-center mb-8 w-full px-4 flex-wrap`}>
              <img src={event.image} alt={`Event ${index + 1}`} className="w-full md:w-1/4 h-auto object-cover" />
              <div className="flex flex-col justify-center items-center text-center p-4 w-full md:w-1/4 ">
                <p className="text-lg font-semibold">{event.date}</p>
                <p className="text-md">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sự kiện cưới */}
      <div id="weddingEvent" className="w-full flex flex-col items-center justify-center bg-[#F6F1F3] py-8">
        <img src="images/rose.png" className='h-24 w-auto'></img>
        <div className="text-center text-xl font-bold">Sự kiện cưới</div>
        <p className="text-center mt-4 px-4">...Mọi người ghé thăm 2 gia đình để không say không về nhé! Mong mọi người lắm!...</p>

        <div className="w-full flex items-center justify-center bg-[#F6F1F3] py-8 sm:py-16 px-4 text-center">
          <div className="flex flex-col sm:flex-row w-full max-w-4xl space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Left */}
            <div className="w-full sm:w-1/2 p-4 border border-white flex flex-col items-center justify-center space-y-4">
              <div className="text-lg font-semibold">Lễ vu quy</div>
              <div className="w-48 h-48 relative">
                <img src="images/codau_vuong.jpg" className="absolute object-cover w-full h-full" alt="Lễ cưới nhà trai" />
              </div>
              <div className='text-center'>{data.thoigian_gai}</div>
              <div className='text-center'>{data.diachi_gai}</div>
              <a href="https://maps.app.goo.gl/KTW1VpmT26i7gnhW6" className="rounded-full px-4 py-2 border border-[#C89D9C] hover:bg-[#FFFEEE]">
                Địa chỉ nhà gái
              </a>
            </div>
            {/* Right */}
            <div className="w-full sm:w-1/2 p-4 border border-white flex flex-col items-center justify-center space-y-4">
              <div className="text-lg font-semibold">Lễ tân hôn</div>
              <div className="w-48 h-48 relative">
                <img src="images/chure.jpg" className="absolute object-cover w-full h-full" alt="Lễ cưới nhà trai" />
              </div>
              <div className='text-center'>{data.thoigian_trai}</div>
              <div className='text-center'>{data.diachi_trai}</div>
              <a href="https://maps.app.goo.gl/DgvoNkLGkqV9efWN7" className="rounded-full px-4 py-2 border border-[#C89D9C] hover:bg-[#FFFEEE]">
                Địa chỉ nhà trai
              </a>
            </div>
          </div>
        </div>
        {/* Tiệc thành hôn */}
        <div className="w-full sm:w-1/2 p-4 border border-white flex flex-col items-center justify-center space-y-4">
          <div className="text-lg font-semibold">Tiệc thành hôn</div>
          <div className="w-48 h-48 relative">
            <img src="images/chure.jpg" className="absolute object-cover w-full h-full" alt="Lễ cưới nhà trai" />
          </div>
          <div className='text-center'>{data.thoigian_trai}</div>
          <div className='text-center'>{data.diachi_trai}</div>
          <a href="https://maps.app.goo.gl/DgvoNkLGkqV9efWN7" className="rounded-full px-4 py-2 border border-[#C89D9C] hover:bg-[#FFFEEE]">
            Địa chỉ tiệc cưới
          </a>
        </div>
      </div>

      <div id="congratulations" className="w-full flex flex-col items-center justify-center bg-[#F6F1F3] py-8">
        <img src="images/rose.png" className='h-24 w-auto'></img>
        <div className="text-center text-xl font-bold">Hộp mừng cưới</div>
        <div className="w-full flex items-center justify-center bg-[#F6F1F3] py-8 sm:py-16 px-4 text-center">
          <div className="flex flex-col sm:flex-row w-full max-w-4xl space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Left */}
            <div className="w-full sm:w-1/2 p-4 border border-[#C89D9C] rounded-xl flex flex-col items-center justify-center space-y-4 text-sm sm:text-base">
              <div className="text-lg font-semibold">Mừng cưới đến cô dâu</div>
              <div className="w-48 h-48 relative">
                <img src="images/qrcode_codau.jpg" className="absolute object-cover w-full h-full" alt="Mã cô dâu" />
              </div>
              <div className='text-center flex gap-1'> Ngân hàng: <div className="font-medium">{data.nganhang_codau.nganhang}</div></div>
              <div className='text-center flex gap-1'> Tên tài khoản: <div className="font-medium">{data.nganhang_codau.tentaikhoan}</div></div>
              <div className='text-center flex gap-1'> Số tài khoản: <div className="font-medium">{data.nganhang_codau.sotaikhoan}</div></div>
              <div className='text-center flex gap-1'> Chi nhánh: <div className="font-medium">{data.nganhang_codau.chinhanh}</div></div>
            </div>
            {/* Right */}
            <div className="w-full sm:w-1/2 p-4 border border-[#C89D9C] rounded-xl flex flex-col items-center justify-center space-y-4 text-sm sm:text-base">
              <div className="text-lg font-semibold">Mừng cưới đến chú rể</div>
              <div className="w-48 h-48 relative">
                <img src="images/qrcode_codau.jpg" className="absolute object-cover w-full h-full" alt="Mã chú rể" />
              </div>
              <div className='text-center flex gap-1'> Ngân hàng: <div className="font-medium">{data.nganhang_chure.nganhang}</div></div>
              <div className='text-center flex gap-1'> Tên tài khoản: <div className="font-medium">{data.nganhang_chure.tentaikhoan}</div></div>
              <div className='text-center flex gap-1'> Số tài khoản: <div className="font-medium">{data.nganhang_chure.sotaikhoan}</div></div>
              <div className='text-center flex gap-1'> Chi nhánh: <div className="font-medium">{data.nganhang_chure.chinhanh}</div></div>
            </div>
          </div>
        </div>
      </div>
      <footer style={{ width: '100%', textAlign: 'center', padding: '10px', backgroundColor: '#f0f0f0' }}>
        Designed by <span className="font-medium">em Sơn</span>
      </footer>
    </main>
  );
}
