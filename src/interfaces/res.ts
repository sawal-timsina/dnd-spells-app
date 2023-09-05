export interface Res<T extends any> {
  count: number;
  results: T;
}
