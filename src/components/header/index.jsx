import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import LinkItem from "../linkItem";
import "./header.css";
import Button from "../button";

const links = [
  { text: "Home", href: "/" },
  { text: "Pokemons", href: "/pokemons" },
];

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img
        className=""
        onClick={() => navigate("/")}
        src={logo}
        alt="Logo Pokedex"
      />
      <nav>
        {links.map((link, key) => {
          return (
            <LinkItem
              key={key}
              text={link.text}
              href={link.href}
              className="link menu"
            />
          );
        })}
      </nav>
      <Button
        className="nav-button"
        text="contato"
        onClick={() => navigate("/contato")}
      />
    </header>
  );
}
