### Estrutura De Dados Avançada

### Instruções

1 - Clone o Repo
2 - Rode npm install
3 - Ache a File src/index.ts
3 - Rode npm run dev

### Razões

Ps. Não me dei conta das atividades, ainda que tenha estudado o assunto durante as semanas. Me baseei nesse vídeo do Free Code Camp sobre Binary Tree
https://github.com/JoaoVicPugliesi/Advanced_Data_Structures.git

Além disso também tenho lido esse livro que foi recomendação de um amigo
https://www.amazon.com.br/Entendendo-Algoritmos-Ilustrado-Programadores-Curiosos/dp/8575225634

Enfim, resolverei todas as atividades que o senhor passou durante o período até então.
Irei usar Typescript, porém... posso realizar uma versão em Python caso o senhor queira.

Irei usar OOP e alguns principios de S.O.L.I.D caso haja necessidade. O que quero dizer é que seria interessante trazer essas problemáticas para uma perspectiva real de software. Além de aplicar design patters (Small-Commits, Repositories, Dependency Injection etc...) e evitar anti-patterns (God Class, Speculative Generality etc...)

### Explicações

Em relação ao Design, acabei escolhendo o Domain Driving Design (DDD) que busca validar a lógica de negócio (Camada domínio) desacoplada de qualquer IMPLEMENTAÇÃO. A primeira coisa a se realizar nesse caso é a CAPTURA dos Objetos de Valor (Entities) que derivam da descrição que um Domain Expert (Cliente) indiretamente compartilharia ao descrever as razões pelas quais ele enxerga a necessidade da construção de uma plataforma (Software). Após indentificarmos os objetos de valor precisamos mensurar o que chamamos de casos de uso, que se baseam nas possíveis ações em que cada Entidade possa vir a ter no nosso sistema, ou seja, como as Entidades se relacionam e como cada relação demonstra peculiaridades que a separa das demais. 

Na busca por alcançar esse desfecho (Separação da camada Domínio e Infra) usamos princípios S.O.L.I.D e alguns design patterns que possibilitam separarmos responsabilidades de maneira coesa e clara (Single Responsability Principle (S do Solid)) como no caso em que na Entidade Binary Tree apenas recebe as Dependências (Contratos) e ganha acesso a diversos metódos sem se preocupar com a real implementação ou mesmo sem precisar instanciar tais contratos (Classes) (Ps. Claro, não segui a risca... pois como expliquei na introdução o ideal é sapararmos em casos de usos e enfim... nesse caso o único caso aparece dentro da Entidade em si). Além disso, ao invés de injetar a implementação em si, usei do Dependency Inversion Principle (D do Solid) para não prender a minha entidade a uma única forma de implementar os diferentes contratos envolvendo a entidade BinaryTree (A prova disso é que dentro de services/IOrderService.ts eu apenas defino o contrato com três methods correspondentes a aquele contexto e injeto ele no constructor da minha entidade, sem me preocupar com a real implementação, pois, a partir do momento em que minha lógica de negócio se encontra definida, não importa se vou implementar as diferentes ordenações possíveis de maneira recursiva ou iterativa). Além disso uso alguns Design Patterns como Repositories que basicamente são pontes de acesso aos dados (Faria + sentido caso eu usasse um banco de dados). Factory na hora de compor as classes, etd...

ps. Não cumpri a risca o DDD... pois, nesse caso o projeto não precisaria ser escalável em sua totalidade.

### Atividades

### 1 - Árvore Binária (18 de Fev a 25 de Fev)

Desc - Implementar uma árvore binária em Python (🫣), permitindo a inserção de nós e a exibição da árvore em diferentes ordens de percurso (pré-ordem, em-ordem e pós-ordem).

### 2 - Teste Estrutura de Dados (25 de Março)

Desc - 

| Pilha: Inversão de String
Entrada: "Hello"
Saída: "olleH"

| Fila: Simulação
Entrada: [] (enfileirar 1, 2, desenfileirar)
Saída: 1

| Fila: Reversão
Entrada: 1, 2, 3
Saída: 3, 2, 1

| Árvore: Crie uma estrutura de árvore binária

| Árvore: Filhos
Entrada: 10 (filhos: 5, 15)
Saída: [5, 15]

### 3 - Máximo de Nós (1 de Abril)

Desc - Dado o nó raiz de uma árvore binária, retorne sua profundidade máxima.

A profundidade máxima de uma árvore binária é o número de nós ao longo do caminho mais longo do nó raiz até o nó folha mais distante.

mplemente uma função para calcular a profundidade máxima da árvore binária. Além disso, crie funções que determinem a quantidade máxima de nós percorridos em outras ordens de travessia, como:

Pré-ordem (preorder)

Em ordem (inorder)

Pós-ordem (postorder)

Depois, explique o raciocínio que o levou a resolução dessa tarefa.
