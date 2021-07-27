import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

const getLoginState = (req, loginOptions) => {
  return { basket_id: "toto" };
};

export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, { getLoginState });
      console.log("fonction auth");
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});