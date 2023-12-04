// Tutaj skopiuj kod zadania

export class ChristmasQueue<T>{
    private queue: Map<number, T[]> = new Map();

    enqueue(input: T, priority: number) {
        const prew = this.queue.get(priority) || []
        this.queue.set(priority, prew.concat(Array(input)))
    }
    dequeue() {
        const highPrioritykey = Array.from(this.queue.keys()).sort().pop()

        if (highPrioritykey != undefined) {
            let newGiftList = this.queue.get(highPrioritykey) || []
            const result = newGiftList.shift()
            if (newGiftList.length == 0) [
                this.queue.delete(highPrioritykey)
            ]
            else {
                this.queue.set(highPrioritykey, newGiftList)
            }
            return result
        }
        else {
            throw 'There are no letters in the queue!'
        }

    }

    isEmpty() {
        if (this.queue.size == 0)
            return true
        else
            return false
    }
}

/*Święty Mikołaj ma problem. Jego renifery zauważyły, że listy od dzieci z całego świata nie są odpowiednio sortowane. Listy powinny być uporządkowane według priorytetu, który jest wyrażony liczbą - im wyższa liczba, tym wyższy priorytet. Mikołaj potrzebuje systemu, który pomoże mu szybko i efektywnie organizować listy, aby żadne życzenie nie zostało pominięte. Renifery są ekspertami od logistyki, a nie od struktur danych, więc Mikołaj zwraca się o pomoc do programistów. Czy jesteś w stanie stworzyć dla niego odpowiednią strukturę danych, która pomoże mu w sortowaniu listów? Czas ucieka!*/