export const IMG = 'https://res.cloudinary.com/dahhugaqf/image/upload/q_auto,w_900'

// Each group: { label, partner?, items: [{ t: title, d: one-line description }] }
// partner: true = delivered with our hire, contract-mining or licensed partners.
export const divisions = [
  {
    id: 'mining-support',
    num: '01',
    title: 'Mining Support Services',
    tagline: 'Reliable hands on surface, from the first shift to the last.',
    short: 'Local crews, surface support, conveyor clean-up and mine supplies.',
    intro:
      'A mine runs on the people and small jobs around the main process. We supply the crews, keep conveyor areas clear and get the right goods to site on time.',
    groups: [
      {
        label: 'Delivered by OGP',
        items: [
          {
            t: 'Crews for your site',
            d: 'Local workers who know your site rules. We grow or shrink the team as your production plan changes.',
          },
          {
            t: 'Surface support',
            d: 'Housekeeping, material handling and area clean-ups that keep surface operations moving.',
          },
          {
            t: 'Conveyor spillage clean-up',
            d: 'We clear spillage along belts, chutes and transfer points. That means less belt damage, lower fire risk and fewer unplanned stops.',
          },
          {
            t: 'Mine supplies and consumables',
            d: 'PPE, tools and everyday consumables, sourced and delivered on time at fair prices.',
          },
        ],
      },
    ],
    photo: {
      id: '20230910_120245_ikzxpe',
      alt: 'OGP team working on site at a Sibanye-Stillwater operation with a conveyor belt in the background',
      caption: 'On site at a Sibanye-Stillwater operation',
    },
  },
  {
    id: 'mining-operations',
    num: '02',
    title: 'Mining Operations & Underground Services',
    tagline: 'Specialist mining work, delivered with the right partners.',
    short: 'Mining methods and underground work, with contract-mining partners.',
    intro:
      'Some mining work needs specialist crews and certified equipment. OGP leads the contract, brings the local workforce and looks after the site relationship. Our contract-mining partners carry out the technical work.',
    groups: [
      {
        label: 'Mining methods',
        partner: true,
        items: [
          { t: 'Drill-and-blast support', d: 'Crews and support for conventional mining.' },
          { t: 'Board-and-pillar support', d: 'Development and roof support in pillar layouts.' },
          { t: 'Open-cast operations', d: 'Loading, hauling, overburden removal and pit support.' },
          { t: 'Stoping and development ends', d: 'Help for the crews who keep production faces moving.' },
          { t: 'Secondary support', d: 'Installing extra support so working areas stay safe.' },
          { t: 'Vamping and sweeping', d: 'Recovering fine ore from stopes and gullies.' },
        ],
      },
      {
        label: 'Underground services',
        partner: true,
        items: [
          { t: 'Underground civil works', d: 'Bays, walls, plinths and equipment bases.' },
          { t: 'General equipping', d: 'Pipes, columns and services in new and existing workings.' },
          { t: 'Ventilation', d: 'Building and maintaining walls, doors and ducting.' },
          { t: 'Drains', d: 'Building, cleaning and repairing drains to keep haulages dry.' },
          { t: 'Rail track', d: 'Laying, realigning, replacing and maintaining track.' },
          { t: 'Box fronts and haulages', d: 'Repairs that keep ore moving.' },
          {
            t: 'Reclamation',
            d: 'Recovering materials, equipment, winches, pipes and cables from closing areas.',
          },
        ],
      },
    ],
    photo: null,
  },
  {
    id: 'plant-infrastructure',
    num: '03',
    title: 'Plant, Earthmoving & Mine Infrastructure',
    tagline: 'Machines, water and ground, sorted.',
    short: 'Earthmoving, plant hire, haul roads, dust control, pumps and transport.',
    intro:
      'We bring in machines, operators and pump crews from our hire partners and manage them as part of your job. You deal with one contractor, not five.',
    groups: [
      {
        label: 'Plant and earthworks',
        partner: true,
        items: [
          { t: 'Earthmoving', d: 'Bulk earthworks, trenching, levelling and stockpile handling.' },
          {
            t: 'Yellow plant hire',
            d: 'TLBs, excavators, graders, front-end loaders and tippers, with or without operators.',
          },
          { t: 'Haul road care', d: 'Grading and repairs that keep haul roads safe.' },
          { t: 'Dust control', d: 'Water-cart spraying on roads and work areas.' },
          { t: 'Scaffolding hire', d: 'Scaffolding supplied for building and maintenance jobs.' },
          { t: 'Transport and haulage', d: 'Trucks for materials, rubble and equipment.' },
        ],
      },
      {
        label: 'Water and infrastructure',
        partner: true,
        items: [
          { t: 'Dewatering', d: 'Removing water from workings, pits and sumps.' },
          { t: 'Pumps and sumps', d: 'Supply, installation and upkeep.' },
          { t: 'Engineering support and supplies', d: 'Technical help and parts for mine infrastructure.' },
        ],
      },
    ],
    photo: null,
  },
  {
    id: 'civil-construction',
    num: '04',
    title: 'Civil Construction',
    tagline: 'Walls, houses and repairs built to last.',
    short: 'Boundary walls, demolition, housing and building repairs.',
    intro:
      'We build and repair on school grounds, community sites and mine property. We clear the site first, then build. Right now we are building a 3 m boundary wall at Tshukudu Secondary School for Royal Bafokeng Administration.',
    groups: [
      {
        label: 'Delivered by OGP',
        items: [
          {
            t: 'Boundary and perimeter walls',
            d: 'From foundation to final coat of paint.',
          },
          {
            t: 'Demolition and site clearing',
            d: 'We take down old structures, haul away the rubble and leave the ground ready to build.',
          },
          {
            t: 'RDP and low-cost housing',
            d: 'Houses built from the first foundation to handover.',
          },
          {
            t: 'Repairs and minor works',
            d: 'Plaster, paint, paving and general upkeep for schools, offices and community buildings.',
          },
        ],
      },
      {
        label: 'With our joint-venture partner',
        partner: true,
        items: [
          {
            t: 'Plumbing and drainage maintenance',
            d: 'Planned and call-out work: blockages, leaks, pipe repairs and sewer lines.',
          },
        ],
      },
    ],
    note: 'CIDB registered contractor.',
    photo: {
      id: '20260213_095414_g6a2wo',
      alt: 'OGP bricklaying crew building the boundary wall at Tshukudu Secondary School',
      caption: 'Boundary wall build, Tshukudu Secondary School',
    },
  },
  {
    id: 'industrial-cleaning',
    num: '05',
    title: 'Industrial & Commercial Cleaning',
    tagline: 'Clean sites are safer sites.',
    short: 'Routine and deep cleaning, spillage clean-up, pressure washing.',
    intro:
      'Dust, spillage and waste build up fast on mines and industrial sites. Our teams keep plant areas, workshops and offices clean, which helps safety and cuts downtime.',
    groups: [
      {
        label: 'Delivered by OGP',
        items: [
          {
            t: 'Routine cleaning',
            d: 'Offices, change houses, workshops and ablution blocks, on a set schedule.',
          },
          {
            t: 'Deep cleaning',
            d: 'Once-off or scheduled jobs for shutdowns, handovers and audits.',
          },
          {
            t: 'Spillage clean-up',
            d: 'Clearing material around conveyors, chutes and transfer points.',
          },
        ],
      },
      {
        label: 'With our equipment partners',
        partner: true,
        items: [
          {
            t: 'High-pressure washing',
            d: 'Plant, equipment, structures and floors, stripped of dirt, grease and ore.',
          },
          {
            t: 'Vacuum truck services',
            d: 'Sludge, slurry and liquid waste removed from sumps, drains and tanks.',
          },
        ],
      },
    ],
    photo: null,
  },
  {
    id: 'waste-management',
    num: '06',
    title: 'Waste Management',
    tagline: 'Waste removed, paperwork in order.',
    short: 'Waste collection, illegal dumping clean-up and licensed disposal.',
    intro:
      'We collect and remove waste, and we use licensed disposal partners for anything that needs it. You stay compliant and your site stays clean.',
    groups: [
      {
        label: 'Delivered by OGP',
        items: [
          {
            t: 'General and domestic waste',
            d: 'Scheduled collection from sites, offices, hostels and residential areas.',
          },
          {
            t: 'Illegal dumping clean-up',
            d: 'We clear dumping sites, open spaces and verges and help keep community and mine land tidy.',
          },
        ],
      },
      {
        label: 'Through licensed disposal partners',
        partner: true,
        items: [
          {
            t: 'Industrial waste',
            d: 'Non-hazardous waste taken to licensed facilities, with disposal certificates.',
          },
          { t: 'Scrap metal', d: 'Collected, sorted and removed, with resale value recovered where possible.' },
          {
            t: 'Hazardous waste',
            d: 'Handled, transported and disposed of by licensed hazardous-waste partners, with full documents.',
          },
        ],
      },
    ],
    photo: null,
  },
  {
    id: 'vegetation-control',
    num: '07',
    title: 'Vegetation Control, Landscaping & Grounds',
    tagline: 'Neat, safe and fire-ready, all year.',
    short: 'Grass cutting, landscaping, estate and yard care, firebreaks.',
    intro:
      'Overgrown land is a fire, safety and security risk. We keep mine property, cemeteries, schools, estates and homes tidy with our own equipment and trained crews. We have done this work for Sibanye-Stillwater and Royal Bafokeng Administration.',
    groups: [
      {
        label: 'Delivered by OGP',
        items: [
          {
            t: 'Grass cutting and bush clearing',
            d: 'Regular or once-off, for big open areas and small plots.',
          },
          {
            t: 'Landscaping',
            d: 'Design, planting and upkeep at offices, shafts and estates.',
          },
          {
            t: 'Open spaces and cemeteries',
            d: 'Verges, cemeteries, sports fields and estate common areas, kept in order.',
          },
          {
            t: 'Clearing around infrastructure',
            d: 'Plant, fences, rail sidings, power lines and pipelines kept clear for safe access.',
          },
          {
            t: 'Firebreaks',
            d: 'Cut and maintained so veld fires stay off your site.',
          },
          {
            t: 'Estate and yard care',
            d: 'Monthly grounds care for estates, complexes and private homes.',
          },
        ],
      },
    ],
    photo: {
      id: '20230909_151630_voif2g',
      alt: 'OGP worker cutting grass at a Sibanye-Stillwater operation',
      caption: 'Grass cutting at a Sibanye-Stillwater operation',
    },
  },
]
