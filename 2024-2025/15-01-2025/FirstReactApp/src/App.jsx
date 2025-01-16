import React from 'react';
import Card from './components/Card.jsx';
import Particles from './components/Particles.jsx';

const dataFromApi = [
    { title: "Card 1", content:"Any content", shares: 10, likes: 10 },
    { title: "Card 2", content:"Any content", shares: 50, likes: 50 },
    { title: "Card 3", content:"Any content", shares: 20, likes: 40 },
    { title: "Card 4", content:"Any content", shares: 30, likes: 30 },
    { title: "Card 5", content:"Any content", shares: 40, likes: 20 },
]

function App() {
    return (
        <div>
            <Particles count={10} width={50} height={50} />
            <Particles count={20} width={100} height={100} />
            <Particles count={100} width={200} height={600} />

            <h3>All cards</h3>

            {/* Пример рендера списка данных */}
            {dataFromApi.map((item, i) => 
                <Card 
                    key={i}
                    title={item.title} 
                    content={item.content} 
                    shares={item.shares} 
                    likes={item.likes} 
                />
            )}

            {/* Пример заполнения компонент в ручную */}
            {/* <Card title="Card 1" content="Any content" shares={10} likes={10} />
            <Card title="Card 2" content="Any 1 content" shares={11} likes={1} />
            <Card title="Card 3" content="Any 2 content" shares={20} likes={15} /> */}
        </div>
    );
}

export default App;
