import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="mt-20 h-20 bg-accent">
      <p className="mx-auto mt-8 flex items-center justify-center">
        Made with &nbsp;
        <span className="text-red">
          <FontAwesomeIcon icon={faHeart} />
        </span>
        &nbsp; by Mahdi Beldjoudi
      </p>
    </footer>
  );
}
