"use client";

import { Provider } from "@radix-ui/react-tooltip";
import { store } from "./store";

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
