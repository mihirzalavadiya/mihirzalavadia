//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/p1.webp";
import Project2 from "./assets/img/projects/p2.webp";
import Project3 from "./assets/img/projects/p10.webp";
import Project4 from "./assets/img/projects/p4.webp";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";
import Project7 from "./assets/img/projects/p7.webp";
import Project9 from "./assets/img/projects/p9.webp";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "skills",
    href: "skills",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/mihirzalavadiya",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/mihirzalavadiya",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/mihirzalavadiya1/",
  },
  {
    icon: <FiFacebook />,
    href: "https://www.facebook.com/mihir.zalavadiya.52?ref=bookmarks",
  },
  {
    icon: <FiTwitter />,
    href: "https://twitter.com/ZalavadiyaMihir",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Inventory and Billing Management System",
    category: "Desktop App",
  },
  {
    id: "2",
    image: Project2,
    name: "Shopping Cart",
    category: "Web Development",
  },
  {
    id: "3",
    image: Project9,
    name: "Mall Guide",
    category: "Web Development",
  },
  {
    id: "4",
    image: Project3,
    name: "Product Dashboard",
    category: "UI/UX Design",
  },
  {
    id: "5",
    image: Project4,
    name: "Credit Management",
    category: "Desktop App",
  },
  {
    id: "6",
    image: Project6,
    name: "TV Shop",
    category: "UI/UX Design",
  },
  {
    id: "7",
    image: Project7,
    name: "Photo Graphy",
    category: "web development",
  },
  {
    id: "8",
    image: Project5,
    name: "Caring Claws",
    category: "Mobile App",
  },
];

// projects
export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "Web Development",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can???t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can???t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can???t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at ",
    mail: "mihirzalavadiya@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Khageshri, Porbander",
  },
];
