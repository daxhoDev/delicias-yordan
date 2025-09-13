import { Combo, Pizza } from "@/src/types/dataTypes";
import {
  createCenaCerdo,
  createCenaPollo,
  createPizza,
  createProduct,
  createItem,
} from "@/src/helpers/productGenerators";

const combos: Combo[] = [
  {
    title: "Combo familiar",
    items: [
      createItem(
        "arroz imperial plus (cerdo, pollo, jamón, camarón, queso y vegetales salteados)",
        "1 unidad"
      ),
      createItem("pizza familiar de jamón y queso gouda", "1 unidad"),
      createItem("ensalada fría", "4 litros"),
      createItem("tartaletas", "50 unidades"),
      createItem("caja de cerveza", "1 caja"),
      createItem("caja de malta", "1 caja"),
      {
        title: "Una bandeja de entrantes que trae:",
        items: [
          createItem("bolitas de queso con dulce de piña", "20 unidades"),
          createItem(
            "croquetas de jamón y queso con salsa rosa",
            "20 unidades"
          ),
          createItem(
            "tostones rellenos de jamón, queso y vegetales salteados",
            "12 unidades"
          ),
          createItem(
            "tacos mexicanos de jamón, queso y vegetakles salteados",
            "6 unidades"
          ),
        ],
      },
    ],
    price: 30500,
    important: "Reservar con al menos tres días de anticipación",
  },
  {
    title: "Combo especial",
    items: [
      createItem("ensalada fría", "2 litros"),
      createItem("tartaletas", "15 unidades"),
      createItem("cangrejitos", "15 unidades"),
      createItem("mantecados", "15 unidades"),
      createItem("empanadillas", "15 unidades"),
      createItem("bolitas de queso", "15 unidades"),
      createItem("croquetas", "15 unidades"),
    ],
    extras: [createProduct("Dulces (cada uno)", 16)],
    price: 2950,
  },
  {
    title: "Combo #1",
    items: [
      createItem("bolitas de queso", "50 unidades"),
      createItem("empanadillas", "50 unidades"),
      createItem("croquetas", "50 unidades"),
      createItem("pastelitos", "50 unidades"),
      createItem("cangrejitos", "50 unidades"),
      createItem("mantecados", "50 unidades"),
    ],
    price: 4600,
    extras: [createProduct("Tartaletas opcionales (cada una)", 16)],
  },
  {
    title: "Combo #2",
    items: [
      createItem("bolitas de queso", "30 unidades"),
      createItem("croquetas", "30 unidades"),
      createItem("empanadillas", "30 unidades"),
      createItem("pastelitos", "30 unidades"),
      createItem("cangrejitos", "30 unidades"),
      createItem("mantecados", "30 unidades"),
    ],
    price: 3100,
    extras: [createProduct("Tartaletas opcionales (cada una)", 16)],
  },
  {
    title: "Combo #3",
    items: [
      createItem("bolitas de queso", "20 unidades"),
      createItem("empanadillas", "20 unidades"),
      createItem("pastelitos", "20 unidades"),
      createItem("cangrejitos", "20 unidades"),
      createItem("mantecados", "20 unidades"),
    ],
    price: 2300,
    extras: [createProduct("Tartaletas opcionales (cada una)", 16)],
  },
  {
    title: "Combo #4",
    items: [
      createItem("ensalada fría", "4 litros"),
      createItem("tartaletas", "50 unidades"),
      createItem("mantecados", "50 unidades"),
      createItem("pastelitos", "50 unidades"),
    ],
    price: 5800,
    extras: [createProduct("Agregados de otros dulces (cada uno)", 16)],
  },
  {
    title: "Combo #5",
    items: [
      createItem("ensalada fría", "4 litros"),
      createItem("tartaletas", "30 unidades"),
      createItem("mantecados", "30 unidades"),
      createItem("croquetas", "30 unidades"),
    ],
    price: 4800,
    extras: [createProduct("Agregados de otros dulces (cada uno)", 16)],
  },
  {
    title: "Combo #6",
    items: [
      createItem("ensalada fría", "2 litros"),
      createItem("tartaletas", "20 unidades"),
      createItem("pastelitos", "20 unidades"),
      createItem("mantecados", "20 unidades"),
      createItem("croquetas", "20 unidades"),
    ],
    price: 3000,
    extras: [createProduct("Agregados de otros dulces (cada uno)", 16)],
  },
  {
    title: "Combo #7",
    items: [
      createItem("cupcakes con merengue", "15 unidades"),
      createItem("pastelitos", "15 unidades"),
      createItem("empanadillas", "15 unidades"),
      createItem("cangrejitos", "15 unidades"),
      createItem("bolitas de queso", "15 unidades"),
      createItem("croquetas", "15 unidades"),
    ],
    price: 3800,
    extras: [
      createProduct("Agregado de dulces (cada uno)", 16),
      createProduct("Cupcakes (cada uno)", 150),
    ],
    important: "Reservar con al menos tres días de anticipación",
  },
  {
    title: "Combo #8",
    items: [
      createItem("cupcakes con merengue", "20 unidades"),
      createItem("mini donas", "20 unidades"),
      createItem("pastelitos", "20 unidades"),
      createItem("cangrejitos", "20 unidades"),
      createItem("mantecados", "20 unidades"),
      createItem("empanadillas", "20 unidades"),
      createItem("bolitas de queso", "20 unidades"),
      createItem("croquetas", "20 unidades"),
    ],
    price: 5600,
    extras: [
      createProduct("Dulces de buffet (cada uno)", 16),
      createProduct("Mini donas (cada una)", 30),
      createProduct("Cupcakes (cada uno)", 150),
    ],
    important: "Reservar con al menos tres días de anticipación",
  },
  {
    title: "Combo #9",
    items: [
      createItem("mini donas", "50 unidades"),
      createItem("caramelos", "50 unidades"),
      createItem("bolitas de queso", "50 unidades"),
      createItem("croquetas", "50 unidades"),
      createItem("empanadillas", "50 unidades"),
      createItem("pastelitos", "50 unidades"),
      createItem("cangrejitos", "50 unidades"),
      createItem("mantecados", "50 unidades"),
    ],
    price: 7200,
    extras: [
      createProduct("Dulces (cada uno)", 16),
      createProduct("Mini donas (cada una)", 30),
    ],
    important: "Reservar con al menos tres días de anticipación",
  },
  {
    title: "Combo #10",
    items: [
      createItem("ensalada fría", "2 litros"),
      createItem("mini donas", "30 unidades"),
      createItem("caramelos", "30 unidades"),
      createItem("mantecados", "30 unidades"),
      createItem("pastelitos", "30 unidades"),
      createItem("cangrejitos", "30 unidades"),
      createItem("empanadillas", "30 unidades"),
      createItem("tartaletas", "30 unidades"),
      createItem("bolitas de queso", "30 unidades"),
    ],
    price: 5850,
    extras: [
      createProduct("Ensalada fría (cada litro)", 750),
      createProduct("Dulces (cada uno)", 16),
      createProduct("Mini donas (cada una)", 30),
    ],
    important: "Reservar con al menos tres días de anticipación",
  },
  {
    title: "Combo #11",
    items: [
      createItem("ensalada fría", "2 litros"),
      createItem("cake mediano (22cm de diámetro x 8cm de alto)", "1 unidad"),
      createItem("caramelos", "25 unidades"),
      createItem("mini donas", "25 unidades"),
      createItem("bolitas de queso", "25 unidades"),
      createItem("croquetas", "25 unidades"),
      createItem("empanadillas", "25 unidades"),
      createItem("pastelitos", "25 unidades"),
      createItem("cangrejitos", "25 unidades"),
      createItem("mantecados", "25 unidades"),
      createItem("tartaletas", "25 unidades"),
    ],
    price: 9500,
    extras: [
      createProduct("Ensalada fría (cada litro)", 750),
      createProduct("Mini donas (cada una)", 30),
      createProduct("Dulces (cada uno)", 16),
    ],
    important: "Reservar con al menos tres días de anticipación",
  },
  {
    title: "Combo #12",
    items: [
      createItem("Cake de dos pisos", "1 unidad"),
      createItem("Panetela mediana y pequeña", "30 raciones"),
      createItem("cupcakes con merengue personalizados", "30 unidades"),
      createItem("ensalada fría", "4 litros"),
      createItem("mini donas", "30 unidades"),
      createItem("caramelos", "30 unidades"),
      createItem("bolitas de queso", "30 unidades"),
      createItem("croquetas", "30 unidades"),
      createItem("empanadillas", "30 unidades"),
      createItem("mantecados", "30 unidades"),
      createItem("pastelitos", "30 unidades"),
      createItem("cangrejitos", "30 unidades"),
      createItem("tartaletas", "30 unidades"),
    ],
    price: 19_000,
    extras: [
      createProduct("Ensalada fría (cada litro)", 750),
      createProduct("Cupcakes personalizados (cada uno)", 170),
      createProduct("Mini donas (cada una)", 30),
      createProduct("Dulces (cada uno)", 16),
    ],
    important: "Reservar con al menos tres días de anticipación",
  },
  {
    title: "Combo #13",
    items: [
      createItem("ensalada fría", "1 litro"),
      createItem("cake pequeño (16cm de diámetro x 8cm de alto)", "1 unidad"),
      createItem("mini donas", "10 unidades"),
      createItem("caramelos", "10 unidades"),
      createItem("pastelitos", "10 unidades"),
      createItem("cangrejitos", "10 unidades"),
      createItem("empanadillas", "10 unidades"),
      createItem("mantecados", "10 unidades"),
      createItem("tartaletas", "10 unidades"),
      createItem("bolitas de queso", "10 unidades"),
      createItem("croquetas", "10 unidades"),
    ],
    price: 4500,
    extras: [
      createProduct("Ensalada fría (cada litro)", 750),
      createProduct("Mini donas (cada una)", 30),
      createProduct("Dulces (cada uno)", 16),
    ],
    important: "Reservar con al menos tres días de anticipación",
  },
];

