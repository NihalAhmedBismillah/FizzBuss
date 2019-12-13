import * as express from 'express';
import { Setup } from './lib/setup';
const config = require('./../../config.json');

export const app = express();
/**
 * Application
 */
class Application {

    public static async run() {
        try {
          const PORT = config.PORT || 3001;
            app.listen(PORT, async () => await new Setup(app).init());
        }
        catch (error) {
            return error;
        }
    }
}
Application.run().then(() => {
    console.log(`server started in port No 3001 and db connected!`);
}).catch((error) => {
    console.log('Error : ', JSON.stringify(error));
    process.exit(1)
})