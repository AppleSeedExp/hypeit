import { useEffect } from "react";
import { store } from "../Store";
import John from "../assets/John.png";

import pJohn from "../assets/phoneJohn.png";

import pen from "../assets/pen.png";
import tiktok from "../assets/tiktok.png";
import instagram from "../assets/instagram.png";
import link from "../assets/link.png";
import plus from "../assets/plus.png";
import download from "../assets/download.png";
import box from "../assets/box.png";
import calender from "../assets/calender.png";

import { StoreItem } from "../components/StoreItem";

import website from "../assets/website.png";
import podcast from "../assets/podcast.png";
import tiktokstarterguide from "../assets/starterguide.png";
import videoaudit from "../assets/videoaudit.png";
import coaching from "../assets/coaching.png";
import steps from "../assets/steps.png";
import mail from "../assets/mail.png";

import logo from "../assets/logo.png";
import hypeit from "../assets/hypeit.png";

import { ProductItem } from "../components/ProductItem";

import collet from "../assets/collect.png";
import sell from "../assets/sell.png";
import book from "../assets/book.png";
import custom from "../assets/custom.png";
import recurring from "../assets/recurring.png";
import external from "../assets/url.png";
import hype from "../assets/hype.png";
import phone from "../assets/phone.png";

export const MyStore = () => {
  const [header, setHeader, updateHeader] = store.useState("Header");
  useEffect(() => {
    setHeader("My Store");
  }, []);
  return (
    <div className="p-[20px] flex">
      {header == "My Store" ? (
        <>
          <div className="w-full">
            <div className="border-[1px] border-[#EBEBFF] rounded-[10px] p-[20px] shadow-lg flex mb-6">
              <img src={John} width={100}></img>

              <div className="ml-6 h-[100px] relative">
                <div className="flex items-center">
                  <div className="text-[#00106D] font-bold mr-3">
                    John's Store
                  </div>
                  <img src={pen}></img>
                </div>
                <div className="text-[#707DA0]">@bk1</div>
                <div className="flex absolute bottom-[0px] justify-around">
                  <div className="rounded-[5px] bg-[#F3F6FD] p-[5px]">
                    <img src={tiktok}></img>
                  </div>
                  <div className="rounded-[5px] bg-[#F3F6FD] p-[5px]">
                    <img src={instagram}></img>
                  </div>
                </div>
              </div>
            </div>

            <StoreItem
              img={website}
              title="Official Website"
              price="FREE"
              icon={link}
            />

            <StoreItem
              img={podcast}
              title="My Podcast"
              price="FREE"
              icon={link}
            />

            <StoreItem
              img={tiktokstarterguide}
              title="Tiktok Starter Guide"
              price="FREE"
              icon={download}
            />

            <StoreItem
              img={videoaudit}
              title="Video Audit"
              price="$50.00"
              icon={box}
            />

            <StoreItem
              img={coaching}
              title="1:1 Coaching Call"
              price="$200.00"
              icon={calender}
            />
            <StoreItem
              img={steps}
              title="10 Steps to better content"
              price="$200.00"
              icon={mail}
            />

            <div
              className="btn mt-6 flex justify-center items-center rounded-[10px]"
              onClick={() => {
                setHeader("Choose Product Type");
              }}
            >
              <img src={plus} className="w-[10px] h-[10px] mr-2"></img>
              Add Product
            </div>
          </div>
          <div className="hidden sm:flex min-w-[500px] flex justify-center items-center">
            <img src={phone}></img>
            <div className="absolute w-[320px] h-[640px] text-white scrollcontainer overflow-scroll">
              <div className="flex justify-center">
                <img src={pJohn}></img>
                <div className="absolute top-[120px] text-white text-[25px] font-bold">
                  John's Store
                </div>

                <div className="absolute flex top-[160px] gap-6">
                  <div className="rounded-[5px] bg-[#2D2D2D] p-[5px]">
                    <img src={tiktok}></img>
                  </div>
                  <div className="rounded-[5px] bg-[#2D2D2D] p-[5px]">
                    <img src={instagram}></img>
                  </div>
                </div>
              </div>

              <div className="border-gray border-[1px] rounded-[10px] p-[10px] mt-6 flex items-center gap-6">
                <img src={website} className="w-[60px] rounded-[30px]"></img>
                <div>Official Website</div>
              </div>

              <div className="border-gray border-[1px] rounded-[10px] p-[10px] mt-6">
                <div className="flex items-center gap-6">
                  <img src={podcast} className="w-[80px]"></img>
                  <div>
                    <div>My Podcast</div>
                    <div className="text-[15px]">Check out my podcast</div>
                  </div>
                </div>

                <div className="bg-white text-black text-center rounded-[5px] mt-[10px] p-2 font-bold text-[15px]">
                  Listen
                </div>
              </div>

              <div className="border-gray border-[1px] rounded-[10px] p-[10px] mt-6">
                <div className="flex items-center gap-6">
                  <img
                    src={tiktokstarterguide}
                    className="w-[60px] rounded-[30px]"
                  ></img>

                  <div>
                    <div>TikTok Starter Guide</div>
                    <div className="text-[15px] text-[#38F968]">$5</div>
                  </div>
                </div>
              </div>

              <div className="border-gray border-[1px] rounded-[10px] p-[10px] mt-6">
                <div className="flex items-center gap-6">
                  <img src={videoaudit} className="w-[80px]"></img>
                  <div>
                    <div>Video Audit</div>
                    <div className="text-[15px]">
                      We will personally review your TikTok or Instagram account
                      and help you create a plan to improve
                    </div>
                    <div className="text-[15px] text-[#38F968]">$50</div>
                  </div>
                </div>

                <div className="bg-white text-black text-center rounded-[5px] mt-[10px] p-2 font-bold text-[15px]">
                  Audit My Account
                </div>
              </div>

              <div className="border-gray border-[1px] rounded-[10px] p-[10px] mt-6">
                <div className="flex items-center gap-6">
                  <img src={coaching} className="w-[80px]"></img>
                  <div>
                    <div>1:1 Coaching Call</div>
                    <div className="text-[15px]">
                      Book a private coaching session with me!
                    </div>
                    <div className="text-[15px] text-[#38F968]">$200</div>
                  </div>
                </div>

                <div className="bg-white text-black text-center rounded-[5px] mt-[10px] p-2 font-bold text-[15px]">
                  Book a 1:1 Call With Me
                </div>
              </div>

              <div className="border-gray border-[1px] rounded-[10px] p-[10px] mt-6">
                <div className="flex items-center gap-6">
                  <img src={steps} className="w-[80px]"></img>
                  <div>
                    <div>10 Steps to better content</div>
                    <div className="text-[15px]">
                      Join to download plus get a free weekly TikTok tips
                      newsletter!
                    </div>
                  </div>
                </div>

                <input
                  className="bg-[#222222] text-white rounded-[5px] mt-[10px] p-2 text-[15px] border-gray border-[1px] w-full"
                  placeholder="Enter Your Name"
                ></input>

                <input
                  className="bg-[#222222] text-white rounded-[5px] mt-[10px] p-2 text-[15px] border-gray border-[1px] w-full"
                  placeholder="Enter Your Email"
                ></input>

                <div className="flex gap-2">
                  <select className="bg-[#444444] text-white rounded-[5px] mt-[10px] p-2 text-[15px] border-gray border-[1px] w-[80px]">
                    <option>US +1</option>
                  </select>
                  <input
                    className="bg-[#222222] text-white rounded-[5px] mt-[10px] p-2 text-[15px] border-gray border-[1px] w-full"
                    placeholder="Enter Your Phone Number"
                  ></input>
                </div>

                <div className="bg-white text-black text-center rounded-[5px] mt-[10px] p-2 font-bold text-[15px]">
                  Submit & Download
                </div>
              </div>

              <div className="text-center text-[15px] my-5">Privacy Policy</div>

              <div className="border-gray border-[1px] rounded-[10px] p-[5px] mt-6 flex items-center text-end gap-2 bg-[#f3ddfd]">
                <img src={logo} className="max-h-[20px]"></img>
                <img src={hypeit} className="max-h-[10px]"></img>
                <div className="absolute right-2 text-[15px] text-[#B947F2]">
                  Try 14 Days Free
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="grid gap-[20px] sm:grid-cols-2 justify-around w-full">
          <ProductItem
            img={collet}
            title="Collect Emails / Applications"
            content="Collect Your Audience’s Info with a Lead Magnet."
          />
          <ProductItem
            img={sell}
            title="Sell a Digital Download"
            content="PDFs, Spreadsheets, Templates, Exclusive Content, etc."
          />
          <ProductItem
            img={book}
            title="Book a Time on Your Calendar"
            content="Discovery Calls, Paid Coaching."
          />
          <ProductItem
            img={custom}
            title="Custom Product"
            content="“Ask Me Anything” requests, Audits/Analyses, Video Reviews."
          />

          <ProductItem
            img={recurring}
            title="Recurring Membership"
            content="Charge Recurring Subscriptions."
          />

          <ProductItem
            img={external}
            title="External Link / URL"
            content="Redirect users to an external site or add a Creator’s affiliate link."
          />

          <ProductItem
            img={hype}
            title="Hype It Affiliate Link"
            content="Refer a friend and receive 20% of their Hype It Subscription fee each month!"
          />
        </div>
      )}
    </div>
  );
};
