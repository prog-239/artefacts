# React начало

## Шаги для создания проекта 

- Установить [NodeJS](https://nodejs.org/en/)
- Проверить, что NodeJS установился без ошибок, для этого в командной строке (cmd | shell | etc...) выполнить команду 
```sh
node -v
```
- Открыть командрую строку для директории в которой будет находиться проект React
- Для инициализации базового проекта будем использовать [ViteJS ](https://vite.dev/)
- В командной строке выполнить команду 
```sh
npm create vite 
# Заполнить имя для проекта
# Нажать enter при вводе названия модуля
# Выбрать React
# Выбрать JavaScript
```
- В командной строке перейти в директорию с собранным проектом 
```sh
cd YourProject
```
- Установить пакеты
```sh
npm install
```
- Запустить проект
```
npm run dev
```
- Проект должен запуститься на http://localhost:5173/

Поздравляю, твой проект создан!

## Обзор структуры проекта

Для старта все файлы в проекте не важны, важны только файлы:
- c расширением .jsx, [документация по JSX](https://ru.react.js.org/docs/introducing-jsx.html)
- package.json, это файл с описанием проекта и используемыми пакетами
- *.css - просто базовые CSS-файлы

## Основные команды для запуска проекта

- **npm run dev** - запустить проект, как делали в разделе **Шаги для создания проекта**
- **npm run build** - создаст директорию *dist* в которой будут находиться все файлы готовые к деплою (index.html, *.js, *.css)
Для интереса откройте файл js, посмотрите как там много всего. Это весь обработанный код, все ваши .jsx файлы были обработаны, минифицированы и помещены в итоговый .js файл и весь React.

## Создание React-компонент

Базовую структуру React-компоненты разберем на примере компоненты карточки продукта.

Всю работу выполним по шагам:

#### Шаг 1 - Создание файла с базовой структурой 

```jsx
// Файл ProductCard.jsx

import React from 'react'; // Импортируем React в файл для компоненты


// React-компонента это обычная JS-функция.
// Также можно использовать стрелочные функции.
function ProductCard() {

}

// Обязательно нужно экспортировать компоненту из файла
// Иначе ее нельзя будет переиспользовать
export default ProductCard;
```

#### Шаг 2 - Используем JSX для верстки визуального вида компоненты

```jsx
// Файл ProductCard.jsx

import React from 'react';


function ProductCard() {
    
    // Чтобы React-компонента, что-то рисовала
    // Она должна возвращать JSX
    // Поэтому пишем return, открываем круглые скобки, так как будем отдавать 
    // несколько строк кода и пишем JSX
    return (
        <div>
            <img src="ссылка_на_картинку_с_продуктом">
            <h4>Название продукта<h4>
            <div>
                <p>Описание продукта</p>
            </div>
            <div>
                <button>Добавить в корзину</button>
                <button>Добавить в избранное</button>
            </div>
        </div>
    )
}

export default ProductCard;
```

#### Шаг 3 - Используем props для заполнения динамических данных из вне

React-компонента, которая описана выше, не может переиспользоваться из-за того, что она иммет описание в виде хард-кода. Чтобы ее описание можно было задавать из вне, необходимо задать свойства.

props - это объект, который передается в аргумент React-компоненты (мы до сих пор помним, что React-компонента это обычная функция). В props можно передать какие-то данные для React-компоненты.

С этими уточнениями доработаем ProductCard.

```jsx
// Файл ProductCard.jsx

import React from 'react';


function ProductCard(props) {
    // В данном случае мы знаем, что props содержит данные 
    // name - название продукта
    // description - описание продукта
    // posterUrl - ссылка на изображение продукта

    return (
        <div>
            <img src={props.posterUrl}>
            <h4>{props.name}<h4>
            <div>
                <p>{props.description}</p>
            </div>
            <div>
                <button>Добавить в корзину</button>
                <button>Добавить в избранное</button>
            </div>
        </div>
    )
}

export default ProductCard;
```

#### Шаг 4 - стилизация компоненты

Стилизация компоненты происходит с помощью CSS.
Самый простой способ, это создать CSS файл и импортировать его в компоненту.

НО и еще раз НО, чтобы в JSX присвоить класс, нужно использовать не классический атрибут ```class``` как в html, а нужно использовать ```className```.

```jsx
// Файл ProductCard.jsx

import React from 'react';
import './ProductCard.css'; // Импортируем стили в компоненту

function ProductCard(props) {
    return (
        <div className="product-card">
            <img src={props.posterUrl} className="product-poster">
            <h4 className="product-name">{props.name}<h4>
            <div className="product-description">
                <p>{props.description}</p>
            </div>
            <div className="product-controls">
                <button>Добавить в корзину</button>
                <button>Добавить в избранное</button>
            </div>
        </div>
    )
}

export default ProductCard;
```

#### Использование компоненты

И вот компонента готова, теперь можно ее использовать в другом месте

```jsx
// Файл ShopScreen.jsx

import React from 'react';
import './ShopScreen.css';

import ProductCard from './components/ProductCard.jsx';

function ShopScreen() {
    return (
        <div className="shop-screen">
            {/* 
                Заполняем свойства для продукта.
                
                Атрибуты, которые мы заполняем, это на самом дела
                поля объекта props, который мы прочитаем в ProductCard
            **/}
            <ProductCard 
                name="Milk" 
                description="Fresh and creamy milk." 
                posterUrl="milk.jpg" 
            />
            <ProductCard 
                name="Bread" 
                description="Soft and freshly baked bread." 
                posterUrl="bread.jpg"
            />
            <ProductCard 
                name="Cheese" 
                description="Delicious and rich cheese." 
                posterUrl="cheese.png"
            />
            <ProductCard 
                name="Eggs" 
                description="Farm fresh eggs." 
                posterUrl="eggs.svg" 
            />
            <ProductCard 
                name="Butter" 
                description="Creamy and smooth butter." 
                posterUrl="butter.jpg" 
            />
        </div>
    )
}

export default ShopScreen;
```

Но тут нет динамики, хочется получать данные от api и отрисовывать список продуктов динамически.
Для этого можно использовать базовую функцию массивов в JS - [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)


```jsx
// Файл ShopScreen.jsx

import React from 'react';
import './ShopScreen.css';

import ProductCard from './components/ProductCard.jsx';


// Иммитация данных от api
const products = [
  {
    id: 1,
    name: "Milk",
    posterUrl: "milk.jpg",
    description: "Fresh and creamy milk."
  },
  {
    id: 2,
    name: "Bread",
    posterUrl: "bread.jpg",
    description: "Soft and freshly baked bread."
  },
  {
    id: 3,
    name: "Cheese",
    posterUrl: "cheese.png",
    description: "Delicious and rich cheese."
  },
  {
    id: 4,
    name: "Eggs",
    posterUrl: "eggs.svg",
    description: "Farm fresh eggs."
  },
  {
    id: 5,
    name: "Butter",
    posterUrl: "butter.jpg",
    description: "Creamy and smooth butter."
  }
];


function ShopScreen() {
    return (
        <div className="shop-screen">
            {products.map((item) => (
                // key - базовое поле React-компоненты
                // которое необходимо заполнять при отрисовке
                // списка элементов.
                // Заполнять key необходимо уникальным значением.
                // В данном случае это id продукта из массива данных 
                <ProductCard 
                    key={item.id}
                    name={item.name} 
                    description={item.description} 
                    posterUrl={item.posterUrl} 
                />
            ))}
        </div>
    )
}

export default ShopScreen;
```


# Простое домашнее задание
Сверстать простую страницу на React.

Страница должна состоять из следующих компонент

- Header - Верхний заглавный блок
  - В Header находится главное меню с ссылками: *Главная*, *Документация*, *Блог*
- Content - основной блок
  - Заголовок
  - Любая картинка (приветствуется что-то из IT-технологий)
  - Небольшой текст (на тему IT-технологий)
- Footer - Самый нижний блок
  - Указать текущий год
