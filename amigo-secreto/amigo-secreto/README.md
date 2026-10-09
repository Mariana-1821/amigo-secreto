# 🎁 Amigo Secreto

> Uma aplicação web divertida para sortear quem vai tirar quem no amigo secreto! Chega de papelzinho dobrado — deixe o JavaScript fazer o sorteio por você. ✨

<p align="center">
  <img src="./assets/imagem-presente.png" alt="Imagem de um presente" width="220">
</p>

## 🕹️ O que a aplicação faz

Imagine reunir a galera, adicionar cada nome numa lista e, com um clique, descobrir quem vai presentear quem — tudo isso numa telinha estilosa em tons de azul neon e verde-água! 💙💚

A ideia é simples:

1. 📝 Digite o nome de um amigo e clique em **Adicionar**.
2. 🔁 Repita até colocar todo mundo na lista.
3. 🎲 Clique em **Sortear** e deixe a mágica acontecer.
4. 🔄 Quer recomeçar? É só clicar em **Reiniciar**.

A tela já vem prontinha (HTML + CSS), com os botões:

| Botão            | O que deve fazer                                  |
| ---------------- | --------------------------------------------------|
| ➕ **Adicionar** | Inclui o nome digitado na lista de amigos         |
| 🎲 **Sortear**   | Sorteia aleatoriamente um nome da lista           |
| 🔄 **Reiniciar** | Limpa a lista de amigos e o resultado do sorteio  |

---

## 🗂️ Estrutura do projeto

```
amigo-secreto/
├── assets/
│   └── imagem-presente.png   🖼️  imagem do presente exibida na página
├── js/
│   └── app.js                 🧠  cérebro da aplicação (ainda vazio... por enquanto!)
├── index.html                 🏗️  estrutura da página
├── style.css                  🎨  estilo (já pronto, visual neon)
└── README.md                  📖  você está aqui
```

O [index.html](index.html) já chama três funções que precisam morar em [js/app.js](js/app.js):

- `adicionar()` — acionada pelo botão ➕ **Adicionar**
- `sortear()` — acionada pelo botão 🎲 **Sortear**
- `reiniciar()` — acionada pelo link 🔄 **Reiniciar**

E três elementos esperam ser manipulados via JavaScript:

- `#nome-amigo` — 📥 campo de texto onde o nome é digitado
- `#lista-amigos` — 👥 onde a lista de amigos deve aparecer
- `#lista-sorteio` — 🏆 onde o resultado do sorteio deve aparecer

---

## 🚀 Como clonar e executar o projeto

Relaxa, esse projeto é 100% HTML, CSS e JavaScript puro — sem build, sem dependências, sem dor de cabeça. 🙌

1. Clone o repositório:

   ```bash
   git clone https://github.com/lenoln-prof/amigo-secreto.git
   cd amigo-secreto
   ```

2. Abra o [index.html](index.html) direto no navegador — ou, para uma experiência com recarregamento automático, use a extensão **Live Server** no VS Code. ⚡

Não precisa instalar Node, npm nem nada disso. É só abrir e brincar! 🎉

---

## 🧩 O que precisa ser implementado

O arquivo [js/app.js](js/app.js) está vazio — é a sua missão dar vida a essa aplicação! 🛠️

1. **📦 Uma estrutura de dados** (tipo um array) para guardar os nomes dos amigos.
2. **➕ Função `adicionar()`**
   - Ler o valor digitado em `#nome-amigo`.
   - Verificar se o campo não está vazio (ninguém quer um amigo secreto sem nome 👻).
   - Adicionar o nome à lista.
   - Atualizar a exibição em `#lista-amigos`.
   - Limpar o campo depois de adicionar.
3. **🎲 Função `sortear()`**
   - Verificar se há amigos suficientes para sortear.
   - Sortear aleatoriamente um nome da lista.
   - Mostrar o resultado em `#lista-sorteio`.
4. **🔄 Função `reiniciar()`**
   - Zerar a lista de amigos.
   - Limpar `#lista-amigos` e `#lista-sorteio`.
   - Usar `event.preventDefault()` para o link não "pular" a página.

---

## 💡 Dicas

- Use `document.getElementById()` para pegar os elementos (`nome-amigo`, `lista-amigos`, `lista-sorteio`). 🎯
- Para sortear, combine `Math.random()` com `Math.floor()` e escolha um índice aleatório do array. 🎰
- Trate os erros com carinho: um `alert()` amigável quando o campo estiver vazio ou quando faltar gente pra sortear. ⚠️
- Para listar vários amigos de uma vez, `forEach`, `map` ou `join` são ótimos parceiros. 🤝
- Teste tudo no navegador: adiciona, sorteia, reinicia, repete — igual um ensaio de festa! 🎊
- Abra o Console do navegador (DevTools) sempre que algo não sair como esperado. 🔍

---

## 📬 Entrega

Antes de comemorar o presente sorteado, confira: ✅

1. Os três botões (`Adicionar`, `Sortear`, `Reiniciar`) funcionam direitinho na interface.
2. Nenhum erro aparece no console do navegador.
3. As alterações em `js/app.js` foram commitadas com uma mensagem clara.
4. O link do repositório (ou do deploy, se houver) foi enviado conforme pedido pela disciplina. 🎓

Boa sorte e bom sorteio! 🍀🎁
