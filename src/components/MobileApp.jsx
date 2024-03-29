export default function MobileApp() {
  return (
    <div className="bg-[#5d3ebc] flex justify-between items-center bg-mobile-app h-50 rounded-lg text-white">
      <div className="flex flex-col gap-y-3 p-10">
        <h3 className="text-xl font-bold tracking-tight">Getir'i indir!</h3>
        <p className="font-semibold ">İstediğiniz ürünleri dakikalar içinde kapınıza <br />getirelim.</p>
        <nav className="mt-5 flex gap-x-2">
          <a href="https://apps.apple.com/us/app/getir-groceries-in-minutes/id995280265" className="transition-all transform hover:scale-95">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.getir" className="transition-all transform hover:scale-95">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
          </a>
          <a href="https://appgallery.huawei.com/#/app/C100954039" className="transition-all transform hover:scale-95">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
          </a>
        </nav>
      </div>
      <picture className="pt-6 ">
        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
      </picture>
    </div>
  )
}