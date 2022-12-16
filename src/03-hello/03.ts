import {StudentType} from "../02-hello/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02-hello/02_02";
import exp from "constants";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}


export function addSkill2 (student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s:StudentType){
s.isActive = true;
}

export const doesSLI = (s:StudentType, cityName:string)=>{
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
building.budget += budget;
}
export const repairHouse = (house: HouseType) => {
    house.repaired = true;

}

export const toFireStaff = (building: GovernmentBuildingType, staff: number)=> {
    building.staffCount -= staff;
}

export function toHireStaff(building: GovernmentBuildingType, staff: number){
    building.staffCount += staff;
}