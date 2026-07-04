// src/components/ProcessSection/ProcessSectionData.js

const ProcessSectionData = {
  // Section header copy
  label: 'How I Work',
  headline: 'From fuzzy to finished.',
  subtext: 'Every engagement — whether it starts with a napkin sketch or a broken product — follows the same disciplined arc.',

  // The 5 steps
  steps: [
    {
      id: 'discover',
      number: '01',
      title: 'Discover',
      description: 'Map the problem space. User research, stakeholder interviews, competitive signals, and technical constraints — before a single frame is drawn.',
    },
    {
      id: 'define',
      number: '02',
      title: 'Define',
      description: 'Frame the right problem. Establish success metrics, scope boundaries, and the one insight that changes how the solution is approached.',
    },
    {
      id: 'design',
      number: '03',
      title: 'Design',
      description: 'Prototype with intent. UX flows, visual language, component specs — every decision traceable back to the user problem and the business goal.',
    },
    {
      id: 'engineer',
      number: '04',
      title: 'Engineer',
      description: 'Build it right. Production-ready code that honours the design, scales with the product, and the next engineer can actually maintain.',
    },
    {
      id: 'ship',
      number: '05',
      title: 'Ship',
      description: 'Release and measure. Deploy with performance in mind, monitor real usage, and treat the first release as the beginning of iteration — not the end.',
    },
  ],
};

export default ProcessSectionData;
