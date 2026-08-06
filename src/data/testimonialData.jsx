export const testimonialData = [
  {
    id: 1,
    company: "ESS VEE ENTERPRISES",
    industry: "ALUMINIUM COMPONENTS",
    location: "CHENNAI",
    text: "The batch-to-batch consistency of SJMW's aluminium alloys has been a game-changer for our production line. Since switching, our rejection rates have plummeted, saving us significant time and material costs. Their commitment to quality ensures every ingot meets our exact specifications without fail.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ) // generic icon, will replace later with proper svg components
  },
  {
    id: 2,
    company: "DIAMOND CASTINGS PVT LTD",
    industry: "INDUSTRIAL CASTINGS",
    location: "CHENNAI",
    text: "In the industrial castings sector, material purity dictates the final product's integrity. SJMW consistently delivers flawless alloy compositions with high purity levels. Their reliable on-time delivery schedules have kept our production lines running smoothly without a single disruption throughout the entire year.",
    icon: null
  },
  {
    id: 3,
    company: "PIONEER INDUSTRIES & FOUNDRY",
    industry: "FOUNDRY & ENGINEERING",
    location: "AMBATTUR, CHENNAI",
    text: "A reliable partner for over a decade. The technical support and material consistency provided by Sri Jothi Moulding Works is exceptional. Their deep understanding of foundry requirements and proactive problem-solving have made them an indispensable part of our long-term engineering success.",
    icon: null
  },
  {
    id: 4,
    company: "G.S.S METAL COMPANY",
    industry: "METAL MANUFACTURING",
    location: "GUINDY, CHENNAI",
    text: "We value SJMW for their unparalleled metallurgical expertise and transparent communication. They are more than just a supplier; they act as technical consultants who help us optimize our manufacturing processes. Their honesty regarding lead times and material specs is refreshing in this industry.",
    icon: null
  },
  {
    id: 5,
    company: "SHANTHI SREE AUTO COMPONENTS",
    industry: "AUTOMOTIVE COMPONENTS",
    location: "CHENNAI",
    text: "Automotive components require zero tolerance for material defects. SJMW provides us with the zero-defect quality confidence needed to guarantee our parts to leading OEMs. Their ingot quality is consistently the benchmark we measure all other suppliers against, ensuring absolute manufacturing excellence.",
    icon: null
  },
  {
    id: 6,
    company: "SUPER ALLOYS AND CASTINGS",
    industry: "ALUMINIUM ALLOY CASTINGS",
    location: "CHENNAI",
    text: "SJMW's ability to produce custom alloy blends with manufacturing excellence is what sets them apart. Their precision in meeting our unique metallurgical requirements has allowed us to expand our product range into high-performance sectors. Truly a leader in aluminium alloy production.",
    icon: null
  }
];

export const getIconForIndustry = (id) => {
  switch (id) {
    case 1:
      // Machine / Component
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      );
    case 2:
      // Factory / Castings
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
          <path d="M17 18h1"></path>
          <path d="M12 18h1"></path>
          <path d="M7 18h1"></path>
        </svg>
      );
    case 3:
      // Foundry
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20"></path>
          <path d="m17 2-5 5-5-5"></path>
          <path d="m17 22-5-5-5 5"></path>
        </svg>
      );
    case 4:
      // Metal Manufacturing
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20"></path>
          <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path>
          <path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6"></path>
          <path d="M12 4v4"></path>
          <path d="M12 16v4"></path>
        </svg>
      );
    case 5:
      // Auto
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
          <circle cx="7" cy="17" r="2"></circle>
          <path d="M9 17h6"></path>
          <circle cx="17" cy="17" r="2"></circle>
        </svg>
      );
    case 6:
      // Layers
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 12 12 17 22 12"></polyline>
          <polyline points="2 17 12 22 22 17"></polyline>
        </svg>
      );
    default:
      return null;
  }
};
