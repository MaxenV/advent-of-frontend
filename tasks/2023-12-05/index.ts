// Tutaj skopiuj kod zadania

export class ChristmasEmitter {
    cache: Map<string, Function[]> = new Map();
    c2 = {};

    on(name: string, callBack: Function) {
        this.cache.set(
            name,
            this.cache.get(name)?.concat([callBack]) || [callBack]
        );
    }

    off(name: string, callBack: Function) {
        let old = this.cache.get(name);

        if (old !== undefined) {
            this.cache.set(
                name,
                old.filter(fn => fn !== callBack)
            )
        }
    }

    emit(name: string) {
        const fnArr = this.cache.get(name)
        if (typeof fnArr === 'object') {
            fnArr.forEach(fn => fn())
        }
    }

}

//Zespół Świętego Mikołaja napotkał niezwykłe wyzwanie.Otóż, jedna z maszyn w pracowni, odpowiedzialna za koordynowanie pracy elfów i rozdział prezentów, przestała działać.Ta maszyna to nic innego jak zaawansowany system zdarzeń, który informuje elfy o zmianach w liście prezentów i priorytetach dostaw.W związku z tym, Mikołaj musi szybko znaleźć sposób na naprawę systemu zdarzeń, aby wszystko wróciło do normy i prezenty zostały dostarczone na czas.Programiści będą musieli napisać nową implementację mechanizmu emitującego zdarzenia aby system do obsługi prezentów zaczął działać poprawnie.