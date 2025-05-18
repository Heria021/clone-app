// Define dropdown menu types
export type DropdownItem = {
  label: string;
  href: string;
};

export type DropdownMenu = {
  label: string;
  items: DropdownItem[];
};
