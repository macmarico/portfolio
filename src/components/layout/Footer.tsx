'use client';

export default function Footer() {
  return (
    <div className="footer-container absolute flex bg-white w-full h-20 md:h-20 bottom-0">
      <div className="footer-page-border-design flex-[0_0_calc(100%-750px)] m-auto h-[3px] bg-[#c4c4c4]">
        <div className="absolute bottom-[10px] left-[30px] text-[8rem] text-[#4a5fc1]">.</div>
      </div>
      <div className="footer flex flex-[0_0_600px] md:flex-[0_0_600px] bg-[#333] h-full text-center text-white p-0 md:p-0 text-xs md:text-base">
        <div className="m-auto">© MANISHCHANDRA.CO 2020 / ALL RIGHTS RESERVED.</div>
      </div>
    </div>
  );
}
