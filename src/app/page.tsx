import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0A0C1C] py-[88px] px-[24px] desktop:py-[177px] desktop:px-[165px]">

      <div className="relative flex flex-col bg-[#1B1937]  rounded-lg desktop:flex-row-reverse ">

        <div className="relative rounded-t-lg min-h-[240px] min-w-[327px] bg-[#AB5CDB] desktop:min-h-[446px] desktop:min-w-[540px] desktop:rounded-r-lg">
          <img className="absolute rounded-t-lg opacity-75 h-full w-full mix-blend-multiply desktop:rounded-r-lg" src="/image-header-mobile.jpg" />
        </div>
        
        <div className="text-center text-white pt-10 pb-8 px-8 desktop:text-left desktop:pt-16 desktop:pb-14 desktop:px-16">
          <div className="font-bold text-[28px] leading-[32px] desktop:text-[36px] desktop:leading-[44px]">Get <span className="text-[#AB5CDB]">insights</span> that help your
            business grow.</div>

          <div className="font-normal text-[15px] leading-[25px] opacity-75 mix-blend-normal mt-4 desktop:mt-6">Discover the benefits of data
            analytics and make better decisions regarding revenue, customer
            experience, and overall efficiency.</div>

          <div className="flex flex-col mt-10 gap-6 desktop:flex-row desktop:mt-16 desktop:gap-16">
            <div className="">
              <div className="font-bold text-2xl leading-[29px]">10k+</div>
              <div className="font-normal text-xs leading-[25px] tracking-[1px] uppercase mix-blend-normal opacity-60 font-ld">companies
              </div>
            </div>
            <div>
              <div className="font-bold text-2xl leading-[29px]">314</div>
              <div className="font-normal text-xs leading-[25px] tracking-[1px] uppercase mix-blend-normal opacity-60 font-ld">templates
              </div>
            </div>
            <div>
              <div className="font-bold text-2xl leading-[29px]">12M+</div>
              <div className="font-normal text-xs leading-[25px] tracking-[1px] uppercase mix-blend-normal opacity-60 font-ld">queries
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
