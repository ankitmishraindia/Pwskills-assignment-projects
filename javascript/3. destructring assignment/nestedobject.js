//nested object destructure

function showaddress(person){
      person={name:"dharma",
              age:33,
              Address:{
                       Village:"sisai rani pur",
                       streetNo:"23-8,55",
                       Locality:"India"
                      }
             }
      const {name,Address:{streetNo}}=person;
      return {name,Address:{streetNo}};
}
