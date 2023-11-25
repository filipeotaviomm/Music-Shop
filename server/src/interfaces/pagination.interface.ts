export type Pagination = {
  page: number;
  perPage: number;
  order: 'asc' | 'desc';
  sort: 'price';
  prevPage: string;
  nextPage: string;
}