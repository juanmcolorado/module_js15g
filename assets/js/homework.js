let koder = {
   name:"jorge",
   lastName:"Camarillo",
   average: [10, 10, 10, 8, 9],
   age: 30,
   imc: 22.985397512168742,

   getAge: function () {
       return this.age
   },

   get ageKoder() {
       return this.age
   },

   set ageKoder(age) {
       this.age = age
   },

   get fullName() {
       return `${ this.name } ${ this.lastName }`
   },

   set fullName(objFullName) {
       this.name = objFullName[0]
       this.lastName = objFullName[1]
   },

   get averageKoder() {
      return this.average.push = 9
   },
   
   get imcKoder() {
      this.peso = 68
      this.altura = 1.72
      return this.IMC = this.peso / this.altura**2
   },

   set imcKoder(imc) {
      this.imc = 28.185397512168742
   }
}

// Metodos
console.log( koder.getAge() )

// getters
console.log('Edad inicial: ', koder.ageKoder)
console.log('Nombre completo: ', koder.fullName)
console.log('Calificación: ', koder.averageKoder)
console.log('Masa corporal: ', koder.imcKoder)

// setters
koder.ageKoder = 47
koder.fullName = ['jorge luis', 'camarillo']
koder.imc = 28.185397512168742

// getter y setter de 
/**
* 
* 1. getter average
* 2. getter, setter IMC 
* 3. setter Score
* 4. setter newProperty
* 
* 
*/


/**
* Estudiar DOM 
* CSS y HTML
*/