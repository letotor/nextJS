module.exports = (req, res) => {
  const {
    query: { name },
  } = req;

  const val=`Hello ${name}!`+"dfdf"
  res.send(req);

}