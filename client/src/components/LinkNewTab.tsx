interface LinkNewTabProps {
  href: string;
  children: string | JSX.Element;
}

export const LinkNewTab = ({ href, children }: LinkNewTabProps) => (
  <a
    className="icon social-link"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
