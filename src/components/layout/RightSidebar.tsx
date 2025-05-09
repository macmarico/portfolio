'use client';

export default function RightSidebar() {
  return (
    <div className="rightBar absolute bg-white w-20 h-[calc(100%-160px)] right-0 top-20 hidden md:block">
      <div className="rightBar-page-border-design m-auto h-[calc(100%-150px)] w-[3px] bg-[#c4c4c4]"></div>
      <div className="rightBar-share-container flex flex-col justify-center items-center w-full h-[150px] bg-[#4a5fc1]">
        <div className="text-center text-4xl text-white my-2.5">+</div>
        <div className="text-center w-full my-2.5 text-white">SHARE</div>
      </div>
    </div>
  );
}
