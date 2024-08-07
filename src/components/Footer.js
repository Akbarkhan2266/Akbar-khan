import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
       
            <div className="social-icon">
              
              <a href="https://github.com/Akbarkhan2266"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/profile.php?id=100022338637299"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/___akbar_007?utm_source=qr&igsh=MXE0ZGRvOTF4YW80MQ=="><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright Akbar Khan 2024</p>
          
            </Container>
    </footer>
  )
}
