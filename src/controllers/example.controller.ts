const catchAsync = require('../utils/catchAsync');
import { exampleService } from '../services';

const exampleController = catchAsync(async (req, res) => {
  const result = exampleService.example();
  res.send(result);
});

export = exampleController;