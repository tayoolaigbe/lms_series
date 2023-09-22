import { app } from './app';
require('dontenv').config();

// create server
app.listen(process.env.PORT, () => {
	console.log(`Server is connected at PORT ${process.env.PORT}`);
});
