import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Footer() {
  const links = [
    {
      href: "https://github.com/abelmp17",
      icon: faGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/abel-mart%C3%ADnez-peinado-868436259/",
      icon: faLinkedin,
      label: "LinkedIn",
    },
  ];

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const location = useLocation()

  return (
    <footer className={`flex justify-between items-center bg-[#003] p-5 w-full ${location.pathname === "/fitness" && isWideScreen && 'fixed bottom-0 left-0'}`}>
      <article className="grid grid-cols-3 w-full gap-5 justify-center items-center">
        <p className="text-center text-white">Copyright © 2024</p>
        <p className="text-center text-white">Made by Abel Martínez Peinado</p>
        <ul className="flex gap-5 justify-center items-center">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </li>
          ))}
        </ul>
      </article>
    </footer>
  );
}
