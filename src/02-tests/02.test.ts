import {CityTypeLocal} from "./02";

let city:CityTypeLocal;

test("Test object", () =>{
city={
    name:"Anapa",
    street:"Gogol",
     houses:[{
        id:1,
         name:"first"
     }],
    govBuild:[]
}


    expect(city.name).toBe("Anapa")


    }
)