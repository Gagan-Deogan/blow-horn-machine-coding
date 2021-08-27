import productivityImage from "../assests/images/logos/productivity.png";
import settingImage from "../assests/images/logos/settings.png";
import AcademicCapIcon from "../../assests/images/Icons/AcademicCap.svg";
import ArchiveIcon from "../../assests/images/Icons/Archive.svg";
import CouponIcon from "../../assests/images/Icons/Coupon.svg";
import CodeIcon from "../../assests/images/Icons/Code.svg";
import NotificationIcon from "../../assests/images/Icons/Notification.svg";
import SecureIcon from "../../assests/images/Icons/Secure.svg";
import disneyLogo from "../../assests/images/logos/disney.png";
import googleLogo from "../../assests/images/logos/google.png";
import youtubeLogo from "../../assests/images/logos/youtube.png";
import shopifyLogo from "../../assests/images/logos/shopify.png";
import slackLogo from "../../assests/images/logos/slack.png";
import hubspotLogo from "../../assests/images/logos/hubspot.png";
export const blogs = [
  {
    title: "Refreshing Designs",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.",
    imageSrc:
      "https://images.unsplash.com/photo-1588867702719-969c8ac733d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80",
    badge: "RESOURCES",
    bgColor: "purple-500",
  },
  {
    title: "Healthier Lifestyle",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.",
    imageSrc:
      "https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=333&q=80",
    badge: "RESOURCES",
    bgColor: "blue-500",
  },
  {
    title: "Gaming Evolution",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.",
    imageSrc:
      "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=351&q=80",
    badge: "RESOURCES",
    bgColor: "yellow-500",
  },
];
export const smBlogs = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Best Workstations of the Year",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.",
    badge: "RESOURCES",
    bgColor: "blue-500",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1618297358013-d3cb3e23ce25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Traveling to the moon",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.",
    badge: "RESOURCES",
    bgColor: "red-500",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1623092475365-cad86ed1a263?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    title: "Best place to lost",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.",
    badge: "RESOURCES",
    bgColor: "purple-500",
  },
];
export const breakpoints = {
  "640": {
    spaceBetween: 20,
  },
  "1000": {
    spaceBetween: 25,
  },
};
export const navLinks = [
  { link: "home", name: "Home" },
  { link: "features", name: "Features" },
  { link: "blogs", name: "Blogs" },
  { link: "contact", name: "Contact" },
];

export const details = [
  {
    imageSrc: productivityImage,
    title: "Boost Productivity",
    paragarph:
      "Build an atmosphere that creates productivity in your organization and your company culture.",
    properties: [
      "Maximize productivity and growth",
      "Speed past your competition",
      "Learn the top techniques",
    ],
  },
  {
    imageSrc: settingImage,
    title: "Automated Tasks",
    paragarph:
      "Save time and money with our revolutionary services. We are the leaders in the industry.",
    properties: [
      "Automated task management workflow",
      "Detailed analytics for your data",
      "Some awesome integrations",
    ],
  },
];

export const features = [
  {
    icon: AcademicCapIcon,
    title: "Certifications",
    paragraph:
      "Each of our plan will provide you and your team with certifications",
  },
  {
    icon: NotificationIcon,
    title: "Notifications",
    paragraph:
      "Send out notifications to all your customers to keep them engaged.",
  },
  {
    icon: ArchiveIcon,
    title: "Bundles",
    paragraph: "High-quality bundles of awesome tools to help you out.",
  },
  {
    icon: CodeIcon,
    title: "Developer Tools",
    paragraph:
      "Developer tools to help grow your application and keep it up-to-date.",
  },
  {
    icon: SecureIcon,
    title: "Building Blocks",
    paragraph:
      "The right kind of building blocks to take your company to the next level.",
  },
  {
    icon: CouponIcon,
    title: "Coupons",
    paragraph:
      "Coupons system to provide special offers and discounts for your app.",
  },
];

export const trustedCompanies = [
  {
    src: disneyLogo,
    alt: "disney-logo",
  },
  {
    src: googleLogo,
    alt: "google-logo",
  },
  {
    src: hubspotLogo,
    alt: "hubspot-logo",
  },
  {
    src: youtubeLogo,
    alt: "youtube-logo",
  },
  {
    src: slackLogo,
    alt: "slack-logo",
  },
  {
    src: shopifyLogo,
    alt: "shopify-logo",
  },
];
