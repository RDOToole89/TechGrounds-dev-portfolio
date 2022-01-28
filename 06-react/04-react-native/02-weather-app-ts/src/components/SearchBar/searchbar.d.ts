export interface ISearchBar {
  searchInput: string;
  handleSearchOnChange(userInput: string): void;
  onClickSetCity(): void;
}
