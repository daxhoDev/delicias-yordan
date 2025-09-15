import Food from "@/src/components/icons/food";
import Heart from "@/src/components/icons/heart";
import Plane from "@/src/components/icons/plane";
import Speed from "@/src/components/icons/speed";

export default [
  {
    title: "Tú eliges",
    description:
      "Contamos con una variedad de ofertas para todos los gustos y necesidades",
    icon: <Food width={64} height={64} />,
  },
  {
    title: "Rápido y sabroso",
    description: "Cocina de excelencia sin largas esperas",
    icon: <Speed width={64} height={64} />,
  },
  {
    title: "Tan lejos y tan cerca",
    description:
      "No importa la distancia, dale un gusto a ese ser querido en Holguín",
    icon: <Plane width={64} height={64} />,
  },
  {
    title: "Te escuchamos",
    description: "Quieres una entrega personalizada? No importa, dinos",
    icon: <Heart width={64} height={64} />,
  },
];
