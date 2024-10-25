import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import morgan from 'morgan';
import cors from 'cors';
import gastoRoutes from './routes/gastoRoutes';
import ingresoRoutes from './routes/ingresoRoutes';

import presupuestoRoutes from './routes/presupuestoRoutes';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/usuario', usuarioRoutes);
        this.app.use('/api/gasto', gastoRoutes);
        this.app.use('/api/ingreso', ingresoRoutes);
        this.app.use('/api/presupuesto', presupuestoRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
