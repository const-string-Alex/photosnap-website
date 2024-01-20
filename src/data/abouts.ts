interface About {
  images: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  title: string;
  description: string;
  isHero: boolean;
}

export const ABOUTS: About[] = [
  {
    images: {
      desktop: "/assets/home/desktop/create-and-share.jpg",
      tablet: "/assets/home/tablet/create-and-share.jpg",
      mobile: "/assets/home/mobile/create-and-share.jpg",
    },
    title: "Create and share your photo stories.",
    description:
      "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    isHero: true,
  },
  {
    images: {
      desktop: "/assets/home/desktop/beautiful-stories.jpg",
      tablet: "/assets/home/tablet/beautiful-stories.jpg",
      mobile: "/assets/home/mobile/beautiful-stories.jpg",
    },
    title: "Beautiful stories every time",
    description:
      "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    isHero: false,
  },
  {
    images: {
      desktop: "/assets/home/desktop/designed-for-everyone.jpg",
      tablet: "/assets/home/tablet/designed-for-everyone.jpg",
      mobile: "/assets/home/mobile/designed-for-everyone.jpg",
    },
    title: "Designed for everyone",
    description:
      "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.",
    isHero: false,
  },
];
