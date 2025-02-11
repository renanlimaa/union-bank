# Union Bank

## Descrição

**Union Bank** é um aplicativo financeiro desenvolvido com o objetivo de fornecer uma interface simples e intuitiva para os usuários gerenciarem suas finanças pessoais. O app oferece funcionalidades como cadastro de conta, gerenciamento de saldo, pagamentos e transferências, tudo diretamente pelo navegador.

Este projeto está sendo criado em colaboração entre Renan Lima e Gabriela Reis, com a ideia de proporcionar uma experiência digital acessível e eficiente.

## Funcionalidades

- **Cadastro de Conta**: Crie uma conta de usuário com um processo rápido e fácil.
- **Visão Geral da Conta**: Acompanhe o saldo atual e o histórico de transações em tempo real.
- **Pagamentos e Transferências**: Realize transferências e pague boletos diretamente pelo app.
- **Cartões Virtuais**: Gere cartões virtuais para compras online de forma segura.
- **Histórico de Transações**: Visualize todas as suas transações anteriores com filtros e ordenação.
- **Notificações em Tempo Real**: Receba alertas sobre pagamentos, saldos e outras atividades.

## Tecnologias Utilizadas

- **HTML**: Para a estrutura básica do aplicativo.
- **CSS**: Para a estilização e design da interface.
- **JavaScript**: Para funcionalidades interativas e dinâmica do aplicativo.
- **LocalStorage**: Para armazenar dados temporários, como o estado da conta e transações.
- **Axios**: Para realizar requisições HTTP e integração com APIs externas.
- **Font Awesome**: Para ícones e gráficos modernos e interativos.
- **Google Fonts**: Para fontes personalizadas e uma melhor experiência de leitura.

## Estrutura do Projeto

```bash
/union-bank
|-- /assets            # Imagens, ícones e outros recursos
|-- /css               # Arquivos de estilo (CSS)
|-- /js                # Arquivos de script (JavaScript)
|-- /index.html        # Página inicial do aplicativo
|-- README.md          # Este arquivo
```

## Como rodar:

**1. Clonando o Repositório**


```
git clone https://github.com/renanlimaa/union-bank
cd union-bank
```

**2. Abrindo o Projeto**


O projeto pode ser visualizado diretamente no navegador. Para isso, basta abrir o arquivo index.html.


## Funcionalidades

### 1. **Tela de Login**
   - O usuário será solicitado a inserir **seu nome** e uma **agência fictícia** composta por **5 dígitos**.
   - Após o preenchimento, ao clicar em "Entrar", o usuário será redirecionado para a **tela inicial** do app.

### 2. **Tela Inicial**
   - **Exibição de Saldo**: Na tela inicial, o usuário verá seu saldo atual.
   - **Funcionalidades Visuais**:
     - Exibição de **transações recentes**, **histórico de pagamentos** e **notificações**.
     - A interface incluirá **botões e links** visuais para navegação (como "Transferir", "Pagar Boleto", etc.), mas sem funcionalidades ativas (a parte lógica será adicionada posteriormente).
   - **Design Simples e Intuitivo**: Layout com uma interface limpa e minimalista para uma boa experiência do usuário, mantendo o foco nas funcionalidades visuais.

### 3. **Interatividade**
   - A interface será interativa com transições suaves, mas sem a implementação das funcionalidades completas neste estágio.
   - Os dados serão simulados diretamente na página, permitindo que o usuário interaja com os elementos visuais sem a necessidade de armazenamento persistente.


### Como Contribuir


1. Faça um **fork** do repositório.
2. Crie uma **branch** para suas alterações:


```
git checkout -b minha-feature
```


3. Faça suas alterações e **commit**:


```
git commit -am 'Adicionando nova funcionalidade'
```


4. Faça o **push** para sua branch:


```
git push origin minha-feature
```


5. Abra um Pull Request para a branch main.


### Testes


Este projeto não possui testes automatizados no momento, mas testes manuais podem ser realizados verificando a interatividade das funcionalidades como cadastro, pagamentos e histórico de transações diretamente no navegador.


## Licença


Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.








