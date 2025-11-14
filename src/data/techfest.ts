export type Event = {
  eventId: string;
  href?: string;
  date?: string;
  by?: "ACES" | "EXCESS";
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
        eventId: "capture-the-flag",
        by: "ACES",
      },
      {
        eventId: "learning-challenge",
        by: "ACES",
        date: "Poush 1 to Poush 15",
      },
      {
        eventId: "brain-storming-quiz",
        by: "ACES",
        date: "Poush 14 to Poush 21",
      },
      {
        eventId: "datathon",
        by: "ACES",
        date: "Poush 23 to Poush 24",
      },
    ],
    mainEvents: [
      {
        eventId: "google-maestro",
        by: "ACES",
        date: "Poush 27",
      },
      {
        eventId: "intern-fest",
        by: "ACES",
        date: "Poush 27, 28",
      },
      {
        eventId: "ar-bug-hunt",
        by: "ACES",
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
