import { createRestApiServer, connectToDBServer } from "core/servers"
import { logRequestMiddleware, logErrorRequestMiddleware } from "common/middlewares"
import { envConstants } from "core/constants"
import { houseApi } from "pods/house"
import { securityApi } from "pods/security"
import { authenticationMiddleware } from "pods/security/security.middlewares"

const app = createRestApiServer()

app.use(logRequestMiddleware)

// Rest of the pods
app.use("/api/security", securityApi)

app.use("/api/house", authenticationMiddleware, houseApi)


// Keep always last to log server errors
app.use(logErrorRequestMiddleware)

const port = envConstants.port

app.listen(port, async () => {
    if (envConstants.isMock) {
        console.log("Running Mock API");
    } else {
        await connectToDBServer(envConstants.mongoDbURI);
        console.log('Connected to DB');

    }
    console.log(`Server running at port ${port}`);
})