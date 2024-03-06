import db from "../db/connection.js"
import Character from "../models/Character.js"
import charactersData from "./data.json" assert {type: "json"}
import chalk from "chalk"

const insertData = async () => {

    await db.dropDatabase()
    
    await Character.create(charactersData)
   
    
    console.log(chalk.greenBright("Naruto Characters Created!"));
    
    await db.close();
    
    }
    
    
    insertData()