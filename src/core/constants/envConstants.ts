export const envConstants = {
    port: process.env.PORT,
    isMock: process.env.API_MOCK === 'true',
    mongoDbURI: process.env.MONGODB_URI
}