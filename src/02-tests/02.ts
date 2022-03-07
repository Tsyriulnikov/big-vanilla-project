
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies:Array<TechnologiesType>
}
type AddressType = {
    country_city: CityType
    street: string
    house: number
}
type CityType = {
    country_title:string
    index:number
    city_name:string
}
type TechnologiesType = {
    id:number
    title:string
}

export type CityTypeLocal={
name:string
    street:string
    houses:Array<CityLocalHousesType>
    govBuild:Array<string>
}
type CityLocalHousesType ={
    id:number
    name:string
}

const student: StudentType = {
    id: 1,
    name: "Maxim",
    age: 50,
    isActive: true,
    address: {
        street:"Gogol",
        house:168,
        country_city:{
            country_title:"Russa",
            index:353440,
            city_name:"Anapa"
        }
    },
    technologies : [
        {
            id:1,
            title:"HTML"
        },
        {
            id:2,
            title:"CSS"
        },
        {
            id:3,
            title:"JS"
        }
    ]
}
export const console_02=()=> console.log(student.address.country_city.city_name)
export const console_02_2=()=> console.log(student.technologies[1].title)