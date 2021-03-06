# Roadmap

## Objetivos Específicos

- [x] disponibilizar um canal interativo para o desenvolvimento e compartilhamento de atividades
- [ ] ter um mecanismo de notificações em tempo real para o acompanhamento das atividades;
- [x] validar as expressões regulares especificadas, bem como determinar a equivalência entre duas expressões regulares.


## Requisitos Funcionais e Não Funcionais

- [x] permitir o usuário cadastrar-se através de outras aplicações como Google e
Facebook (Requisito Funcional - RF)
- [x] permitir a utilização de perfis de usuário – professor e aluno (RF)
- [x] permitir o professor criar e gerenciar turmas (RF)
- [x] permitir o professor criar atividades sobre expressões regulares (RF)
- [x] gerar um conjunto de valores válidos e inválidos para a atividade conforme a
expressão regular especificada (RF)
- [x] permitir o professor distribuir as atividades para os alunos (RF)
- [x] permitir os alunos resolverem as atividades propostas (RF)
- [x] validar as atividades submetidas pelos alunos conforme a resposta fornecida pelo
professor (RF)
- [ ] mostrar o andamento das atividades em tempo real para agilizar o processo de
validação (RF)
- [ ] permitir o usuário verificar a equivalência entre duas expressões regulares (RF)
- [x] seguir o protocolo OAuth para autenticação (Requisito Não Funcional - RNF)
- [x] ser desenvolvida em HTML5, CSS3 e JavaScript (RNF)
- [ ] utilizar WebSocket para a comunicação em tempo real (RNF)
- [x] ter suporte para os navegadores Chrome e Firefox (RNF)


## Regras de Negócio

### Exercícios

- [x] `Descrição` é um campo obrigatório
- [x] `Expressão Regular` é um campo obrigatório
- [ ] `Expressão Regular` só deve permitir letras minúsculas, números e os caracteres especiais `|`, `(`, `)`, `{`, `}`, `+`, `*` e `?`
- [ ] Em `Etapas`:
  - [ ] `Valores` deve ser gerado com base nos símbolos extraídos de `Expressão Regular`
    - [x] Extração de caracteres minúsculos
    - [ ] Extração de números (saber diferenciar entre o literal `1` e a notação especial `{1}`)
- [x] `Exclusão` não deveria ser permitida quando estiver sendo utilizado por uma `Atividade`

### Atividades

- [x] `Nome` é um campo obrigatório
- [x] Permitir vincular `Exercícios`
  - [x] Buscar informações sempre que abrir a tela de `Exercícios`
  - [x] Não exibir `Exercícios` já adicionados na listagem
- [ ] Ao menos um `Exercício` deve ser informado para continuar o cadastro
- [x] `Exclusão` não deveria ser permitida quando estiver sendo utilizado por uma `Turma`

### Turmas

- [x] `Nome` é um campo obrigatório
- [x] Permitir cadastrar `Tarefas`
  - [x] `Atividade` deve ser um combo conforme as `Atividades` cadastradas pelo usuário
  - [x] `Atividade` é um campo obrigatório
  - [x] `Prazo de Entrega` é um campo obrigatório
  - [x] `Prazo de Entrega` precisa ser uma data superior ou igual ao dia de hoje
  - [ ] `Notificar conclusões de exercícios` deve ser um campo de marcação
    - [ ] Deve estar desabilitado por padrão
- [x] `Exclusão` não deveria ser permitida quando estiver vinculado a um `Aluno`
- [ ] Ao menos uma `Tarefa` deve ser informada para continuar o cadastro

## Melhorias

### Exercícios

- [ ] `Expressão Regular` não pode possuir mais de `4 símbolos` identificados
- [ ] `Expressão Regular` deve validar o uso correto dos caracteres especiais
- [ ] `Expressão Regular` quando for informada igual uma existente, deveria notificar o usuário
- [ ] Em `Etapas`:
  - [ ] `Limite de símbolos` não pode ser maior que `10`
  - [ ] Deveria notificar quando um `Limite de símbolos` for inferior a uma `Etapa` anterior ou superior a uma `Etapa` posterior

### Interfaces

- [ ] Em listagens:
  - [x] Mecanismo de notificação de `Carregando` para o usuário saber que dados estão sendo buscados e precisa ser aguardado
  - [ ] Trocar os checkbox de exclusões por ícones de lixeira
  - [ ] Paginação no `Painel do Professor` e em telas modais de seleção
- [ ] Procurar por um componente para datas mais adequado do que o `HTML5` provê
- [ ] Procurar por um componente de seleção que permita efetuar paginação e pesquisa por texto
- [ ] Mostrar uma mensagem quando a sessão do usuário expirar (atualmente as requisições somente começam a falhar e nada é renderizado)
