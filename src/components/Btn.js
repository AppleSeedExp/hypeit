import { store } from "../Store";
import { NavLink } from "react-router-dom";

export const Btn = ({ id, icon1, icon2, text, link }) => {
  const [header, setHeader] = store.useState("Header");

  return (
    <>
      {header == text ||
      (header == "Choose Product Type" && text == "My Store") ? (
        <div>
          <input
            name="tab"
            id={id}
            type="radio"
            checked
            className="btn flex"
          ></input>
          <label for={id} className="flex flex-row">
            <img src={icon1} className="mr-[20px]"></img>
            {text}
          </label>
        </div>
      ) : (
        <NavLink to={link}>
          <input name="tab" id={id} type="radio" className="btn flex"></input>
          <label for={id} className="flex flex-row">
            <img src={icon2} className="mr-[20px]"></img>
            {text}
          </label>
        </NavLink>
      )}
    </>
  );
};
