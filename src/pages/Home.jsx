import React from 'react'
import { Categories, PizzaBlock, SortPopup } from '../components'





function Home({ items }) {
    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={(name) => console.log(name)} items={['Мясные', 'Вегетереянцкие', 'Гриль', 'Острые', 'Закрытые',]} />
                {/*SortPopup*/}
                <SortPopup items={['Популярности', 'Цене', 'Алфавиту', 'Топ Продаш']} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
                }

            </div>
        </div>
    )
}

export default Home