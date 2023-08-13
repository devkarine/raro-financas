import './index.css'
import { Card } from './Card'
import { BtnTransaction } from '../Button/ButtonTransaction'


export const Cards =() => {
    return(
        <section className='cards'>
            <Card transaction='Entradas' img='trending-up.svg' value='R$ 1.853,12' />
            <Card transaction='Saídas' img='trending-down.svg' value='R$ 1.853,12' />
            <Card transaction='Saldo' img='$.svg' value='R$ 1.853,12' />
            <BtnTransaction />
        </section>
        
    )
}