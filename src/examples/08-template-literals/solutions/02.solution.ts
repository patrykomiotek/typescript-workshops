/**
 * Stwórz typ HttpMethod reprezentujący metody HTTP:
 * "GET", "POST", "PUT", "DELETE". Następnie stwórz typ ApiEndpoint,
 * który będzie łączył metodę HTTP, znak "/", a następnie dowolny string.
 */
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'; // change me
type ApiEndpoint = `${HttpMethod}/${string}`; // change me

// example usage:
const endpoint1: ApiEndpoint = 'GET/users'; // Poprawne
const endpoint2: ApiEndpoint = 'POST/create-user'; // Poprawne

// @ts-expect-error
const endpoint3: ApiEndpoint = 'PATCH/update'; // Błąd - niepoprawna metoda HTTP
