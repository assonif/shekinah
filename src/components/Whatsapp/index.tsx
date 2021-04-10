import { Container } from "./styles";

export default function Whatsapp() {
  return (
    <Container>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?l=pt_br&phone=5519997575476"
      >
        <img
          src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"
          alt="whatsapp logo"
        />
      </a>
    </Container>
  );
}
