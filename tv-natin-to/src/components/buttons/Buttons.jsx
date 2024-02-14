import { Link } from "react-router-dom";

export const ButtonPrimary = ({ onclick, style, text }) => {
  return (
    <>
      <button className={style} onClick={onclick}>
        {text}
      </button>
    </>
  );
};

export const ButtonSecondary = ({ onclick, style, text, link, name }) => {
  return (
    <>
      <Link to={link}>
        <button className={style} onClick={onclick} name={name}>
          {text}
        </button>
      </Link>
    </>
  );
};

export const ButtonLink = ({ onclick, style, text }) => {
  return (
    <>
      <button className={style} onClick={onclick}>
        {text}
      </button>
    </>
  );
};
