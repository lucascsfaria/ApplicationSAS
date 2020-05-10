'use strict'

class User {
  //Valida todas as regras e não um de cada vez, desta forma 
  //retorna mais de uma mensagem caso tenha burlado mais de uma regra
  get validateAll(){
    return true
  }

  get rules () {
    return {
      name: 'required',
      email: 'requires|email|unique:users',
      password: 'require'
    }
  }
}

module.exports = User
