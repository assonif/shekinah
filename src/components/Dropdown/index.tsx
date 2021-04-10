import { useEffect, useState } from "react";

import { BsChevronBarExpand } from "react-icons/bs";

import { Container, ListContainer } from "./styles";

interface IDropdownProps {
  list: any;
  title: string;
  name?: string;
  onChange: any;
}

export default function Dropdown({
  list,
  title,
  onChange,
  name = "dropdown",
}: IDropdownProps) {
  const [isListOpen, setIsListOpen] = useState(false);
  const [headerTitle, setHeaderTilte] = useState("");

  useEffect(() => {
    setHeaderTilte(title);
  }, []);

  const toggleList = () => {
    setIsListOpen((listOpen) => !listOpen);
  };

  const selectItem = (title) => {
    setIsListOpen(false);
    setHeaderTilte(title);
  };

  useEffect(() => {
    onChange(headerTitle, "25,00");
  }, [headerTitle]);

  return (
    <Container>
      <button type="button" onClick={toggleList}>
        <div>{headerTitle}</div>
        <BsChevronBarExpand />
      </button>

      {isListOpen && (
        <ListContainer role="list">
          {list.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => selectItem(item.title)}
            >
              {item.title}
            </button>
          ))}
        </ListContainer>
      )}
    </Container>
  );
}
