{
  type Video = {
    title: string;
    author: string;
  };
  // [1, 2].map(item => item * item); // [1, 4]

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  // Optional에 전달된 Video는 Video의 키를 optional로 만든다.
  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: 'dog',
  };
  animal.name = 'ellie';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'ellie',
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
