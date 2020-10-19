import express, {Response, Request} from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

const app = express();

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime as if it were an environment variable
const port = process.env.SERVER_PORT || 3000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// define a route handler for the default home page
app.get( '/', ( req: Request, res: Response ) => {
    res.send('Api running')
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );