import styled from "styled-components";

const Ul = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  margin-top: 10px;

  & li {
    padding: 5px 0px;
    & a {
      color: #6578d9;
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 24px;
      max-height: 30px;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
`;
export default function List({ filters }) {
  const listItems = filters.map((item) => (
    <li>
      <a href="#"> {item}</a>
    </li>
  ));
  return (
    <>
      <Ul>{listItems}</Ul>
    </>
  );
}
