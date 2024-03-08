# TypeScript - Design Patterns - Padrões de Projeto - GOF

## Gangs of Four (GoF)

Gangs of Four Design Patterns é a coleção de 23 padrões de design do livro “Design Patterns: Elements of Reusable Object-Oriented Software”.

- Autores:
  - Erich Gamma;
  - Richard Helm;
  - Ralph Johnson;
  - John Vlissides;

## Tipos de padrão de design GoF

- Os padrões de design GoF são divididos em três categorias:

  ```Creational | Structural | Behavioral```

  - Creational - (Criacional):
    - Os padrões de design que tratam da criação de um objeto.

  - Structural (Estrutural):
    - Os padrões de design nesta categoria tratam da estrutura de classes, como Herança e Composição.

  - Behavioral (Comportamental):
    - Este tipo de padrão de design fornece solução para uma melhor interação entre objetos, como fornecer acoplamento perdido e flexibilidade para estender facilmente no futuro.

## Padrões de design ```Creational```

- Singleton:
  - O padrão singleton restringe a inicialização de uma classe para garantir que apenas uma instância da classe possa ser criada.

- Factory:
  - O padrão Factory tira a responsabilidade de instanciar um objeto da classe para uma classe Factory.

- Abstract Factory:
  - Nos permite criar uma Fábrica para classes de fábrica.

- Builder:
  - Criando um objeto passo a passo e um método para finalmente obter a instância do objeto.

- Prototype:
  - Criar uma nova instância de objeto a partir de outra instância semelhante e modificá-la de acordo com nossos requisitos.

## Padrões de design ```Structural```

- Adapter:
  - Fornece uma interface entre duas entidades não relacionadas para que possam trabalhar juntas.

- Composite:
  - Usado quando precisamos implementar uma hierarquia parte-todo. Por exemplo, um diagrama feito de outras peças como círculo, quadrado, triângulo, etc.

- Proxy:
  - Forneça um substituto ou espaço reservado para outro objeto para controlar o acesso a ele.

- Flyweight:
  - Armazenamento em cache e reutilização de instâncias de objetos, usadas com objetos imutáveis. Por exemplo, conjunto de strings.

- Facade:
  - Criação de interfaces wrapper sobre interfaces existentes para ajudar aplicativos clientes.

- Bridge:
  - O padrão de design bridge é usado para desacoplar as interfaces da implementação e ocultar os detalhes da implementação do programa cliente.

- Decorator:
  - O padrão de design decorador é usado para modificar a funcionalidade de um objeto em tempo de execução.

## Padrões de design ```Behavioral```

- Template Method:
  - Usado para criar um stub de método de modelo e adiar algumas das etapas de implementação para as subclasses.

- Mediator:
  - Usado para fornecer um meio de comunicação centralizado entre diferentes objetos em um sistema.

- Chain of Responsibility:
  - Usado para obter acoplamento fraco no design de software, onde uma solicitação do cliente é passada para uma cadeia de objetos para processá-los.

- Observer:
  - Útil quando você está interessado no estado de um objeto e deseja ser notificado sempre que houver alguma alteração.

- Strategy:
  - Usado quando temos vários algoritmos para uma tarefa específica e o cliente decide a implementação real a ser usada em tempo de execução.

- Command:
  - Usado para implementar acoplamento perdido em um modelo de solicitação-resposta.

- State:
  - Usado quando um objeto altera seu comportamento com base em seu estado interno.

- Visitor:
  - Usado quando temos que realizar uma operação em um grupo de objetos semelhantes.

- Interpreter:
  - Define uma representação gramatical para uma língua e fornece um intérprete para lidar com esta gramática.

- Iterator:
  - Usado para fornecer uma maneira padrão de percorrer um grupo de objetos.

- Memento:
  - Usado quando queremos salvar o estado de um objeto para que possamos restaurá-lo posteriormente.
