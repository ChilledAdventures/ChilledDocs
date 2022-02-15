// Sidebars are defined here - Automatic sidebars is turned off!

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  docs: [
    {
      type: 'link',
      label: 'Website',
      href: 'https://www.chilledadventures.net/'
  },

  {
      type: 'link',
      label: 'Join the Discord!',
      href: 'https://discord.chilledadventures.net',
  },

{
      type: 'category',
      label: 'Getting Started',
      items: [
          'getting_started/welcome',
      ],
},

{
      type: 'category',
      label: 'Kingdoms',
      items: [
          'kingdoms/getting_started/commands',
          'kingdoms/getting_started/online_map',
          'kingdoms/getting_started/structures',
          'kingdoms/getting_started/turrets',
          'kingdoms/getting_started/upgrades',
          'kingdoms/enchants/e_general_info',
          'kingdoms/enchants/enchant_list',
      ]
},
{
      type: 'category',
      label: 'Services',
      collapsed: false,
      items: [
          'services/security',
          'services/expenses',
          'services/cancel-service',
          'services/server-specs',
      ],
},
  ],
};

module.exports = sidebars;
