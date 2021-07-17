import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import SearchLayout from "./index.layout";

export default function SearchBar() {
  const { t } = useTranslation();
  const { all_users } = useSelector((state) => state.root);

  const notifications = [1, 3];

  const [results, setResults] = useState([]);
  const [isDropddown, setDropddown] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (all_users.length > 0) {
      const filtered = all_users.filter((user) => {
        if (keyword?.replace(/[' ']+/g, "") === "" || !keyword) {
          return false;
        } else {
          return (
            user.full_name.toLowerCase().includes(keyword.toLowerCase()) ||
            user.username.toLowerCase().includes(keyword.toLowerCase())
          );
        }
      });
      setResults(filtered.slice(0, 5));
    }
  }, [keyword]);

  return (
    <SearchLayout
      t={t}
      notifications={notifications}
      keyword={keyword}
      setKeyword={setKeyword}
      results={results}
      isDropddown={isDropddown}
      setDropddown={setDropddown}
    />
  );
}
