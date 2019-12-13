import { FizzBuzzAlgorithm } from '../lib/fizzbuzzalgorithm';
import {IErrorException} from '../dto/IErrorException';
export class FizzBuzzController {

    public static async init(app: any) {

        app.get(`/api/v1/fizzbuzz/:count`, (req, res) => {
            try {
                const { count } = req.params;
                // TODO: Need to handle error with proper class since it small app i am putting here
                if(isNaN(count)) throw(<IErrorException>{statusCode:400,message:`Bad request`,error:`Bad request` }) ;
                if(+count<1  || +count>100) throw(<IErrorException>{statusCode:422,message:`Count parameter should be 1 to 100`,error:`Unprocessable Entity`})
                const response = FizzBuzzAlgorithm.getFizzBuzzList(+count);
                res.status(200).send(response);
            }
            catch (ex) {
                res.status(ex.statusCode).send({error:ex});
            }
        });
        app.get('/', (req, res) => {
            res.status(200).send(`server started on post 3001${new Date().toString()}`);
        });
        return true;
    }
}
