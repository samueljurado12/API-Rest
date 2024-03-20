export const envConstants = {
    isProduction: process.env.NODE_ENV === 'production',
    port: process.env.PORT,
    isMock: process.env.API_MOCK === 'true',
    mongoDbURI: process.env.MONGODB_URI,
    secret: process.env.SECRET,
}