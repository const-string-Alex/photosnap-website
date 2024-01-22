interface Heros {
  images: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  title: string;
  content: string;
}

export const HEROS: Heros[] = [
  {
    images: {
      desktop: "/assets/features/desktop/hero.jpg",
      tablet: "/assets/features/tablet/hero.jpg",
      mobile: "/assets/features/mobile/hero.jpg",
    },
    title: "Features",
    content:
      "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
  },
  {
    images: {
      desktop: "/assets/pricing/desktop/hero.jpg",
      tablet: "/assets/pricing/tablet/hero.jpg",
      mobile: "/assets/pricing/mobile/hero.jpg",
    },
    title: "Pricing",
    content:
      "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
  },
];
