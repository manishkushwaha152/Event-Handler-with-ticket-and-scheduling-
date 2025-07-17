const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.role || (req.user && req.user.role);

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Access denied: Unauthorized role" });
    }

    next();
  };
};

module.exports = { authorizeRoles };
