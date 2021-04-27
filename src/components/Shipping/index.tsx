import Button from "../Button";

import Colors from "@/styles/Colors";
import { Container, Method } from "./styles";
import axios from "axios";
import { useContext, useState } from "react";
import { shippingStore } from "@/stores/shipping";
import { observer } from "mobx-react";
import CircularLoader from "../CircularLoader";

const Shipping = observer(() => {
  const [hasError, setHasError] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(true);

  const shippingStoreContext = useContext(shippingStore);

  const handleCalculateShip = async (e) => {
    e.preventDefault();

    setHasError(false);
    shippingStoreContext.setIsLoading();
    shippingStoreContext.setMethods([]);
    try {
      const { data } = await axios.post("/api/correio", {
        sCepDestino: shippingStoreContext.cep,
      });
      console.log(data);
      setShouldShowButton(false);
      shippingStoreContext.setMethods(data);
    } catch (err) {
      setHasError(true);
    }

    shippingStoreContext.setIsLoading();
  };

  const changeCepValue = (e) => {
    shippingStoreContext.setCep(e.target.value);
    setShouldShowButton(true);
  };

  const returnMethod = (value) => {
    if (value === "04014") {
      return "SEDEX";
    }
    return "PAC";
  };
  return (
    <Container>
      <strong>ESTIMATIVA DE FRETE</strong>
      <span>CEP</span>

      <input
        type="text"
        value={shippingStoreContext.cep}
        onChange={changeCepValue}
      />
      {hasError && <p>Digite um CEP válido</p>}
      {shippingStoreContext.isLoading && (
        <CircularLoader color={Colors.green_01} />
      )}

      {shippingStoreContext.methods.length > 0 &&
        shippingStoreContext.methods.map((item, index) => (
          <Method key={index}>
            <strong>{returnMethod(item.Codigo)}</strong>
            <div>
              <span>R${item.Valor}</span>
              <span>Previsto para {item.PrazoEntrega} dias úteis</span>
            </div>
          </Method>
        ))}
      {shouldShowButton && (
        <Button
          color={Colors.green_01}
          title="CALCULAR"
          action={handleCalculateShip}
        ></Button>
      )}
    </Container>
  );
});

export default Shipping;
