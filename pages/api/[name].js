const { formatWithValidation } = require("next/dist/next-server/lib/utils");

module.exports = (req, res) => {
  const {
    query: { name },
  } = req;

  const val=`Hello ${name}!`+"dfdf"
  res.send(val);

}