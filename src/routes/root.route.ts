const express = require('express');
import { exampleController } from '../controllers';

const router = express.Router();

router.post('/test', exampleController);

export = router;
