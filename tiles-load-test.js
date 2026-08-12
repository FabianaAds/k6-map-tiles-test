import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 50 },   // sobe para 50 usuários
    { duration: "2m", target: 200 },   // mantém 200 usuários
    { duration: "30s", target: 0 }     // reduz para 0
  ],
};

const TILE_URL = "https://seuservico.com/tiles/{z}/{x}/{y}.png";

// Função para gerar tiles aleatórios simulando pan + zoom
function randomTile() {
  const z = Math.floor(Math.random() * 6) + 10; // Zoom 10–15
  const x = Math.floor(Math.random() * 3000);
  const y = Math.floor(Math.random() * 3000);

  return TILE_URL
    .replace("{z}", z)
    .replace("{x}", x)
    .replace("{y}", y);
}

export default function () {
  const url = randomTile();

  let res = http.get(url);

  check(res, {
    "status 200": (r) => r.status === 200,
  });

  sleep(0.5); // pausa curta entre requisições
}
