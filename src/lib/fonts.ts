import {
    Inter,
    Margarine,
    Rubik_Wet_Paint,
    Lora,
    Playfair_Display,
} from "next/font/google"

export const inter = Inter({
    weight: "variable",
    subsets: ["latin"]
});

export const rubik_wet_paint = Rubik_Wet_Paint({
    weight: "400",
    subsets: ["latin"]
})

export const margarine = Margarine({
    weight: "400",
    subsets: ["latin"]
})

export const lora = Lora({
    weight: "400",
    subsets: ["latin"]
})

export const playfair = Playfair_Display({
    weight: "variable",
    subsets: ["latin"],
    style: ["normal", "italic"]
})
