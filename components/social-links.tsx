const profiles = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/studio_point0/",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.8" r=".8" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Studio-Point-Zero-61553950463989/",
    icon: <path fill="currentColor" d="M14.3 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.6-1.6h1.7V3.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H8.1v3.2h2.8V21h3.4Z" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/studio-point-zero/",
    icon: <path fill="currentColor" d="M5.2 3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.5 9h3.4v12H3.5V9Zm5.6 0h3.3v1.6h.1c.5-1 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V21H17v-6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.1V9Z" />,
  },
];

export function SocialLinks({ labelled = false }: { labelled?: boolean }) {
  return (
    <nav className={labelled ? "social-links social-links-labelled" : "social-links"} aria-label={labelled ? "Contact social profiles" : "Footer social profiles"}>
      {profiles.map(({ name, href, icon }) => (
        <a key={name} className="social-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} (opens in a new tab)`} title={`${name} (opens in a new tab)`}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">{icon}</svg>
          {labelled && <span>{name}</span>}
        </a>
      ))}
    </nav>
  );
}
