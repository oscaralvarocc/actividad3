import { Routes,RouterModule } from '@angular/router';
import { CardproductosComponent } from './components/cardproductos/cardproductos.component';
import { CardproductoComponent } from './components/cardproducto/cardproducto.component';
import { CardBuscadorComponent } from './components/card-buscador/card-buscador.component';
import { ReservaComponent } from './reserva/reserva.component';

export const routes: Routes = [
    {path:'productos',component:CardproductosComponent},
    {path:'producto/:id',component:CardproductoComponent},
    {path:'buscarproducto/:termino',component:CardBuscadorComponent},
    {path:'reserva ',component:ReservaComponent},
    {path:'**',component:ReservaComponent},
];
