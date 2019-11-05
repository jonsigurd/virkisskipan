import * as mysql from 'mysql';
import config from '../config';

import Freezer from './freezer';

// creating connection to mysql database
export const Connection = mysql.createConnection(config.mysql);

// checking for error during connection
Connection.connect(err => {
	if(err) console.log(err);
});

export default {
	Freezer
}