'use strict'

class Project {
  //Valida todas as regras e não um de cada vez, desta forma 
  //retorna mais de uma mensagem caso tenha burlado mais de uma regra
  get validateAll(){
    return true
  }


  get rules () {
    return {
      title: 'required'
    }
  }
}

module.exports = Project
