#  Teste de Carga com k6 — Tile Server

Este repositório contém um script de **teste de carga utilizando k6** para simular múltiplas requisições de tiles (blocos de mapa), reproduzindo cenários de zoom e navegação intensa em mapas web.

O objetivo é validar a **performance**, **estabilidade** e **capacidade de resposta** de um Tile Server.

---

##  Objetivo do Teste

* Simular múltiplos usuários acessando tiles simultaneamente
* Gerar tráfego semelhante a zoom/pan agressivo
* Medir tempo de resposta, taxa de falhas e saturação
* Verificar a robustez do servidor durante carga

---

##  Tecnologias utilizadas

* **k6** — ferramenta de teste de carga
* **JavaScript** — para scripting
* **Tile Server Local ou GeoServer** (opcional, recomendado)

---

## Pré-requisitos

### 1. Instalar o k6

Windows:

```bash
choco install k6
```

Linux:

```bash
sudo apt install k6
```

Mac:

```bash
brew install k6
```

### 2. Subir um Tile Server local (recomendado)

Evita bloquear servidores públicos.



## Estrutura do Projeto

```
/
├── tiles-load-test.js   # Script de teste de carga
└── README.md            # Este arquivo
```

---

## Como rodar o teste

No terminal, dentro da pasta do projeto:

```bash
k6 run tiles-load-test.js
```

Você verá métricas como:

* `http_req_duration` (tempo de resposta)
* `http_req_failed` (falhas)
* `vus` (usuários simultâneos)
* `iterations` (requisições)
* `checks` (asserts)

---

## Configuração do Teste

O script executa:

* Ramp-up inicial
* Período de carga constante
* Ramp-down final
* Requisições aleatórias de tiles, simulando navegação real

O script pode ser ajustado para:

* Modificar quantidade de usuários
* Alterar intensidade das requisições
* Usar tiles específicos com zoom real

---

## ⚠️ Aviso IMPORTANTE

**Não execute testes de carga em servidores públicos**

Isso viola termos de uso e pode resultar em banimento.
Sempre utilize **servidores locais ou autorizados**.

---

## Licença

Este projeto pode ser utilizado livremente para estudo, testes e análise de performance.

---

## Contribuição

Pull requests são bem-vindos!
Sinta-se à vontade para melhorar o script, adicionar dashboards, métricas ou integrações com Grafana.

---

## Contato

Se quiser apoio para adaptar o teste para:

* WMS
* WFS
* GeoServer
* APIs de geoprocessamento
* Testes distribuídos

basta abrir uma issue ou entrar em contato.
