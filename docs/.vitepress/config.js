// .vitepress/config.js
export default {
  // site-level options
  title: "SystemCAERUS",
  description: "Maintainance Analyzer",

  themeConfig: {
    // theme-level options
    nav: [
      { text: "Home", link: "/" },
      { text: "Contribute", link: "/contribute" },
      { text: "Contact-US", link: "/contact" },
    ],
    sidebar: [
      { text: "Introduction", link: "/" },
      { text: "Installation and Setup", link: "installation" },
      { text: "Getting Started", link: "" },
      { text: "User Interface", link: "" },
      { text: "Features and Functionality", link: "" },
      { text: "Troubleshooting", link: "/troubleshooting" },
      { text: "Frequently Asked Questions (FAQs)", link: "" },
      { text: "AI Intergration", link: "" },
    ],
  },
};
