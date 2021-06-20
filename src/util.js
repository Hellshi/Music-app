import { v4 as uuid4 } from "uuid";

function ChillHop() {
  return [
    {
      name: "Now",
      id: uuid4(),
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15080",
      color: ["#E36A70", "#2E385B"],
      artist: "Misha, Jussi Halme",
      active: false,
    },

    {
      name: "Flashback",
      id: uuid4(),
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11225",
      color: ["#283155", "#B27297"],
      artist: "Blue Wendsday, Shopan",
      active: false,
    },

    {
      name: "Travelbag",
      id: uuid4(),
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=19058",
      color: ["#6F97D5", "#ECD7D2"],
      artist: "Sleepy Fish, mommy",
      active: false,
    },

    {
      name: "Skates",
      id: uuid4(),
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15226",
      color: ["#293435", "#AB6E2D"],
      artist: "SwuM",
      active: false,
    },

    {
      name: "Golden",
      id: uuid4(),
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13005",
      color: ["#43432B", "#607D42"],
      artist: "Aarigod",
      active: false,
    },
  ];
}

export default ChillHop;
