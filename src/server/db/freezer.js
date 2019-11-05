import { Connection } from './index';

// async function that returns all data from table
export const all = async () => {
	return new Promise((resolve, reject) => {
		
		Connection.query('SELECT * from freezer', (err, results) => {
			// if error, call 'reject'
			if(err) {
				return reject(err);
			}
			// otherwise, call 'resolve'
			resolve(results);
		});
	});
}


// putting all functions related to the table inside this export
export default {
	all
}

/*
DROP TABLE freezer;

CREATE TABLE freezer (
	freezer_id INT PRIMARY KEY AUTO_INCREMENT,
	freezer_num INT NOT NULL,
	freezer_date DATE NOT NULL,
	freezer_start TIME NOT NULL,
	freezer_done BOOL
);

INSERT INTO freezer (freezer_num, freezer_date, freezer_start, freezer_done)
VALUES(2, '2019-11-04', '20:33:00', true),
			(1, '2019-11-04', '20:45:00', true),
			(3, '2019-11-04', '21:01:00', false),
			(4, '2019-11-04', '21:20:00', false),
			(2, '2019-11-04', '21:36:00', false);
*/