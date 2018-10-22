const helperMethods = {

    getDotEnvVar_PORT: () => {
        const dotenv = require('dotenv');
        const result = dotenv.config();
        return result.parsed.PORT;
    },
    getEnvVar_PORT:()=>{
        return process.env.PORT;
    },
}
module.exports = helperMethods;