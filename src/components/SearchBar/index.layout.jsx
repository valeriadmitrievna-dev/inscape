import React from "react";
import {
  Search,
  RightSideButton,
  SearchResults,
  ResultUser,
} from "./index.styled";
import { ReactComponent as MessageIcon } from "../../assets/message-icon.svg";
import { Link } from "react-router-dom";
import Image from "./../Image/index";
import { Badge } from "antd";

export default function SearchLayout({
  t,
  results,
  notifications,
  keyword,
  setKeyword,
  isDropddown,
  setDropddown,
}) {
  return (
    <Search>
      <input
        type="text"
        placeholder={t("search")}
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        onBlur={() => setDropddown(false)}
        onFocus={() => setDropddown(true)}
      />
      <RightSideButton>
        <Badge dot={!!notifications.length} color="cyan">
          <MessageIcon />
        </Badge>
      </RightSideButton>
      <SearchResults active={isDropddown}>
        {!!results.length ? (
          results.map((user, id) => (
            <Link to={`/profile/${user.username}`} key={id}>
              <ResultUser>
                <div>
                  {user.profile_photo ? (
                    <Image src={user.profile_photo} />
                  ) : (
                    user.full_name
                      ?.split(" ")
                      .map((word) => word[0])
                      .join("")
                  )}
                </div>
                <span>{user.full_name}</span>
              </ResultUser>
            </Link>
          ))
        ) : !!keyword ? (
          <p>No users found with that full name</p>
        ) : (
          <p>Start typing to find someone</p>
        )}
      </SearchResults>
    </Search>
  );
}
