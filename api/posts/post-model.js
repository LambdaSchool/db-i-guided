const db = require("../../data/db-config.js")

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

function get() {
  //select contents from posts
  return db("posts")
  //return db("posts").select("contents")
}

function getById(id) {
  return db("posts").where("id",id).first()
}

function create(post) {
  return db("posts").insert(post)
    .then(([id])=>{
      return db("posts").where("id",id).first()
    })
}

function update() {
  return Promise.resolve('update wired')
}

function remove() {
  return Promise.resolve('delete wired')
}
