import type {
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Omniversify Blog',
  subtitle: 'Omniversify, game development, creative projects, in-development game, progress blog.',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/OMNIVERSIFY.webp',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,

    {
      name: 'GitHub',
      url: 'https://github.com/phaylali/blog',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/favicon.svg',
  name: 'Phaylali',
  bio: 'Founder of Omniversify',
  links: [
    {
      name: 'Twitter',
      icon: 'tabler:brand-twitter',
      url: 'https://twitter.com/phaylali',
    },
    {
      name: 'Twitch',
      icon: 'tabler:brand-twitch',
      url: 'https://twitch.tv/phaylali',
    },
    {
      name: 'YouTube',
      icon: 'tabler:brand-youtube',
      url: 'https://youtube.com/@phaylali',
    },
    {
      name: 'Discord',
      icon: 'tabler:brand-discord',
      url: 'https://omniversify.discord.gg/',
    },
    {
      name: 'Steam',
      icon: 'tabler:brand-steam',
      url: 'https://steamcommunity.com/id/phaylali/',
    },
    {
      name: 'GitHub',
      icon: 'tabler:brand-github',
      url: 'https://github.com/phaylali',
    },
    {
      name: 'TikTok',
      icon: 'tabler:brand-tiktok',
      url: 'https://tiktok.com/@phaylali',
    },
    {
      name: 'Facebook',
      icon: 'tabler:brand-facebook',
      url: 'https://facebook.com/phaylali',
    },
    {
      name: 'Instagram',
      icon: 'tabler:brand-instagram',
      url: 'https://instagram.com/phaylali',
    },
    {
      name: 'Kick',
      icon: 'tabler:brand-kick',
      url: 'https://kick.com/phaylali',
    },
  ],
}

