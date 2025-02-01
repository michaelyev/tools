import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { debounce } from "lodash";

import Box from "@component/Box";
import Menu from "@component/Menu";
import Card from "@component/Card";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import MenuItem from "@component/MenuItem";
import { Span } from "@component/Typography";
import TextField from "@component/text-field";
import StyledSearchBox from "./styled";
import { generateSearchUrl } from "@utils/data_fetch/searchFunction";

export default function SearchInputWithCategory() {
  const [resultList, setResultList] = useState([]); // Состояние для результатов
  const [category, setCategory] = useState(""); // Состояние для выбранной категории
  const [searchValue, setSearchValue] = useState(""); // Состояние для текста поиска

  // Обработка смены категории
  const handleCategoryChange = useCallback((cat) => {
    setCategory(cat);
    if (searchValue) fetchSearchResults(searchValue, cat);
  }, [searchValue]);

  // Получение результатов поиска с сервера
  const fetchSearchResults = useCallback(
    async (query, selectedCategory) => {
      try {
        const url = generateSearchUrl({
          q: query,
          category: selectedCategory || "",
          page: 1,
          pageSize: 5,
        });

        const response = await fetch(url); // Отправка запроса
        const data = await response.json(); // Получение данных

        if (data && data.products) {
          setResultList(data.products); // Обновляем результаты
        } else {
          console.error("Некорректный ответ от сервера:", data);
          setResultList([]);
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
        setResultList([]);
      }
    },
    []
  );

  // Обработчик для поля поиска
  const search = debounce((e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (!value) {
      setResultList([]);
    } else {
      fetchSearchResults(value, category);
    }
  }, 300);

  const handleSearch = useCallback((event) => {
    event.persist();
    search(event);
  }, [category]);

  // Закрытие выпадающего списка при клике вне
  const handleSearchBoxClick = (event) => event.stopPropagation();
  const handleDocumentClick = () => setResultList([]);

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => window.removeEventListener("click", handleDocumentClick);
  }, []);

  return (
    <Box position="relative" flex="1 1 0" maxWidth="670px" mx="auto">
      <StyledSearchBox onClick={handleSearchBoxClick}>
        <Icon className="search-icon" size="18px">
          search
        </Icon>
        <TextField
          fullwidth
          onChange={handleSearch}
          className="search-field"
          placeholder="Search and hit enter..."
        />
        <Menu
          direction="right"
          className="category-dropdown"
          handler={
            <FlexBox className="dropdown-handler" alignItems="center">
              <span>{category || "All Categories"}</span>
              <Icon variant="small">chevron-down</Icon>
            </FlexBox>
          }>
          {categories.map((item) => (
            <MenuItem key={item} onClick={() => handleCategoryChange(item)}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      </StyledSearchBox>

      {/* Отображение выпадающего списка с результатами */}
      {!!resultList.length && (
        <Card position="absolute" top="100%" py="0.5rem" width="100%" boxShadow="large" zIndex={99}>
          {resultList.map((item, idx) => (
            <Link href={`/product/search/${item.slug}`} key={idx}>
              <MenuItem>
                <Span fontSize="14px">{item.title}</Span>
              </MenuItem>
            </Link>
          ))}
        </Card>
      )}
    </Box>
  );
}

const categories = ["All Categories", "Earthmoving", "Paint"];
