// Tutaj skopiuj kod zadania
type mockFunction<T> = (arg: any) => T;
type memoFunciton<T> = (arg: any) => T;

export function memoize<T>(calcFunction: mockFunction<T>): memoFunciton<T> {

    if (typeof calcFunction !== 'function') {
        throw new Error('Function to be memoized must be a function.');
    }

    const cache: Record<string, T> = {};

    return (
        (arg: any): T => {
            const key = String(arg)
            if (cache[key] === undefined) {
                cache[key] = calcFunction(arg)
            }
            return cache[key]
        })
}
//Przygotowując się do najważniejszego okresu w roku Święty Mikołaj zauważył, że jego pomocnicy tracą dużo czasu na powtarzanie tych samych operacji przy obliczaniu trajektorii lotu sań z prezentami. Aby zoptymalizować pracę, Mikołaj postanowił wprowadzić poprawkę algorytmu, która pozwoli na przechowywanie i ponowne wykorzystanie wyników obliczeń. Niestety, nikt z zespołu elfów nie potrafił zaimplementować takiej funkcjonalności. Pomóż Mikołajowi i jego pomocnikom w rozwiązaniu tego problemu.

