import { FilterComponent } from "./filter-component"
import { SearchComponent } from "./search-component"

export const SearchFilterComponent = () => {
  return (
    <div className="flex gap-2 px-2">
      <FilterComponent />
      <SearchComponent />
    </div>
  )
}
