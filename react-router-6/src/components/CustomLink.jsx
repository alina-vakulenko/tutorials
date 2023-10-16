import { Link, useMatch } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  const match = useMatch({
    path: to,
    // if to === main page ("/") - complete matching, otherwise partial matching
    end: to.length === 1,
  });

  return (
    <Link
      to={to}
      {...props}
      style={{ color: match ? "var(--color-active)" : "#fff" }}
    >
      {children}
    </Link>
  );
}

export { CustomLink };
