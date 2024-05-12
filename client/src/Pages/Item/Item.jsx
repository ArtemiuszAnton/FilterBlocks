import { useParams } from 'react-router-dom';
import style from './style.module.scss';
import arr from '../../Storage/arr.json';


function Item() {

    const { id } = useParams()

    const [result] = arr.filter((el) => el.id === +id);

    return <>
        <div className={style.info}>

            <div className={style.item}>
                <h2>{result.name}</h2>
                <div className={style.schedule}>
                    <h3>{result.salary}</h3>
                    <h4>•</h4>
                    <p>{result.workday}</p>
                </div>

                <div className={style.location}>
                    <div className={style.geo}></div>
                    <p>{result.city}</p>
                </div>
            </div>

            <div className={style.description}>
                <h3>Обязанности:</h3>
                <ul>{result.responsibilities.map((el) => <li>{el}</li>)}</ul>

                <h3>Требования:</h3>
                <ul>{result.requirements.map((el) => <li>{el}</li>)}</ul>

                <h3>Условия:</h3>
                <ul>{result.conditions.map((el) => <li>{el}</li>)}</ul>

            </div>
        </div>
    </>

}

export default Item


