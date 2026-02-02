export const errorHandler = (err, req, res, next) => {
  if (err.message === "TASK_NOT_FOUND") {
    return res.status(404).json({ error: "Task not found." });
  }

  console.error(err);
  res.status(500).json({ error: "Internal server error" });
};