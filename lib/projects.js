export const IMG = 'https://res.cloudinary.com/dahhugaqf/image/upload/q_auto,w_800'

export const projects = [
  {
    id: 'tshukudu-wall',
    client: 'Royal Bafokeng Administration',
    title: 'Tshukudu Secondary School boundary wall',
    service: 'Civil construction',
    year: '2026',
    status: 'Ongoing',
    line: '3 m boundary wall: demolition, rubble removal, building, plastering and painting.',
    photos: [
      { id: '20260211_111603_rplfr4', alt: 'OGP crew on the boundary wall at Tshukudu Secondary School' },
      { id: '20260225_081421_k73rl4', alt: 'Concrete pump pouring the wall foundation at Tshukudu Secondary School' },
    ],
  },
  {
    id: 'sibanye-k6',
    client: 'Sibanye-Stillwater',
    title: 'K6 Shaft landscaping and maintenance',
    service: 'Vegetation control',
    year: '2023',
    status: 'Completed',
    line: 'Landscaping and site maintenance at K6 Shaft.',
    photos: [],
  },
  {
    id: 'rbn-cemeteries',
    client: 'Royal Bafokeng Nation villages',
    title: 'Cemetery grass cutting in RBN villages',
    service: 'Vegetation control',
    year: null,
    status: 'Repeat work',
    line: 'Grass cutting at cemeteries across Royal Bafokeng Nation villages, carried out over several years.',
    photos: [],
  },
  {
    id: 'sibanye-grass',
    client: 'Sibanye-Stillwater',
    title: 'Grass cutting at PGM operations',
    service: 'Vegetation control',
    year: null,
    status: 'Completed',
    line: 'Grass cutting and bush clearing at working mine sites in Rustenburg.',
    photos: [
      { id: '20230909_151630_voif2g', alt: 'OGP worker cutting grass at a Sibanye-Stillwater operation' },
      { id: '20230910_120245_ikzxpe', alt: 'OGP team on site at Sibanye-Stillwater with a conveyor belt behind them' },
    ],
  },
  {
    id: 'kwete-rdp',
    client: 'Kwete Holdings',
    title: 'RDP housing construction',
    service: 'Civil construction',
    year: null,
    status: 'Completed',
    line: 'Construction of RDP houses.',
    photos: [],
  },
]

export const recentProjects = ['tshukudu-wall', 'sibanye-k6', 'rbn-cemeteries'].map(
  id => projects.find(p => p.id === id)
)
