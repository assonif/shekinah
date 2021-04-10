import { FiSearch } from "react-icons/fi";

import { Container } from "@/styles/components/SearchBar";

export default function SearchBar() {
  return (
    <Container>
      <input type="text" placeholder="O que você procura?" />

      <button type="button">
        <FiSearch />
      </button>
    </Container>
  );
}
