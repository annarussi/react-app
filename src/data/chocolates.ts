export interface Chocolates {
  name: string;
  type: string;
  filling: string;
  description: string;
  weight: number;
  img: string;
}

export const chocolates: Chocolates[] = [
  {
    name: "Alexandre Le Grand",
    type: "dark",
    filling: "caramel",
    description: "Dark chocolate, caramel cream",
    weight: 15,
    img: "ts_alexandre_le_grand_noir.png?itok=e0Iz_kOD"

  },

  {
    name: "Bûche White",
    type: "white",
    filling: "praliné",
    description: "White chocolate, tender praliné",
    weight: 15,
    img: "ts_buche_blanc.png?itok=rjpPs64m"
  },

  {
    name: "Avelanne",
    type: "milk",
    filling: "ganache",
    description: "Milk chocolate, milk chocolate ganache with hazelnut cream",
    weight: 15,
    img: "ts_avelanne.png?itok=vRD31VxJ"
  },

  {
    name: "Bûche Marzipan",
    type: "dark",
    filling: "marzipan",
    description: "Dark chocolate, pistachio-flavoured marzipan",
    weight: 20,
    img: "profil_buche_pistache.png?itok=icBShOTa"
  },

  {
    name: "Advocaat Dark",
    type: "dark",
    filling: "liquor",
    description: "Dark chocolate, advocaat-flavoured crème confiseur",
    weight: 15,
    img: "profil_advocaat.png?itok=hoKMVIgQ"
  },

  {
    name: "Alexandre Le Grand Orange",
    type: "milk",
    filling: "caramel",
    description: "Milk Chocolate, soft caramel cream with pieches of lightle candied orange peel",
    weight: 15,
    img: "ts_alexandre_le_grand_orange.png?itok=MUkyCuw-"
  },

  {
    name: "Bergamote",
    type: "milk",
    filling: "caramel",
    description: "Milk chocolate, bergamot-flavoured caramel cream",
    weight: 15,
    img: "ts_bergamote.png?itok=Du9djH9f"
  },
]
