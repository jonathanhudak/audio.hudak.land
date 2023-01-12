import ghpages from "gh-pages";

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/jonathanhudak/todo", // Update to point to your repository
    user: {
      name: "", // update to use your name
      email: "", // Update to use your email
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
