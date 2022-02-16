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
{
      type: 'category',
      label: "Getting Started",
      items: [
          'getting_started/commands',
          'getting_started/online_map',
          'getting_started/structures',
          'getting_started/turrets',
          'getting_started/upgrades',
                    ]
                },
{
      type: 'category',
      label: "Enchantments",
      items: [
          'enchants/e_general_info',
          'enchants/enchantment_list',
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
},
  ],
};

module.exports = sidebars;