import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

function Layout() {
  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Posts</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export { Layout };
