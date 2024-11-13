import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';

export default (server, express) => {
  server.use(cors({ credentials: true, origin: [], optionsSuccessStatus: 200 }));
  server.use(helmet());
  server.use(morgan('dev'));
  server.use(
    fileUpload({
      limits: { fileSize: 7 * 1024 * 1024 },
    })
  );
  server.use(express.json({ limit: '5mb' }));
  server.use(express.static('download'));
  server.use('/static', express.static(path.join(__dirname, '../public')));
};