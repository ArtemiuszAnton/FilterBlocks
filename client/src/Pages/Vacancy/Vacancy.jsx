import { TextField, Button } from '@mui/material';
import style from './style.module.scss'

function Vacancy() {
    const arr = [{ name: 'Менеджер-дизайнер', salary: 'з/п от 70000 rub', workday: 'Полный рабочий день', city: 'Новый Уренгой' },
    { name: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', workday: 'Полный рабочий день', city: 'Москва' },
    { name: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', workday: 'Сменный график работы', city: 'Самара' },
    { name: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', workday: 'Полный рабочий день', city: 'Тюмень' }]

    return <div className={style.vacancies}>

        <div className={style.mui}>
            <TextField id="outlined-basic" label="Введите название вакансии" variant="outlined" />
            <Button variant="contained">Поиск</Button>
        </div>

        {arr.map((el, i) =>
            <div key={i}>
                <h2>{el.name}</h2>
                <p>{el.salary}</p>
                <p>{el.workday}</p>
                <p>{el.city}</p>
            </div>
        )}
    </div>

}



export default Vacancy