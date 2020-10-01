import React, {useEffect} from "react";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas} from "../../../redux/actions/pizzas";
import {PizzaLoadingBlock} from "./PizzaBlock/PizzaLoadingBlock";
import {setCategory, setSortBy} from "../../../redux/actions/filters";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";

const Main = () => {

  const dispatch = useDispatch()

  const {items, isLoaded} = useSelector(({pizzas}) => ({items: pizzas.items, isLoaded: pizzas.isLoaded}))
  const {category, sortBy} = useSelector(({filters}) => filters)


  useEffect(() => {
      dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy])

  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback(type => {
    dispatch(setSortBy(type))
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={[
            'Мясные',
            'Вегетарианская',
            'Гриль',
            'Острые',
          ]}
        />
        <Sort
          onClickSortType={onSelectSortType}
          activeSortType={sortBy.type}
          items={[
            { name: 'Популярности', type: 'popular', order: 'desc'},
            { name: 'Цене', type: 'price', order: 'desc'},
            { name: 'Алфавиту', type: 'name', order: 'asc'}
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { isLoaded ?
          items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
          : Array(12)
            .fill(0)
            .map((_, index) => (<PizzaLoadingBlock key={index} />))}
      </div>
    </div>
  );
};

export default Main