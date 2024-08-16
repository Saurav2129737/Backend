import dotenv from 'dotenv';
import app from './app.js';
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT;

if (!PORT) {
    console.error('PORT environment variable is missing');
    process.exit(1);
}
app.listen(PORT, () => {
    console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});
