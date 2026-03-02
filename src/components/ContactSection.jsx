import React from 'react'
import FreebieButton from './ui/FreebieButton' 
import Container from "./ui/Container";


import phoneIcon from "../assets/logos/entypo_old-phone.svg";
import emailIcon from "../assets/logos/mi_email.svg";
import locationIcon from "../assets/logos/famicons_location-sharp.svg";
import mapIcon from "../assets/logos/lets-icons_map-fill.svg";

const ContactDetails = () => {
  return (
    <div className="w-full flex flex-col items-center gap-16 md:gap-20 py-10 px-4">
      <div className="max-w-[1079px] w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch justify-center">
        
        {/* Left: Message Form */}
        <div className="flex-1 w-full bg-[#1a1124] rounded-[40px] md:rounded-[60px] p-7 md:p-10 border border-white/5 shadow-2xl flex flex-col justify-between">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center uppercase tracking-tight">
            Send Us a Message
          </h2>
          
          <form className="flex flex-col gap-4 flex-grow" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label className="text-white/90 text-xs ml-2 font-medium uppercase tracking-wider">Your Full Name</label>
              <input type="text" className="w-full h-11 bg-[#d9d9d9] rounded-[12px] px-4 text-slate-900 outline-none focus:ring-2 ring-[#954CF3] transition-all" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/90 text-xs ml-2 font-medium uppercase tracking-wider">Your Email</label>
              <input type="email" className="w-full h-11 bg-[#d9d9d9] rounded-[12px] px-4 text-slate-900 outline-none focus:ring-2 ring-[#954CF3] transition-all" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/90 text-xs ml-2 font-medium uppercase tracking-wider">Subject</label>
              <input type="text" className="w-full h-11 bg-[#d9d9d9] rounded-[12px] px-4 text-slate-900 outline-none focus:ring-2 ring-[#954CF3] transition-all" />
            </div>

            <div className="flex flex-col gap-1.5 flex-grow">
              <label className="text-white/90 text-xs ml-2 font-medium uppercase tracking-wider">Message</label>
              <textarea className="w-full h-full min-h-[120px] bg-[#d9d9d9] rounded-[12px] p-4 text-slate-900 outline-none focus:ring-2 ring-[#954CF3] transition-all resize-none"></textarea>
            </div>

            <button className="self-center mt-4 px-10 py-3 bg-transparent rounded-full border border-white/30 text-white font-bold hover:bg-white/10 active:scale-95 transition-all text-xs uppercase tracking-widest">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[420px] flex flex-col gap-8">
          
          
          <div className="relative inline-block lg:block">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#954CF3] to-[#FFDD61] bg-clip-text text-transparent text-center lg:text-left leading-tight whitespace-nowrap">
              Our Contact Info
            </h2>
            
            
            <div className="absolute top-6 -right-4 lg:right-[-20px] z-20 scale-90 sm:scale-100">
              <FreebieButton />
            </div>
          </div>
          
          
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-[#1a1124] rounded-2xl flex items-center justify-center border border-white/10 shrink-0 shadow-lg">
                <img src={phoneIcon} alt="Phone" className="w-7 h-7" />
              </div>
              <p className="text-white font-semibold text-base">+237 655 000 000</p>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-[#1a1124] rounded-2xl flex items-center justify-center border border-white/10 shrink-0 shadow-lg">
                <img src={emailIcon} alt="Email" className="w-7 h-7" />
              </div>
              <p className="text-white font-semibold text-base break-all">contact.n3xura@gmail.com</p>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-[#1a1124] rounded-2xl flex items-center justify-center border border-white/10 shrink-0 shadow-lg">
                <img src={locationIcon} alt="Location" className="w-7 h-7" />
              </div>
              <div>
                <p className="text-white font-semibold text-base">Bambili</p>
                <p className="text-white/60 text-xs">Bamenda, Cameroon</p>
              </div>
            </div>
          </div>

          
          <div className="flex-grow w-full min-h-[240px] rounded-[35px] md:rounded-[45px] border border-white/10 bg-[#1a1124]/60 flex items-center justify-center overflow-hidden">
            <div className="w-32 h-32 relative">
                <div className="w-24 h-24 left-[22px] top-[16.50px] absolute bg-indigo-950/40 rounded-xl" />
                <div className="w-2.5 h-2.5 left-[49.50px] top-[77px] absolute bg-indigo-950/40 rounded-full" />
                <img 
                    src={mapIcon} 
                    alt="Map" 
                    className="absolute inset-0 w-full h-full object-contain opacity-80" 
                />
            </div>
          </div>
        </div>
      </div>

     
      <div className="max-w-[1079px] w-full flex flex-col items-center gap-6 py-20 border-t border-white/10 mt-10">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-[#7520E3] via-[#AB6FFA] to-[#6D2AC3] bg-clip-text text-transparent">
          Internship?
        </h2>
        <p className="text-white/70 text-sm md:text-base max-w-md text-center">
          Meet the brains behind the scenes of our innovations
        </p>
        <div className="mt-8 text-white text-4xl md:text-5xl font-bold tracking-tight">
          Coming soon...
        </div>
      </div>
    </div>
  )
}

export default ContactDetails