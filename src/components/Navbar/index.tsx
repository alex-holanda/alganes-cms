import { MouseEvent } from "react";
import { useHistory } from "react-router";

export function Navbar() {
  const history = useHistory();

  function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const newRoute = event.currentTarget.getAttribute("href");
    if (newRoute) {
      history.push(newRoute);
    }
  }

  return (
    <nav>
      <ul>
        <li>
          <a onClick={handleAnchorClick} href="/">
            Home
          </a>
        </li>
        <li>
          <a onClick={handleAnchorClick} href="/contato">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
