export type Event = {
  eventId: string;
  href?: string;
};

export type Partner = {
  name: string;
  logo: string;
  href?: string;
};

export type Events = Array<Event>;

export type TechfestLabel = `v${number}.0`;
export type TechfestValue = {
  path: string;
  startDate: string; //ad
  endDate: string; //ad
  landingPage: {
    header: string;
    desc: string;
    previewVideo: string;
  };
  preEvents?: Events;
  postEvents?: Events;
  mainEvents?: Events;
  partners?: {
    titleSponsor?: Partner & {
      brandColor?: string;
    };
    more?: Array<{
      type: string;
      partners: Array<Partner>;
    }>;
  };
};
export type TechfestData = Record<TechfestLabel, TechfestValue>;

export type CurrentTechfest = TechfestValue & {
  label: TechfestLabel;
};

export const techfestData: TechfestData = {
  "v1.0": {
    path: "/v1.0/",
    startDate: "2026/1/10",
    endDate: "",
    landingPage: {
      desc: "Dive into ACESxEXCESS Taranga—where ideas spark, skills grow, and the future takes shape. Join the action and redefine innovation!",
      header: "Taranga: Ignite Your Innovation",
      previewVideo:
        "https://ik.imagekit.io/4mz6ivdcd/Manual%20Uploads/Videos/ACES%20Promotional%20Video%201.mp4?tr=orig",
    },
    preEvents: [
      {
        eventId: "ai-art-competition",
        href: "https://www.facebook.com/share/p/186iP9hQCW/",
      },
      {
        eventId: "learning-challenge",
        href: "https://www.facebook.com/share/p/1CyEhSS9E8/",
      },
      {
        eventId: "brain-storming-quiz",
        href: "https://www.facebook.com/share/p/1HNnWe8URv/",
      },
    ],
    mainEvents: [
      {
        eventId: "hackathon",
        href: "https://www.facebook.com/share/19Wd8emPbY/",
      },
      {
        eventId: "intern-fest",
        href: "https://www.facebook.com/share/p/15deRVAuWK/",
      },
      {
        eventId: "google-maestro",
        href: "https://www.facebook.com/share/1AqhLAEyDJ/",
      },
      {
        eventId: "datathon",
        href: "https://www.facebook.com/share/15ft4PqbeV/",
      },
      {
        eventId: "ar-bug-hunt",
        href: "https://www.facebook.com/share/15fDxeStim/",
      },
      {
        eventId: "capture-the-flag",
        href: "https://www.facebook.com/share/19hCLvGiwX/",
      },
      {
        eventId: "ui-ux-competition",
        href: "https://www.facebook.com/share/1E4Gd9DGWW/",
      },
      {
        eventId: "game-fest",
        href: "https://www.facebook.com/share/p/18umLThpmg/",
      },
    ],
    partners: {
      // titleSponsor: {
      //   logo: "/assets/images/logo/zaaou.png",
      //   name: "Zaaou",
      //   href: "https://www.facebook.com/ZaaouNepal/",
      //   brandColor: "#E36548",
      // },
      more: [],
    },
  },
};

const currentTechfestLabel: TechfestLabel = "v1.0";
export const currentTechfest: CurrentTechfest = {
  label: currentTechfestLabel,
  ...techfestData[currentTechfestLabel],
};
