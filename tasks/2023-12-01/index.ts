// Tutaj skopiuj kod zadania
export class GiftRegistry {

   private giftList: Map<number, string[]> = new Map();

   addGift(id: number, gift: string) {
      let gifts = (this.giftList.get(id) || [])
      gifts.push(gift)
      this.giftList.set(id, gifts)
   }

   removeGift(id: number, name: string) {
      let gifts = this.giftList.get(id)
      if (gifts == undefined) {
         throw ('Child not found')
      } else {
         if (gifts.includes(name)) {
            gifts = gifts.filter(x => x != name)
            this.giftList.set(id, gifts || [])
         }
         else {
            throw ('Gift not found')
         }
      }
   }

   getGiftsForChild(number: number) {
      return this.giftList.get(number)
   }
}


// W pierwszych dniach okresu przedświątecznego, Święty Mikołaj napotkał na nieoczekiwane wyzwanie. Jego główny komputer, który przechowuje listę prezentów dla dzieci na całym świecie, uległ awarii. Na szczęście dane nie zostały utracone, ale zostały całkowicie pomieszane. Każde dziecko ma przypisane ID i listę prezentów, które chciałoby otrzymać, ale teraz wszystko jest w nieładzie. Mikołaj musi szybko uporządkować te informacje, aby zapewnić, że każde dziecko otrzyma właściwe prezenty na czas. Mikołaj potrzebuje systemu, który pomoże mu zorganizować listę prezentów. Każdy prezent ma unikalny identyfikator i należy do konkretnego dziecka. Twoim zadaniem jest stworzenie struktury danych, która pozwoli Mikołajowi szybko odnaleźć wszystkie prezenty należące do danego dziecka oraz umożliwi łatwe dodawanie i usuwanie prezentów z listy. Pomóż Mikołajowi i zaprojektuj wydajną strukturę danych, która rozwiąże jego problem przed świętami!