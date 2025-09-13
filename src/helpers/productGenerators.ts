import { Combo, Pizza, Product, Item } from "@/src/types/dataTypes";

export function createItem(title: string, quantity: string): Item {
  return {
    title,
    quantity,
  };
}
export function createCenaCerdo(
  persons: number,
  price: number,
  diasAntelacion: string = "tres"
): Combo {
  return {
    title: `Cena de cerdo asado para ${persons} personas`,
    items: [
      createItem("Cerdo asado", `${persons} raciones`),
      createItem("Congris", `${persons} raciones`),
      createItem("Viandas", `${persons} raciones`),
      createItem("Ensaladas mixtas", `${persons} raciones`),
    ],
    price,
    important: `Reservar con al menos ${diasAntelacion} días de anticipación`,
  };
}

export function createCenaPollo(
  persons: number,
  price: number,
  diasAntelacion: string = "tres"
): Combo {
  return {
    title: `Cena de pollo asado para ${persons} personas`,
    items: [
      createItem("Encuentros de pollo asado", `${persons} unidades`),
      createItem("Arroz salteado con jamón y vegetales", `${persons} raciones`),
      createItem("Viandas", `${persons} raciones`),
      createItem("Ensaladas mixtas", `${persons} raciones`),
    ],
    price,
    important: `Reservar con al menos ${diasAntelacion} días de anticipación`,
  };
}

export function createProduct(
  title: string,
  price: number,
  isZelle?: boolean
): Product {
  return {
    title,
    price,
    isZelle,
  };
}

export function createPizza(title: string, price: number): Pizza {
  return {
    title,
    price,
    extras: [
      createProduct("Queso Gouda", 700),
      createProduct("Jamón", 700),
      createProduct("Piña", 500),
      createProduct("Vegetales", 700),
      createProduct("Aceitunas", 700),
      createProduct("Camarones", 900),
    ],
  };
}
