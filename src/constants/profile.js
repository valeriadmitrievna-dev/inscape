export const profile_menu = ["about", "notes", "more"];

export const DEFAULT_BANNER =
  "https://s3.amazonaws.com/appforest_uf/d55/f1603992599473x874047522060980900/banner-default-big.jpg";

export const shortname = (fullname) => {
  return localStorage.getItem("lang") === "ja"
    ? fullname
    : fullname
        ?.split(" ")
        .map((word) => word[0])
        .join("");
};
