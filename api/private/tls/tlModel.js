const db = require(_dbConfig);
module.exports = {
  findAll,
  findById,
  remove,
  add,
  editById
};
const table = "users";
function findAll(id) {
  return db(table + " as u")
    .join("tl_to_students as ts", "ts.tl_id", "u.id")
    .join("students as s", "ts.student_id", "s.id")
    .select(
      "s.id as student_id",
      "s.fname as first_name",
      "s.lname as last_name",
      "s.git_handle",
      "s.slack_handle"
    )
    .where("u.id", id)
}
function findById(id) {
  return db(table)
    .where({ id })
    .first();
}
function remove(id) {
  return db(table)
    .where({ id })
    .del();
}
function editById(id, update) {
  return db(table)
    .where({ id })
    .update(update, "*");
}
function add(obj) {
  return db(table)
    .insert(obj, "id")
    .then(([id]) => findById(id));
}
