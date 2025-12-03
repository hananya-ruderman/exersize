// You will create a set of functions that work with this DB: create reports, save them, list them,
// update them, and delete them.
import { databaseArray } from "../theDB/myDB.js";

function createReport(id, terroistName = "Muhammad — unknown last name", weapons, text) {
    const report = {
        id: id,
        terroistName: terroistName,
        weapons: weapons,
        text: text
    }
    if (typeof (id) === "number" || typeof (id) === "string")
        return report
    throw new Error("valueError");
}
function saveThem(report) {
    if (databaseArray.length === 0)
        databaseArray.push(report)
    else {
        const databaseArrayId = databaseArray.map(report => report.id)
        const isIdExists = databaseArrayId.find(id => id === report.id)
        if (isIdExists)
            throw new Error("valueError");
        else
            databaseArray.push(report)


    }
}

function getAllRoports() {
    return databaseArray.sort((a, b) => a.id - b.id)
}

function getAllRoportsByField(fieldname) {
    const sortedDB =  databaseArray.sort((a, b) => {
        if (a[fieldname] < b[fieldname]) {

            return -1;
        }
        if (a[fieldname] > b[fieldname]) {
            return 1;
        }


        return 0;
        
    })
    return sortedDB
}

function searchById(theId)
{
    const databaseArrayId = databaseArray.map(report => report.id)
    const isIdExists = databaseArrayId.findIndex(id => id === theId)
    if (isIdExists)
        return databaseArray[isIdExists] ;
    else
        return `this id is unique`
}


function deleteById(theId)
{
    const databaseArrayId = databaseArray.map(report => report.id)
    const isIdExists = databaseArrayId.findIndex(id => id === theId)
    if (isIdExists)
       databaseArray.splice(isIdExists, 1)
    else
        throw new Error("valueError: id not found");
}

saveThem(createReport(24635, 'udfv', "aab", "iuerhglsiudrng"))
saveThem(createReport(346657, 'udfv', "ab", "iuerhglsiudrng"))
saveThem(createReport(1246, 'udfv', "cfghgjh", "iuerhglsiudrng"))
// saveThem(createReport(34665766,'udfv', "fdgfdshg","iuerhglsiudrng"))
// console.log(getAllRoports())
// console.log(getAllRoportsByField("weapons"))
console.log(searchById(246))
// console.log(searchById())
// console.log(databaseArray)