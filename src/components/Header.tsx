import { useContext, useEffect } from "react";
import Link from "next/link";

import { FiUser, FiShoppingCart } from "react-icons/fi";

import { observer } from "mobx-react";

import { useRecoilState } from "recoil";

import SearchBar from "./SearchBar";

import { Container, ActionsMenu } from "@/styles/components/Header";
import { cartStore } from "@/stores/cart";

const Header = observer(() => {
  const cartContext = useContext(cartStore);

  useEffect(() => {
    var storedArray = localStorage.getItem("cart");
    cartContext.setCart(JSON.parse(storedArray));
  }, []);

  return (
    <Container>
      <div>
        <Link href="/">
          <a>
            <img src="https://i.ibb.co/b6dD5f1/logo.png" alt="logo" />
          </a>
        </Link>

        <SearchBar />

        <ActionsMenu>
          <Link href="/cart">
            <a>
              <div>
                <span>
                  <FiShoppingCart />
                  {cartContext.cart && cartContext.cart.length > 0 && (
                    <label>{cartContext.cart.length}</label>
                  )}
                </span>
              </div>
            </a>
          </Link>
        </ActionsMenu>
      </div>
      <SearchBar />
    </Container>
  );
});

export default Header;
