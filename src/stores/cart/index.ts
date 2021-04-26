import { createContext } from "react";
import Store from "./store";

export const store = new Store();

export const cartStore = createContext(store);
