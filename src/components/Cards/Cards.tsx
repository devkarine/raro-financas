import './index.css'
import { Card } from './Card'
import { BtnTransaction } from '../Button/ButtonTransaction'


export const Cards =() => {
    return(
        <section className='cards'>
            <Card transaction='Entradas' img='trending-up.svg' background='#DCFCE7' value='R$ 1.853,12' />
            <Card transaction='Saídas' img='trending-down.svg' background='#FEE2E2' value='R$ 1.853,12' />
            <Card transaction='Saldo' img='$.svg' background='#DBEAFE' value='R$ 1.853,12' />
            <BtnTransaction />
        </section>
        
    )
}