module.exports = async (req, res) => {
  res.status(200).json({
    message: "✅ Hello from /api!",
    time: new Date().toISOString()
  });
};
