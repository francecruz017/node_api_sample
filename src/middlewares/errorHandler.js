export const errorHandler = (err, req, res, next) => {
  if (err.message === "TASK_NOT_FOUND") {
    return res.status(404).json({ error: "Task not found." });
  }

  if (err.message === "USER_EXISTS") {
    return res.status(409).json({ error: "User already exists" });
  }

  if (err.message === "INVALID_CREDENTIALS") {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  console.error(err);
  res.status(500).json({ error: "Internal server error" });
};