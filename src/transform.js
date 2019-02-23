const people = [{name: "Anna", age: 31}, {name: "John", age: 32}, {name: "Hank", age: 60}]


function groupAdultsByAgeRange(people){
let result ={}

// if(people.length !== 0 ){
//     result = people
// }

const ageLessThan20 = people.filter((person) => {
   return person.age>=18 && person.age <=20})
if(ageLessThan20.length!==0){
    result['20 and younger'] = ageLessThan20}



const ageBetween21To30 = people.filter((person) => {
    return person.age>20 && person.age <=30})
if(ageBetween21To30.length !== 0){
    result['21-30'] = ageBetween21To30}


const ageBetween31To40 = people.filter((person)=>{
    return person.age > 30 && person.age <=40})
if(ageBetween31To40.length !==0){
    result['31-40'] = ageBetween31To40}


const ageBetween41To50 = people.filter((person)=>{
    return person.age > 40 && person.age <= 50})
    console.log("AGE", ageBetween41To50)
if(ageBetween41To50.length !==0){
    result['41-50'] = ageBetween41To50
}



console.log(result)

const ageOlderThan51 = people.filter((person)=>{
    return person.age > 50})
if(ageOlderThan51.length !==0 ){
    result['51 and older'] = ageOlderThan51
}

return result
}

console.log(groupAdultsByAgeRange(people))


module.exports = {groupAdultsByAgeRange}