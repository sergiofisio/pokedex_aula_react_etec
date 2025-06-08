import { Link } from "react-router-dom";
import "./link.css";

export default function LinkItem({ text, href, className }) {
  return (
    <Link to={href} className={className}>
      {text}
    </Link>
  );
}
