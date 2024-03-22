import { config } from "dotenv";
import { restoreDataFromBackup } from "./insert-data.runner";
config()

require('./insert-data.runner')