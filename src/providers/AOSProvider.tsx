import { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSProviderProps {
  children: ReactNode;
}

const AOSProvider = ({ children }: AOSProviderProps) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;