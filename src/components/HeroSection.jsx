import React, { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";

export default function HeroSection() {

  const [selected, setSelected] = useState("TR");

  const phones = {
    US: '+1',
    GB: '+44',
    TR: '+90', 
    FR: '+33',
    DE: '+49',
    IT: '+39'
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };

  return (
      <div className="h-auto sm:h-[500px] bg-[#5d3ebc] relative before:bg-gradient-to-r before:from-[#5d3ebc] before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
          <Slider {...settings}>
            <div>
              <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" />
            </div>
            <div>
              <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg" />
            </div>
            <div>
              <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" />
            </div>
          </Slider>
          <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
            <div>
              <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
              <h3 className="text-4xl mt-8 font-semibold text-white">
                Dakikalar içinde kapında
              </h3>
            </div>
            <div className="w-[400px] rounded-lg bg-gray-50 p-6">
              <h4 className="text-[#5d3ebc] text-center font-semibold mb-4 ">Giriş yap veya kayıt ol</h4>
              <div className="grid gap-y-3 ">
                <div className="flex gap-x-2">
                  <ReactFlagsSelect
                      countries={Object.keys(phones)}
                      customLabels={phones}
                      onSelect={code => setSelected(code)}
                      selected={selected}
                      className="flag-select"
                  />
                  <label className="flex-1 relative block ">
                    <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-[#5d3ebc] focus:border-[#5d3ebc] outline-none peer text-sm  pt-2 " />
                    <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-[#838287] transition-all peer-focus:h-7 peer-focus:text-[#5d3ebc] peer-focus:text-xs peer-valid:h-7 peer-valid:text-[#5d3ebc] peer-valid:text-xs ">Telefon Numarası</span>
                  </label>
                </div>
                <button className="bg-[#ffd300] text-[#5d3ebc] transition-colors hover:bg-[#5d3ebc] hover:text-[#ffd300] h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold">
                  Telefon numarası ile devam et
                </button>
                </div>
            </div>
          </div>
      </div>
    )
  } 