// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

// added missing props and number colors to createPalette interfaces
declare module "@mui/material/styles/" {
    interface PaletteColor {
        [key: number]: string;
    }

    interface Palette {
        tertiary: PaletteColor;
    }
}
