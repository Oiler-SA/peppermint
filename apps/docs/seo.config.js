const seoConfig = {
  metadataBase: new URL("https://helpdesk.oiler.pl"),
  title: {
    template: "Peppermint",
    default:
      "Peppermint - Revolutionizing Customer Support for Rapid Resolutions. Your Premier Zendesk Alternative.",
  },
  description:
    "Experience Peppermint's revolutionary approach to customer support, ensuring swift resolutions. Discover your ultimate alternative to Zendesk.",
  themeColor: "#F6E458",
  openGraph: {
    images: "/og-image.png",
    url: "https://helpdesk.oiler.pl",
  },
  manifest: "/site.webmanifest",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "mask-icon", url: "/favicon.ico" },
    { rel: "image/x-icon", url: "/favicon.ico" },
  ],
  twitter: {
    site: "@potts_dev",
    creator: "@potts_dev",
  },
};

export default seoConfig;
