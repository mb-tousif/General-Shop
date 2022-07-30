import React, { useEffect, useState } from "react";
import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import { useSelector, useDispatch } from "react-redux";
import { getFashion} from "../../Redux/Action/fashionAction";
import { getFurniture } from "../../Redux/Action/furnitureAction";
import { getTopOffer} from "../../Redux/Action/topOfferAction";
import { Link } from "react-router-dom";
const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;
const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;
const ListWrapper = styled(List)`
  position: absolute;
  background: #fff;
  color: green;
  margin-top: 36px;
  width: 30%;
`;

const Search = () => {
  const [text, setText] = useState("");
  const { fashion } = useSelector((state) => state.getFashion);
  const { furniture } = useSelector((state) => state.getFurniture);
  const { topOffer } = useSelector((state) => state.getTopOffer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFashion());
    dispatch(getFurniture());
    dispatch(getTopOffer());
  }, [dispatch]);
  const getText = (text) => {
    setText(text);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="search for product brands and more"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <ContentPasteSearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {fashion || furniture || topOffer
            .filter((pd) =>
              pd.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((pd) => (
              <ListItem>
                <Link
                  to={`/${fashion||furniture||topOffer}/${pd._id}`}
                  onClick={() => setText("")}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {pd.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;