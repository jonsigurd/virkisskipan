import * as express from 'express';

import DB from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
	res.json('World');
});

router.get('/api/freezer', async (req, res) => {
	try {
		let freezer = await DB.Freezer.all();
		res.json(freezer);
	} catch(e) {
		console.log(e);
		res.sendStatus(500);
	}
});

export default router;