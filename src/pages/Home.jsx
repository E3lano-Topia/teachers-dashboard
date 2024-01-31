import React from "react";
import TableHome from "../components/TableHome";
// import { Ellipse1 } from "../img/Ellipse1.svg";

const Home = () => {
  return (
    <div className="p-5 home-screen ">
      <div className="">
        {/* title */}
        <div className="mb-5">
          <div className="py-2 px-3 gap-3 rounded-full bg-buttonBlue flex justify-center items-center  w-fit">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle cx="20" cy="20" r="20" fill="#F4CB3C" />
              </svg>
            </div>
            <h1 className="text-white font-medium text-lg">آخر الإحصائيات</h1>
          </div>
        </div>
        {/* الاحصائيات */}
        <div className="  flex  justify-center items-center flex-col md:flex-row w-full gap-4 rounded-md mb-10">
          <div className="flex md:justify-between justify-center items-center gap-3 bg-white box-shadow md:w-1/4 w-full h-24 px-5 ">
            <div className="bg-[#EDFDF7] p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M23.2047 11.745C22.3226 9.46324 20.7912 7.48996 18.7998 6.06906C16.8084 4.64817 14.4443 3.84193 11.9997 3.75C9.55507 3.84193 7.19097 4.64817 5.19958 6.06906C3.20819 7.48996 1.6768 9.46324 0.794681 11.745C0.735106 11.9098 0.735106 12.0902 0.794681 12.255C1.6768 14.5368 3.20819 16.51 5.19958 17.9309C7.19097 19.3518 9.55507 20.1581 11.9997 20.25C14.4443 20.1581 16.8084 19.3518 18.7998 17.9309C20.7912 16.51 22.3226 14.5368 23.2047 12.255C23.2643 12.0902 23.2643 11.9098 23.2047 11.745ZM11.9997 18.75C8.02468 18.75 3.82468 15.8025 2.30218 12C3.82468 8.1975 8.02468 5.25 11.9997 5.25C15.9747 5.25 20.1747 8.1975 21.6972 12C20.1747 15.8025 15.9747 18.75 11.9997 18.75Z"
                  fill="#18B477"
                />
                <path
                  d="M12 7.5C11.11 7.5 10.24 7.76392 9.49994 8.25839C8.75991 8.75285 8.18314 9.45566 7.84254 10.2779C7.50195 11.1002 7.41283 12.005 7.58647 12.8779C7.7601 13.7508 8.18869 14.5526 8.81802 15.182C9.44736 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.5 10.8065 16.0259 9.66193 15.182 8.81802C14.3381 7.97411 13.1935 7.5 12 7.5ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45543 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05765 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7957 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15Z"
                  fill="#18B477"
                />
              </svg>
            </div>
            <h1 className="text-xl md:flex-grow-0 flex-grow">عدد المشاهدات</h1>
            <h1 className="text-2xl font-bold">795</h1>
          </div>
          <div className="flex justify-between items-center gap-3 bg-white box-shadow md:w-1/4 w-full h-24 px-5 ">
            <div className="bg-[#EFF5FD] p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <g clipPath="url(#clip0_1179_582)">
                  <path
                    d="M11.9852 14.7131C12.9275 13.9211 13.6033 12.8585 13.9211 11.6694C14.239 10.4802 14.1834 9.22211 13.7619 8.06563C13.3404 6.90916 12.5734 5.9103 11.565 5.20451C10.5566 4.49871 9.35548 4.12015 8.1246 4.12015C6.89371 4.12015 5.69261 4.49871 4.68418 5.20451C3.67575 5.9103 2.90879 6.90916 2.48731 8.06563C2.06583 9.22211 2.01024 10.4802 2.32805 11.6694C2.64587 12.8585 3.32173 13.9211 4.26397 14.7131C2.79264 15.3784 1.51758 16.4116 0.561784 17.7131C0.38525 17.9537 0.311507 18.2545 0.35678 18.5495C0.402052 18.8444 0.562631 19.1093 0.803191 19.2858C1.04375 19.4623 1.34459 19.5361 1.63952 19.4908C1.93445 19.4455 2.19931 19.2849 2.37585 19.0444C3.03748 18.1408 3.90281 17.4058 4.90163 16.8992C5.90046 16.3926 7.00464 16.1286 8.1246 16.1286C9.24455 16.1286 10.3487 16.3926 11.3476 16.8992C12.3464 17.4058 13.2117 18.1408 13.8733 19.0444C14.0499 19.2851 14.3148 19.4458 14.6098 19.4911C14.9048 19.5365 15.2058 19.4628 15.4465 19.2863C15.6872 19.1097 15.8479 18.8448 15.8932 18.5498C15.9386 18.2548 15.8649 17.9538 15.6883 17.7131C14.732 16.4118 13.4567 15.3787 11.9852 14.7131ZM4.3746 10.125C4.3746 9.38333 4.59453 8.65831 5.00659 8.04163C5.41864 7.42494 6.00431 6.94429 6.68953 6.66047C7.37476 6.37664 8.12876 6.30237 8.85618 6.44707C9.58361 6.59176 10.2518 6.94892 10.7762 7.47336C11.3007 7.99781 11.6578 8.666 11.8025 9.39343C11.9472 10.1209 11.873 10.8749 11.5891 11.5601C11.3053 12.2453 10.8247 12.831 10.208 13.243C9.5913 13.6551 8.86628 13.875 8.1246 13.875C7.13003 13.875 6.17621 13.4799 5.47295 12.7767C4.76968 12.0734 4.3746 11.1196 4.3746 10.125ZM23.6965 19.2816C23.5774 19.3691 23.4422 19.4323 23.2987 19.4675C23.1551 19.5028 23.0061 19.5094 22.86 19.4871C22.7139 19.4647 22.5736 19.4137 22.4472 19.3371C22.3209 19.2605 22.2108 19.1598 22.1233 19.0406C21.4601 18.1387 20.5944 17.4051 19.5959 16.8987C18.5975 16.3923 17.4941 16.1273 16.3746 16.125C16.0762 16.125 15.7901 16.0065 15.5791 15.7955C15.3681 15.5845 15.2496 15.2984 15.2496 15C15.2496 14.7016 15.3681 14.4155 15.5791 14.2045C15.7901 13.9935 16.0762 13.875 16.3746 13.875C16.9267 13.8744 17.4719 13.7518 17.9712 13.5161C18.4705 13.2803 18.9116 12.9372 19.263 12.5113C19.6143 12.0854 19.8673 11.5871 20.0038 11.0521C20.1403 10.5171 20.157 9.95851 20.0526 9.41631C19.9483 8.87411 19.7255 8.36164 19.4001 7.91551C19.0748 7.46938 18.655 7.10059 18.1706 6.8355C17.6863 6.5704 17.1494 6.41553 16.5982 6.38196C16.0471 6.34838 15.4954 6.43692 14.9824 6.64126C14.845 6.69753 14.6978 6.72603 14.5493 6.72514C14.4009 6.72424 14.254 6.69397 14.1173 6.63606C13.9806 6.57814 13.8567 6.49374 13.7528 6.38772C13.6488 6.28169 13.5669 6.15614 13.5117 6.0183C13.4565 5.88046 13.4292 5.73305 13.4312 5.58459C13.4333 5.43613 13.4647 5.28954 13.5237 5.15328C13.5827 5.01702 13.668 4.89378 13.7749 4.79067C13.8817 4.68756 14.0079 4.60662 14.1462 4.55251C15.4702 4.0224 16.9398 3.98127 18.2914 4.4365C19.643 4.89173 20.7883 5.81354 21.5218 7.03666C22.2554 8.25977 22.5293 9.7042 22.2943 11.1109C22.0594 12.5177 21.3311 13.7947 20.2399 14.7131C21.7112 15.3784 22.9863 16.4116 23.9421 17.7131C24.1169 17.9539 24.1892 18.2541 24.1431 18.5481C24.0971 18.842 23.9365 19.1058 23.6965 19.2816Z"
                    fill="#2E6FF4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1179_582">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.25)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1 className="text-xl md:flex-grow-0 flex-grow">عدد الطلاب</h1>
            <h1 className="text-2xl font-bold">500</h1>
          </div>
          <div className="flex justify-between items-center gap-3 bg-white box-shadow md:w-1/4 w-full h-24 px-5 ">
            <div className="bg-[#EFF5FD] p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
              >
                <path
                  d="M18.1101 11.808L9.47811 7.49068C9.23409 7.36857 8.96289 7.3109 8.69029 7.32315C8.41769 7.33539 8.15276 7.41716 7.92067 7.56066C7.68858 7.70416 7.49705 7.90464 7.36428 8.14303C7.23151 8.38142 7.16191 8.64981 7.16211 8.92268V17.0773C7.16191 17.3502 7.23151 17.6186 7.36428 17.857C7.49705 18.0954 7.68858 18.2959 7.92067 18.4394C8.15276 18.5829 8.41769 18.6646 8.69029 18.6769C8.96289 18.6891 9.23409 18.6315 9.47811 18.5093L18.1101 14.192C18.3313 14.0812 18.5173 13.911 18.6472 13.7004C18.7772 13.4899 18.846 13.2474 18.846 13C18.846 12.7526 18.7772 12.5101 18.6472 12.2996C18.5173 12.0891 18.3313 11.9189 18.1101 11.808Z"
                  stroke="#2E6FF4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 25C19.1274 25 24.5 19.6274 24.5 13C24.5 6.37258 19.1274 1 12.5 1C5.87258 1 0.5 6.37258 0.5 13C0.5 19.6274 5.87258 25 12.5 25Z"
                  stroke="#2E6FF4"
                />
              </svg>
            </div>
            <h1 className="text-xl md:flex-grow-0 flex-grow">
              إجمالي عدد الحصص
            </h1>
            <h1 className="text-2xl font-bold">50</h1>
          </div>
          <div className="flex justify-between items-center gap-3 bg-white box-shadow md:w-1/4 w-full h-24 px-5 ">
            <div className="bg-[#EFF5FD] p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M14.75 2H6.75C6.21957 2 5.71086 2.21071 5.33579 2.58579C4.96071 2.96086 4.75 3.46957 4.75 4V20C4.75 20.5304 4.96071 21.0391 5.33579 21.4142C5.71086 21.7893 6.21957 22 6.75 22H18.75C19.2804 22 19.7891 21.7893 20.1642 21.4142C20.5393 21.0391 20.75 20.5304 20.75 20V8L14.75 2ZM18.75 20H6.75V4H13.75V9H18.75V20Z"
                  fill="#58647C"
                />
              </svg>
            </div>
            <h1 className="text-xl md:flex-grow-0 flex-grow">
              إجمالي عدد المتحانات
            </h1>
            <h1 className="text-2xl font-bold">15</h1>
          </div>
        </div>
      </div>

      {/* title */}
      <div className="mb-5">
        <div className="py-2 px-3 gap-3 rounded-full bg-buttonBlue flex justify-center items-center  w-fit">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle cx="20" cy="20" r="20" fill="#F4CB3C" />
            </svg>
          </div>
          <h1 className="text-white font-medium text-lg">آخر عمليات الشراء</h1>
        </div>
      </div>
      {/* الجدول */}
      <div className=" overflow-x-auto ">
        <TableHome />
      </div>
    </div>
  );
};

export default Home;
