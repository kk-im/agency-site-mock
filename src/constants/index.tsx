// export const navLinks = [
//   { href: "#home", label: "Home" },
//   { href: "#about-us", label: "About Us" },
//   { href: "#products", label: "Products" },
//   { href: "#contact-us", label: "Contact Us" },
// ];

// export const shoes = [
//   {
//     thumbnail: thumbnailShoe1,
//     bigShoe: bigShoe1,
//   },
//   {
//     thumbnail: thumbnailShoe2,
//     bigShoe: bigShoe2,
//   },
//   {
//     thumbnail: thumbnailShoe3,
//     bigShoe: bigShoe3,
//   },
// ];

// export const statistics = [
//   { value: "1k+", label: "Brands" },
//   { value: "500+", label: "Shops" },
//   { value: "250k+", label: "Customers" },
// ];

export interface Article {
  title: string;
  date: string;
  url: string;
}

export const articles: Article[] = [
  {
    title: "the secret sauce to SEO",
    date: "Sep 1, 2022",
    url: "https://www.google.com",
  },
  {
    title: "why you need a content calendar",
    date: "Nov 3, 2022",
    url: "https://www.google.com",
  },
  {
    title: "How to email market",
    date: "May 5, 2023",
    url: "https://www.google.com",
  },
];

export interface Image {
  title: string;
  url: string;
}

export const images: Image[] = [
  {
    title: "the fruit bowl",
    url: "/images/grid-1.png",
  },
  {
    title: "the bread basket",
    url: "/images/grid-2.png",
  },
  {
    title: "the vegan protein bar",
    url: "/images/grid-3.png",
  },
  {
    title: "bichon",
    url: "/images/grid-4.png",
  },
  {
    title: "yalla tel aviv",
    url: "/images/grid-5.png",
  },
];

// export const services = [
//   {
//     imgURL: truckFast,
//     label: "Free shipping",
//     subtext: "Enjoy seamless shopping with our complimentary shipping service.",
//   },
//   {
//     imgURL: shieldTick,
//     label: "Secure Payment",
//     subtext:
//       "Experience worry-free transactions with our secure payment options.",
//   },
//   {
//     imgURL: support,
//     label: "Love to help you",
//     subtext: "Our dedicated team is here to assist you every step of the way.",
//   },
// ];
