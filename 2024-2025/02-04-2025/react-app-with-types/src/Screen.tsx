import { FC, PropsWithChildren  } from "react";


type ScreenProps = {
    title: string;
    footer: string;
} & PropsWithChildren // Объединение типов

export const Screen: FC<ScreenProps> = (props) => {
    const { children, title, footer } = props;

    return (
        <div className="screen">
            <header>{title}</header>
            {children}
            <header>{footer}</header>
        </div>
    )
}


// Пример работы Generic
type Hero<HeroFeature> = {
    name: string;
    age: number;
    feature: HeroFeature
}

type Flyable = {
    fly: () => void;
}

const customHero: Hero<Flyable> = {
    name: '',
    age: 20,
    feature: {
        fly: () => {}
    }
}