import { useEffect } from "react";
import Link from "next/link";

import { FiUser, FiShoppingCart } from "react-icons/fi";

import { cartState } from "@/atoms";
import { useRecoilState } from "recoil";

import SearchBar from "./SearchBar";

import { Container, ActionsMenu } from "@/styles/components/Header";

export default function Header() {
  const [cart, setCart] = useRecoilState(cartState);

  useEffect(() => {
    var storedArray = localStorage.getItem("cart");
    setCart(JSON.parse(storedArray));
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
                  {cart && cart.length > 0 && <label>{cart.length}</label>}
                </span>
              </div>
            </a>
          </Link>
        </ActionsMenu>
      </div>
      <SearchBar />
    </Container>
  );
}
