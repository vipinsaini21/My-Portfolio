import express from 'express';
import { userRouter } from './routes/user.js';
import cookieParser from 'cookie-parser';
import path from 'path';

export const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
app.use('/api/v1', userRouter);
app.use(express.static(path.resolve('./frontend/build')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve('./frontend/build/index.html'));
});
