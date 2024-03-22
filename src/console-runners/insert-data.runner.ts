import { generateSalt, hashPassword } from "common/helpers"
import { db } from "dals/mock-data"
import { userContext } from "dals/user/user.context";
import { promisify } from "util";
import childProcess from "child_process";
import { connectToDBServer } from "core/servers";
import { envConstants } from "core/constants";


const runCommand = async (command) => {
    console.log(command);
    const { stdout, stderr } = await promisify(childProcess.exec)(command);
    console.log(stdout);
    console.error(stderr);
};


export const restoreDataFromBackup = async (backupPath: string) => {
    const clearMongoOptFolderCommand = "docker exec airbnb-db rm -r /opt/db"
    const copySeedDataCommand = "docker cp backup airbnb-db:/opt/db";
    const restoreBackupCommand = `docker exec airbnb-db mongorestore --db airbnb /opt/db`;

    await runCommand(clearMongoOptFolderCommand)
    await runCommand(copySeedDataCommand);
    await runCommand(restoreBackupCommand);

    await connectToDBServer(envConstants.mongoDbURI);
    // Insert users in mock db
    for (const user of db.users) {
        const salt = await generateSalt();
        const password = await hashPassword(user.password, salt);
        await userContext.create({
            ...user,
            password,
            salt
        });
    }
}

restoreDataFromBackup("../../backup"); 3
