module.exports = {
  title: 'KodaDot Documentation',
  description: 'Better understanding KodaDot',
  public: 'docs/assets',
  themeConfig: {
    navbar: [
      {
        text: 'How to get started',
        children: [
          { 
            text: 'How to create wallet', 
            link: '/tutorials/how_to_create_wallet.md' 
          },
          { 
            text: 'How to mint', 
            link: '/tutorials/how_to_mint.md' 
          },
          { 
            text: 'How to top up your wallet',
            link: '/tutorials/how_to_create_wallet.md' 
          },
          {
            text: 'How to file a bug report',
            link: '/tutorials/how_to_bug_report.md'
          },
          {
            text: 'How to airdrop nfts',
            link: '/tutorials/how_to_airdrop.md'
          },
          {
            text: 'Frequently asked questions',
            link: 'FAQ.md'
          },
          {
            text: 'How to make an nft step by step',
            link: 'how-to-make-nft.md'
          },
        ],
      },
      {
        text: 'KodaDot',
        children: [
          {
            text: 'kodadot.xyz',
            link: 'https://kodadot.xyz'
          },
          {
            text: 'Discord',
            link: 'https://discord.gg/kodadot',
          },
          {
            text: 'Twitter',
            link: 'https://twitter.com/kodadot',
          },
          {
            text: 'Meta_Hours (GitHub)',
            link: 'https://github.com/kodadot/nft-gallery/discussions/categories/meta-hours'
          },         
            'meta_hours.md',
          {
            text: 'Presskit & Logo',
            link: 'https://github.com/kodadot/kodadot-presskit',
          },

          'writings.md',
        ]
      },
      {
        text: 'KodaDot Developer',
        children: [
          'developer.md',
          'meta_hours.md',
          { 
            text: 'nft-gallery/issues',
            link: 'https://github.com/kodadot/nft-gallery/issues'
          },
          {
            text: 'nft-gallery/pulls',
            link: 'https://github.com/kodadot/nft-gallery/pulls' 
          },
          {
            text: 'nft-gallery/code',
            link: 'https://github.com/kodadot/nft-gallery'
          },
          {
            text: 'Learn more about contributing',
            link: 'https://github.com/kodadot/nft-gallery/blob/main/CONTRIBUTING.md'
          },
        ]
      }
    ],
  },
}
