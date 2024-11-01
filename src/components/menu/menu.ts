export type MenuItem = {
  name: string;
  icon?: string;
  to?: string;
  href?: string;
  badge?: string;
  children?: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    name: 'Dashboards',
    icon: 'pi pi-home',
    children: [
      {
        name: 'CRM',
        to: '/crm'
      }
    ]
  },
  {
    name: 'Components',
    icon: 'pi pi-compass',
    href: 'https://primevue.org/',
    badge: 'PrimeVue'
  },
  {
    name: 'Getting Started',
    icon: 'pi pi-home',
    children: [
      {
        name: 'Introduction',
        to: '/introduction'
      },
      {
        name: 'Setup',
        to: '/setup'
      },
      {
        name: 'Playground',
        to: '/playground'
      }
    ]
  },
  {
    name: 'Installation',
    icon: 'pi pi-cloud-download',
    children: [
      {
        name: 'Vite',
        to: '/vite'
      },
      {
        name: 'Nuxt',
        to: '/nuxt'
      },
      {
        name: 'CDN',
        to: '/cdn'
      }
    ]
  },
  {
    name: 'Configuration',
    icon: 'pi pi-cog',
    children: [
      {
        name: 'Options',
        to: '/configuration'
      },
      {
        name: 'Auto Import',
        to: '/autoimport'
      }
    ]
  },
  {
    name: 'Theming',
    icon: 'pi pi-palette',
    children: [
      {
        name: 'Styled Mode',
        to: '/theming/styled'
      },
      {
        name: 'Unstyled Mode',
        to: '/theming/unstyled'
      }
    ]
  },
  {
    name: 'Components',
    icon: 'pi pi-compass',
    children: [
      {
        name: 'Form',
        children: [
          {
            name: 'AutoComplete',
            to: '/autocomplete'
          },
          {
            name: 'CascadeSelect',
            to: '/cascadeselect'
          },
          {
            name: 'Checkbox',
            to: '/checkbox'
          },
          {
            name: 'ColorPicker',
            to: '/colorpicker'
          },
          {
            name: 'DatePicker',
            to: '/datepicker'
          },
          {
            name: 'Editor',
            to: '/editor'
          },
          {
            name: 'FloatLabel',
            to: '/floatlabel',
            badge: 'NEW'
          },
          {
            name: 'IconField',
            to: '/iconfield'
          },
          {
            name: 'IftaLabel',
            to: '/iftalabel',
            badge: 'NEW'
          },
          {
            name: 'InputGroup',
            to: '/inputgroup'
          },
          {
            name: 'InputMask',
            to: '/inputmask'
          },
          {
            name: 'InputNumber',
            to: '/inputnumber'
          },
          {
            name: 'InputOtp',
            to: '/inputotp'
          },
          {
            name: 'InputText',
            to: '/inputtext'
          },
          {
            name: 'KeyFilter',
            to: '/keyfilter',
            badge: 'NEW'
          },
          {
            name: 'Knob',
            to: '/knob'
          },
          {
            name: 'Listbox',
            to: '/listbox'
          },
          {
            name: 'MultiSelect',
            to: '/multiselect'
          },
          {
            name: 'Password',
            to: '/password'
          },
          {
            name: 'RadioButton',
            to: '/radiobutton'
          },
          {
            name: 'Rating',
            to: '/rating'
          },
          {
            name: 'Select',
            to: '/select'
          },
          {
            name: 'SelectButton',
            to: '/selectbutton'
          },
          {
            name: 'Slider',
            to: '/slider'
          },
          {
            name: 'Textarea',
            to: '/textarea'
          },
          {
            name: 'ToggleButton',
            to: '/togglebutton'
          },
          {
            name: 'ToggleSwitch',
            to: '/toggleswitch'
          },
          {
            name: 'TreeSelect',
            to: '/treeselect'
          }
        ]
      },
      {
        name: 'Button',
        children: [
          {
            name: 'Button',
            to: '/button'
          },
          {
            name: 'SpeedDial',
            to: '/speeddial'
          },
          {
            name: 'SplitButton',
            to: '/splitbutton'
          }
        ]
      },
      {
        name: 'Data',
        children: [
          {
            name: 'DataTable',
            to: '/datatable'
          },
          {
            name: 'DataView',
            to: '/dataview'
          },
          {
            name: 'OrderList',
            to: '/orderlist'
          },
          {
            name: 'OrgChart',
            to: '/organizationchart'
          },
          {
            name: 'Paginator',
            to: '/paginator'
          },
          {
            name: 'PickList',
            to: '/picklist'
          },
          {
            name: 'Timeline',
            to: '/timeline'
          },
          {
            name: 'Tree',
            to: '/tree'
          },
          {
            name: 'TreeTable',
            to: '/treetable'
          },
          {
            name: 'VirtualScroller',
            to: '/virtualscroller'
          }
        ]
      },
      {
        name: 'Panel',
        children: [
          {
            name: 'Accordion',
            to: '/accordion'
          },
          {
            name: 'Card',
            to: '/card'
          },
          {
            name: 'Deferred',
            to: '/deferredcontent'
          },
          {
            name: 'Divider',
            to: '/divider'
          },
          {
            name: 'Fieldset',
            to: '/fieldset'
          },
          {
            name: 'Panel',
            to: '/panel'
          },
          {
            name: 'ScrollPanel',
            to: '/scrollpanel'
          },
          {
            name: 'Splitter',
            to: '/splitter'
          },
          {
            name: 'Stepper',
            to: '/stepper'
          },
          {
            name: 'Tabs',
            to: '/tabs'
          },
          {
            name: 'Toolbar',
            to: '/toolbar'
          }
        ]
      },
      {
        name: 'Overlay',
        children: [
          {
            name: 'ConfirmDialog',
            to: '/confirmdialog'
          },
          {
            name: 'ConfirmPopup',
            to: '/confirmpopup'
          },
          {
            name: 'Dialog',
            to: '/dialog'
          },
          {
            name: 'Drawer',
            to: '/drawer'
          },
          {
            name: 'DynamicDialog',
            to: '/dynamicdialog'
          },
          {
            name: 'Popover',
            to: '/popover'
          },
          {
            name: 'Tooltip',
            to: '/tooltip'
          }
        ]
      },
      {
        name: 'File',
        children: [
          {
            name: 'Upload',
            to: '/fileupload'
          }
        ]
      },
      {
        name: 'Menu',
        children: [
          {
            name: 'Breadcrumb',
            to: '/breadcrumb'
          },
          {
            name: 'ContextMenu',
            to: '/contextmenu'
          },
          {
            name: 'Dock',
            to: '/dock'
          },
          {
            name: 'Menu',
            to: '/menu'
          },
          {
            name: 'Menubar',
            to: '/menubar'
          },
          {
            name: 'MegaMenu',
            to: '/megamenu'
          },
          {
            name: 'PanelMenu',
            to: '/panelmenu'
          },
          {
            name: 'TieredMenu',
            to: '/tieredmenu'
          }
        ]
      },
      {
        name: 'Chart',
        children: [
          {
            name: 'Chart.js',
            to: '/chart'
          }
        ]
      },
      {
        name: 'Messages',
        children: [
          {
            name: 'Message',
            to: '/message'
          },
          {
            name: 'Toast',
            to: '/toast'
          }
        ]
      },
      {
        name: 'Media',
        children: [
          {
            name: 'Carousel',
            to: '/carousel'
          },
          {
            name: 'Galleria',
            to: '/galleria'
          },
          {
            name: 'Image',
            to: '/image'
          },
          {
            name: 'ImageCompare',
            to: '/imagecompare',
            badge: 'NEW'
          }
        ]
      },
      {
        name: 'Misc',
        children: [
          {
            name: 'AnimateOnScroll',
            to: '/animateonscroll'
          },
          {
            name: 'Avatar',
            to: '/avatar'
          },
          {
            name: 'Badge',
            to: '/badge'
          },
          {
            name: 'BlockUI',
            to: '/blockui'
          },
          {
            name: 'Chip',
            to: '/chip'
          },
          {
            name: 'FocusTrap',
            to: '/focustrap'
          },
          {
            name: 'Fluid',
            to: '/fluid'
          },
          {
            name: 'Inplace',
            to: '/inplace'
          },
          {
            name: 'MeterGroup',
            to: '/metergroup'
          },
          {
            name: 'ProgressBar',
            to: '/progressbar'
          },
          {
            name: 'ProgressSpinner',
            to: '/progressspinner'
          },
          {
            name: 'ScrollTop',
            to: '/scrolltop'
          },
          {
            name: 'Skeleton',
            to: '/skeleton'
          },
          {
            name: 'Ripple',
            to: '/ripple'
          },
          {
            name: 'StyleClass',
            to: '/styleclass'
          },
          {
            name: 'Tag',
            to: '/tag'
          },
          {
            name: 'Terminal',
            to: '/terminal'
          }
        ]
      }
    ]
  },
  {
    name: 'Forms',
    icon: 'pi pi-check-circle',
    to: '/forms',
    badge: 'NEW'
  },
  {
    name: 'Pass Through',
    icon: 'pi pi-directions',
    to: '/passthrough'
  },
  {
    name: 'Tailwind CSS',
    icon: 'pi pi-heart',
    children: [
      {
        name: 'Integration',
        to: '/tailwind'
      },
      {
        name: 'Presets',
        href: 'https://tailwind.primevue.org'
      }
    ]
  },
  {
    name: 'Figma UI Kit',
    icon: 'pi pi-pencil',
    to: '/uikit'
  },
  {
    name: 'Icons',
    icon: 'pi pi-eye',
    children: [
      {
        name: 'Prime Icons',
        to: '/icons'
      },
      {
        name: 'Custom Icons',
        to: '/customicons'
      }
    ]
  },
  {
    name: 'Templates',
    icon: 'pi pi-star',
    to: '/templates'
  },
  {
    name: 'PrimeBlocks',
    icon: 'pi pi-server',
    href: 'https://primeblocks.org',
    badge: 'NEW'
  },
  {
    name: 'Guides',
    icon: 'pi pi-book',
    children: [
      {
        name: 'Accessibility',
        to: '/guides/accessibility'
      },
      {
        name: 'Migration to V4',
        to: '/guides/migration/v4'
      },
      {
        name: 'PrimeFlex',
        to: '/guides/primeflex'
      },
      {
        name: 'PrimeTV',
        href: 'https://www.youtube.com/channel/UCTgmp69aBOlLnPEqlUyetWw'
      }
    ]
  },
  {
    name: 'Support',
    icon: 'pi pi-question',
    children: [
      {
        name: 'Discord',
        href: 'https://discord.gg/gzKFYnpmCY'
      },
      {
        name: 'Forum',
        href: 'https://github.com/orgs/primefaces/discussions'
      },
      {
        name: 'PRO Support',
        to: '/support'
      }
    ]
  },
  {
    name: 'Contribution',
    to: '/contribution',
    icon: 'pi pi-users'
  },
  {
    name: 'Discover',
    icon: 'pi pi-search',
    children: [
      {
        name: 'About Us',
        to: '/team'
      },
      {
        name: 'Roadmap',
        to: '/roadmap'
      },
      {
        name: 'Source Code',
        href: 'https://github.com/primefaces/primevue'
      },
      {
        name: 'Changelog',
        href: 'https://github.com/primefaces/primevue/blob/master/CHANGELOG.md'
      },
      {
        name: 'Store',
        href: 'https://www.primefaces.org/store/'
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/primevue'
      },
      {
        name: 'Newsletter',
        href: 'https://www.primefaces.org/newsletter'
      },
      {
        name: 'PrimeGear',
        href: 'https://gear.primefaces.org'
      }
    ]
  }
];
