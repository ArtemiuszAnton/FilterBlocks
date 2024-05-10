import { TextField, Button } from '@mui/material';
import style from './style.module.scss'

function Vacancy() {
    const arr = [{ name: 'Менеджер-дизайнер', salary: 'з/п от 70000 rub', workday: 'Полный рабочий день', city: 'Новый Уренгой' },
    { name: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', workday: 'Полный рабочий день', city: 'Москва' },
    { name: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', workday: 'Сменный график работы', city: 'Самара' },
    { name: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', workday: 'Полный рабочий день', city: 'Тюмень' }]

    return <div className={style.wrapper}>

        <div className={style.form}>
            <TextField id="outlined-basic" label="Введите название вакансии" variant="outlined" />
            <Button variant="contained">Поиск</Button>
        </div>

        {arr.map((el, i) =>
            <div className={style.item} key={i}>
                <h2>{el.name}</h2>
                <div className={style.schedule}>
                    <h3>{el.salary}</h3>
                    <h4>•</h4>
                    <p>{el.workday}</p>
                </div>
                <div className={style.location}>
                    <div className={style.geo}></div>
                    <p>{el.city}</p>
                </div>
            </div>
        )}
    </div>

}



export default Vacancy