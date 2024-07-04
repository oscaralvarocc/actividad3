export class ReservaModel {
    idreservas: number;
    nombrereserva: number;
    fechareserva: Date;
    horareserva: string;
    numpersonas: number;
    estado: string;
    fecharegistro: Date;
    estadoregistro: boolean;

    constructor() {
        this.idreservas = 0;
        this.nombrereserva = 0;
        this.fechareserva = new Date();
        this.horareserva = '';
        this.numpersonas = 0;
        this.estado = '';
        this.fecharegistro = new Date();
        this.estadoregistro = true;
    }
}