const combosZelle: Combo[] = [
  {
    title: "Combo de comida cruda",
    items: [
      createItem("arroz importado", "20 libras"),
      createItem("paquete de pollo", "1 unidad"),
      createItem("paquete de salchichas grande", "1 unidad"),
      createItem("cartón de huevos", "1 unidad"),
      createItem("pomos de aceite", "2 unidades"),
      createItem("azúcar blanca", "10 libras"),
      createItem("paquete de leche", "1 unidad"),
      createItem("racimo de plátanos", "1 unidad"),
      createItem("frijoles", "5 libras"),
      createItem("latas de pasta de tomate", "2 unidades"),
      createItem("pata de ajo", "1 unidad"),
      createItem("caja de malta", "1 caja"),
      createItem("confituras", "15 unidades"),
    ],
    price: 260,
    isZelle: true,
  },
  {
    title: "Combo Zelle #1",
    items: [
      createItem(
        "cake redondo mediano, cubierto de chocolate y relleno de leche condensada",
        "1 unidad"
      ),
      createItem("caja de malta", "1 caja"),
      createItem("pizza familiar de jamón y queso gouda", "1 unidad"),
      createItem("ensalada fría", "4 litros"),
      {
        title: "Una cena de cerdo asado acompañada de:",
        items: [
          createItem("Cena de cerdo asado", "15 raciones"),
          createItem("viandas", "15 raciones"),
          createItem("ensaladas mixtas", "15 raciones"),
          createItem("congris", "15 raciones"),
        ],
      },
      {
        title: "1 bandeja de entrates que trae:",
        items: [
          createItem("bolitas de queso con dulce de piña", "20 unidades"),
          createItem(
            "croquetas de jamón y queso con salsa rosa",
            "20 unidades"
          ),
          createItem(
            "tostones rellenos de jamón y queso y vegetales salteados",
            "12 unidades"
          ),
          createItem(
            "tacos medianos de jamón, queso y vegetales salteados",
            "6 unidades"
          ),
        ],
      },
      {
        title: "Buffet para 50 personas que trae:",
        items: [
          createItem("bolitas de queso", "50 unidades"),
          createItem("croquetas", "50 unidades"),
          createItem("empanadillas", "50 unidades"),
          createItem("mantecados", "50 unidades"),
          createItem("pastelitos", "50 unidades"),
          createItem("cangrejitos", "50 unidades"),
          createItem("tartaletas", "50 unidades"),
        ],
      },
    ],
    price: 195,
    important: "Reservar con al menos tres días de anticipación",
    isZelle: true,
    extras: [
      createProduct("Dulces (cada uno)", 16),
      createProduct("Mini donas (cada una)", 30),
      createProduct("Cupcakes (cada uno)", 150),
    ],
  },
  {
    title: "Combo Zelle #2",
    items: [
      createItem(
        "cake mediano redondo con cobertura de chocolate relleno de leche condensada",
        "1 unidad"
      ),
      createItem("pizza familiar de jamón y queso gouda", "1 unidad"),
      createItem("ensalada fría", "4 litros"),
      createItem("caja de malta", "1 caja"),
      {
        title: "Buffet para 50 personas que incluye:",
        items: [
          createItem("cangrejitos", "50 unidades"),
          createItem("pastelitos", "50 unidades"),
          createItem("mantecados", "50 unidades"),
          createItem("empanadillas", "50 unidades"),
          createItem("bolitas de queso", "50 unidades"),
          createItem("croquetas", "50 unidades"),
          createItem("tartaletas", "50 unidades"),
        ],
      },
      {
        title: "Una bandeja de entrantes que trae:",
        items: [
          createItem("bolitas de queso con dulce de piña", "20 unidades"),
          createItem(
            "croquetas de jamón y queso con salsa rosa",
            "20 unidades"
          ),
          createItem(
            "tostones rellenos de jamón, queso y vegetales salteados",
            "12 unidades"
          ),
          createItem(
            "tacos mexicanos de jamón, queso y vegetales salteados",
            "6 unidades"
          ),
        ],
      },
    ],
    price: 100,
    important: "Reservar con al menos tres días de anticipación",
    isZelle: true,
    extras: [
      createProduct("Dulces (cada uno)", 16),
      createProduct("Mini donas (cada una)", 30),
      createProduct("Cupcakes (cada uno)", 150),
    ],
  },
];

export const cenas: Combo[] = [
  createCenaCerdo(10, 17_500),
  createCenaCerdo(15, 25_000),
  createCenaCerdo(25, 37_000),
  createCenaCerdo(50, 140_000, "cinco"),
  createCenaPollo(10, 13_800),
  createCenaPollo(15, 18_500),
];

const pizzasFamiliaresGouda: Pizza[] = [
  createPizza("Napolitana", 2400),
  createPizza("de Vegetales", 3000),
  createPizza("Hawaiana", 3100),
  createPizza("con Camarones", 3350),
];
