import ServiceCard from "./ServiceCard";
import { FaCode, FaShieldAlt, FaPenNib, FaSearch, FaNetworkWired, FaGraduationCap } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "We design and build fast, responsive, and user-friendly websites that give your brand a strong online presence.",
    link: "/services/web",
  },
  {
    icon: '🛡️',
    title: "Branding & Design",
    description: "We craft unique brand identities and stunning visuals that communicate your story and leave a lasting impression.",
    link: "/services/design",
  },
  {
    icon: <FaCode />,
    title: "App Development",
    description: "From idea to launch, we create mobile apps that deliver seamless experiences and bring your vision closer to users.",
    link: "/services/app",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    description: "Boost your visibility online with smart SEO strategies that drive traffic, attract the right audience, and grow your business.",
    link: "/services/seo",
  },
  {
    icon: '🛡️',
    title: "IT Consultancy",
    description: "From secure networking to penetration testing and defense strategies, we help safeguard your business with expert solutions.",
    link: "/services/it",
  },
  {
    icon: <FaGraduationCap />,
    title: "Training & Mentorship",
    description: "We empower individuals and teams with hands-on training, mentorship, and resources to excel in tech and shape the future.",
    link: "/services/training",
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}
