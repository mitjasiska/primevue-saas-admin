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
    name: 'Pages',
    icon: 'pi pi-file',
    children: [
      {
        name: 'Dashboard',
        to: '/dashboard'
      }
    ]
  }
];
