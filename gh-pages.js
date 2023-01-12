import { publish } from "gh-pages";

publish(
  "dist",
  {
    branch: "gh-pages",
    repo: "https://github.com/jonathanhudak/audio.hudak.land",
    user: {
      name: "Jonathan Hudak",
      email: "onofon@proton.me",
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
