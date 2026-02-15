/* Create helpers */
const getTodayUTC = () => {
  const now = new Date();
  return `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}-${String(now.getUTCDate()).padStart(2, "0")}`;
};

/* Create exports */
module.exports = { getTodayUTC };
