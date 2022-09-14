
export interface HeaderProps {
  isFixed?: boolean;
}

export interface NavLinkProps {
  path: string;
  title: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
