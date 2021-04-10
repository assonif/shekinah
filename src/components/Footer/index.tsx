import { Container, InfoContainer, BlackFooter } from "./styles";

export default function Footer() {
  return (
    <Container>
      <span>
        SHEKINAH SKATEBOARDS ONLINE STORE
        <div>
          <img
            src="https://dafitistatic-a.akamaihd.net/dynamic_yield/cms/static/images/22bc19454ff31__instagram.png"
            alt="Instagram logo"
          />
          <img
            src="https://dafitistatic-a.akamaihd.net/dynamic_yield/cms/static/images/1c8898362baad__facebook.png"
            alt="Facebook logo"
          />
          <img
            src="https://dafitistatic-a.akamaihd.net/dynamic_yield/cms/static/images/20f7163550056__youtube.png"
            alt="Youtube logo"
          />
          <img
            src="http://assets.stickpng.com/images/5a4e2ef62da5ad73df7efe6e.png"
            alt="Whatsapp logo"
          />
        </div>
      </span>

      <InfoContainer>
        <span>CNPJ: 0043004050305/9090</span>
        <span>contato@shekinah.com.br</span>
      </InfoContainer>

      <BlackFooter />
    </Container>
  );
}
