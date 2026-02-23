import React from 'react'
import FreebieButton from './ui/FreebieButton'

const ServiceDetails = () => {
  const services = [
    { id: "web", title: "Web Development", layout: "left", pattern: "grid-4" },
    { id: "branding", title: "Branding & Design", layout: "right", pattern: "grid-4" },
    { id: "app", title: "App Development", layout: "left", pattern: "triangle" },
    { id: "seo", title: "SEO Optimization", layout: "right", pattern: "triangle" },
    { id: "it", title: "IT Consultancy", layout: "left", pattern: "triangle" },
    { id: "training", title: "Training & Mentorship", layout: "right", pattern: "triangle" }
  ];

  return (
    <section className="w-full flex flex-col items-center gap-16 md:gap-28 py-10 md:py-20 px-4 bg-transparent overflow-hidden">
      {services.map((service) => (
        <div key={service.id} className="w-full max-w-[1079px] flex flex-col gap-10 md:gap-16">
          
        
          <div className="w-full flex flex-col justify-start items-center gap-2.5">
            <div className="self-stretch h-px bg-white/20"></div>
            <h2 className="text-center text-[var(--nexura-yellow)] text-3xl md:text-5xl font-semibold font-['General_Sans'] mt-4 leading-tight">
              {service.title}
            </h2>
            <p className="w-full max-w-md text-center text-white text-sm md:text-base font-medium font-['General_Sans'] opacity-70 px-2">
              Meet the brains behind the scenes of our innovations
            </p>
          </div>

          
          <div className="relative w-full">
            
            
            {service.id === "web" && (
              <div className="absolute -top-12 right-0 md:right-0 z-20">
                <FreebieButton />
              </div>
            )}

           
            <div className={`flex flex-col ${service.layout === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center md:items-start justify-between gap-12 md:gap-20 w-full pt-6`}>
              
              
              <div className="relative flex justify-center items-center shrink-0 w-full max-w-[488px] aspect-square md:aspect-auto">
                <div className="scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100 transition-transform duration-500 origin-center md:origin-top-left">
                  {service.pattern === "grid-4" ? (
                    <div className="flex flex-wrap gap-2 w-[488px]">
                       <div className="w-60 h-60 bg-zinc-300 rounded-[68px] shadow-sm" />
                       <div className="w-60 h-60 bg-zinc-300 rounded-[68px] shadow-sm" />
                       <div className="w-60 h-60 bg-zinc-300 rounded-[68px] shadow-sm" />
                       <div className="w-60 h-60 bg-zinc-300 rounded-[68px] shadow-sm" />
                    </div>
                  ) : (
                    <div className="relative w-[488px] h-[488px]">
                      <div className="w-60 h-60 absolute left-0 top-0 bg-zinc-300 rounded-[68px]" />
                      <div className="w-60 h-60 absolute left-[248px] top-0 bg-zinc-300 rounded-[68px]" />
                      <div className="w-60 h-60 absolute left-[124px] top-[248px] bg-zinc-300 rounded-[68px]" />
                    </div>
                  )}
                </div>
              </div>

              
              <div className="w-full max-w-[527px] flex flex-col justify-start items-center md:items-start gap-6 text-center md:text-left">
                <div className="flex flex-col gap-8">
                  <div className="space-y-3">
                    <h4 className="text-white text-lg md:text-xl font-bold font-['General_Sans']">
                      why a website is important:
                    </h4>
                    <p className="text-white text-sm md:text-base font-normal font-['General_Sans'] leading-relaxed opacity-80">
                      We design and build fast, responsive, and user-friendly websites that give your brand a strong online presence and keep customers engaged.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white text-lg md:text-xl font-bold font-['General_Sans']">
                      Who needs a website?
                    </h4>
                    <p className="text-white text-sm md:text-base font-normal font-['General_Sans'] leading-relaxed opacity-80">
                      From startups to established enterprises, any business looking to solidify their digital footprint and drive growth needs a professional web presence.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white text-lg md:text-xl font-bold font-['General_Sans']">
                      How to go about it?
                    </h4>
                    <p className="text-white text-sm md:text-base font-normal font-['General_Sans'] leading-relaxed opacity-80">
                      Our process is collaborative. We start with discovery, move to design and development, and end with a high-performance launch.
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-4 h-12 px-8 py-2.5 bg-transparent rounded-full shadow-[inset_0px_0px_10px_0px_rgba(250,169,115,0.25)] border border-white/10 inline-flex justify-center items-center cursor-pointer hover:bg-white/5 transition-all group active:scale-95">
                  <span className="text-center text-white text-base font-semibold font-['General_Sans']">
                    Get Started Now.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ServiceDetails