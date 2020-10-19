import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        // tslint:disable-next-line:no-console
        console.log('Mongo DB Connect');
    } catch(error) {
        // tslint:disable-next-line:no-console
        console.log(error.message);
        // Exit process with fail
        process.exit(1);
    }
};

export default connectDB;