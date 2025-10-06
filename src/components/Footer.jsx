import { Link } from "react-router-dom";
import Container from "./ui/Container";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../assets/logos/logo.png";
import locationIcon from '../assets/logos/location.png'
import phoneIcon from '../assets/logos/phone.png'

export default function Footer() {
  return (
    <footer className="section-padding bg-dark">
      <Container>
        {/* Capsule wrapper */}
        <div className="rounded-2xl border border-white/10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.05),0_8px_25px_rgba(0,0,0,0.7)] p-8 w-full  mx-auto  items-center justify-between gap-6 md:gap-12">
          {/* Top row: Logo + contact + socials */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Nexura" className="" />
              <span className="font-bold text-lg text-gradient">Nexura</span>
            </Link>
            <div className="border-t md:hidden border-gray-700 w-full"></div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400 text-sm">
              <span> ✉️ contact.nexura@gmail.com</span>
              <span className="flex items-center gap-1"> <img src={phoneIcon} alt="" /> +237 652 107 619</span>
              <span className=" flex items-center gap-1"> <img src={locationIcon} alt="" />Bamenda, Bambili</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition"><FaTwitter /></a>
              <a href="#" className="hover:text-white transition"><FaLinkedin /></a>
              <a href="#" className="hover:text-white transition"><FaFacebook /></a>
              <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6"></div>

          {/* Bottom copyright */}
          <p className="text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} Nexura | All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
