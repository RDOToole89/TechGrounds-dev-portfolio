export interface SearchBarInterface {
  searchInput: string;
  handleSearchOnChange(userInput: string): void;
  onClickSetCity(): void;
}
