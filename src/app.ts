import { createRestApiServer } from "core/servers"
import { logRequestMiddleware, logErrorRequestMiddleware } from "common/middlewares"
import { envConstants } from "core/constants"
import { houseApi } from "pods/house"

const app = createRestApiServer()

app.use(logRequestMiddleware)

// Rest of the pods
app.use("/api/house", houseApi)


// Keep always last to log server errors
app.use(logErrorRequestMiddleware)

const port = envConstants.port

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})