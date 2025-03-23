export type Fonts = {
  poppins: {
    light: string;
    regular: string;
    medium: string;
    semiBold: string;
    bold: string;
    extraBold: string;
  };
  lobster: {
    regular: string;
  };
  inter: {
    light: string;
    regular: string;
    medium: string;
    semiBold: string;
    bold: string;
    black: string;
  };
};

const fonts: Fonts = {
  poppins: {
    light: "Poppins_300Light",
    regular: "Poppins_400Regular",
    medium: "Poppins_500Medium",
    semiBold: "Poppins_600SemiBold",
    bold: "Poppins_700Bold",
    extraBold: "Poppins_800ExtraBold",
  },
  lobster: {
    regular: "Lobster_400Regular",
  },
  inter: {
    light: "Inter_300Light",
    regular: "Inter_400Regular",
    medium: "Inter_500Medium",
    semiBold: "Inter_600SemiBold",
    bold: "Inter_700Bold",
    black: "Inter_900Black",
  },
};

export default fonts;
