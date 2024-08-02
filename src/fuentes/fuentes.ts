import {
  Source_Code_Pro,
  Open_Sans,
  Poppins,
  Roboto_Slab,
} from "next/font/google";

export const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
});

export const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
