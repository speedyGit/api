const db = require(dbConfig)
module.exports={
    add,
    findByName,
    findAll,
    findById,
    findByEmail
}

//Nice to declare Tables up top Yo, including sub tables
const table='users'

function findAll(){
    return db(table)
}


function findById(id){
    return db(table + ' as u')
    .select('u.id','u.username','r.role')
    .join('roles as r','r.id','u.role_id')
    .where('u.id','=',id)
    .first()
}

function findByName(username){
    return db(table + ' as u')
    .select('u.id','u.username','u.password','r.role')
    .join('roles as r','r.id','u.role_id')
    .where({username})
    .first()
}

function findByEmail(email){
    return db(table)
    .select('email')
    .where({email})
    .first()
}

function add(obj){
    return db(table)
    .insert(obj)
    .then(([id])=>findById(id))
    .catch(err=> console.log('add',err))
}
