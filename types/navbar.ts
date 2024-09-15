export interface NavItem {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	icon?: React.ReactNode;
	label?: string;
}

export interface NavBarItemWithChildren extends NavItem {
	items: NavBarItemWithChildren[];
}

export interface NavBarItem extends NavItem {}

// export interface SidebarNavItem extends NavItemWithChildren {}
