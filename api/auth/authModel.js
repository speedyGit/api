const db = require(dbConfig)
module.exports={
    add,
    findByName,
    findAll
}

//Nice to declare Tables up top Yo, including sub tables
const table='users'

function findAll(){
    return db(table)
}

function findByUserName(username){
    return db(table)
    .where({username})
    .first()
}

function findById(id){
    return db(table + ' as u')
    .select('u.id','u.username','u.password','r.role')
    .join('roles as r','r.id','u.role_id')
    .first()
}

function findByName(username){
    return db(table)
    .select('username')
    .where({username})
    .first()
}

function add(obj){
    console.log(obj)
    return db(table)
    .insert(obj)
    .then(([id])=>findById(id))
    .catch(err=> console.log('add',err))
}
