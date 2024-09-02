/**
 * Stwórz enum DayOfWeek z dniami tygodnia.
 * Następnie napisz funkcję getWorkingHours, która
 * przyjmuje dzień tygodnia i zwraca liczbę godzin pracy
 * (np. 8 dla dni roboczych, 0 dla weekendu).
 */

// Zdefiniuj enum DayOfWeek

// Zaimplementuj funkcję getWorkingHours
function getWorkingHours(day: DayOfWeek): number {
  // Użyj switch do określenia liczby godzin
}

// Przykładowe użycie:
console.log(getWorkingHours(DayOfWeek.Monday)); // Powinno zwrócić 8
console.log(getWorkingHours(DayOfWeek.Saturday)); // Powinno zwrócić 0
