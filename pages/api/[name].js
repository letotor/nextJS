const { formatWithValidation } = require("next/dist/next-server/lib/utils");

module.exports = (req, res) => {
  const {
    query: { name },
  } = req;
res.send(name);


   

}