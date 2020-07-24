import React from "react";
import withLayout from "../../hocs/withLayout";
import utilities from "../../utilities";

// const useStyles = makeStyles((them: Theme) => ({
//   root: {
//     textAlign: "center",
//   },
//   description: {
//     maxWidth: 500,
//     margin: "0 auto 20px auto",
//   },
//   button: {
//     margin: "0 10px 15px 10px",
//   },
// }));

function Home() {
  // const theme = useTheme();
  // const classes = useStyles(theme);

  return (
    // <section className={classes.root}>
    //   <h1>Next.js Shopify Storefront</h1>
    //   <p className={classes.description}>
    //     A Shopping Cart built with TypeScript, NextJS, React, Redux, Apollo
    //     Client, Shopify Storefront GraphQL API, ... and Material UI.
    //   </p>
    //   <Button
    //     variant="contained"
    //     color="primary"
    //     className={classes.button}
    //     onClick={() => utilities.link({ path: "/products" })}
    //   >
    //     Browse Products
    //   </Button>
    //   <Button
    //     variant="contained"
    //     className={classes.button}
    //     target="_blank"
    //     href="https://github.com/Maxvien/next-shopify-storefront"
    //   >
    //     Get Source Code
    //   </Button>
    // </section>
    <div className="text-center">
      <h1>Next.js Shopify Storefront</h1>
      <p>
        A Shopping Cart built with TypeScript, NextJS, React, Apollo Client,
        Shopify Storefront GraphQL API, and TailwindCSS.
      </p>
    </div>
  );
}

export default withLayout(Home);
