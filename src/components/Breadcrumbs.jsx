import { Link } from "react-router";

export default function Breadcrumbs({ breadcrumbsConfig }) {
  return (
    <div className="breadcrumbs">
      {breadcrumbsConfig.map((item, index) => (
        <>
          {item.isLink ? (
            <Link to={item.route} className="breadcrumbs-item">
              {item.title}
            </Link>
          ) : (
            <p className="breadcrumbs-item breadcrumbs-item__current">{item.title}</p>
          )}
          {index < breadcrumbsConfig.length - 1 ? (
            <span className="breadcrumbs-divider">{"/"}</span>
          ) : null}
        </>
      ))}
    </div>
  );

  // return (
  //   <div className="breadcrumbs">
  //     <p className="breadcrumbs-item">Все категории</p>
  //     <span className="breadcrumbs-divider">{"/"}</span>
  //     <p className="breadcrumbs-item">Ноутбуки</p>
  //     <span className="breadcrumbs-divider">{"/"}</span>
  //     <p className="breadcrumbs-item">Lenovo LOQ</p>
  //   </div>
  // );
}
