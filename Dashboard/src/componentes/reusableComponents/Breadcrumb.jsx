import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Breadcrumb = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  // console.log("bread", breadcrumbs);

  useEffect(() => {
    // Dividir la ruta en segmentos para construir el breadcrumb
    const pathSegments = router.asPath
      .split("/")
      .filter((segment) => segment !== "");

    // Construir el breadcrumb
    const breadcrumbItems = pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      let newSeg
      if (segment === 'eventosPh' || segment === 'events') {
        newSeg = 'Eventos'
      } else if (segment === 'clientes') {
        newSeg = 'Clientes'
      } else if (segment === 'calendario') {
        newSeg = 'Calendario'
      } else if (segment === 'createevent') {
        newSeg = 'Crear Evento'
      } else {
        newSeg = 'Detalle'
      }
      return { segment: newSeg, href };
    });

    setBreadcrumbs(breadcrumbItems);
  }, [router.asPath]);

  return (
    <nav className="text-sm" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex gap-2">
        {breadcrumbs.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <a
              href={item.href}
              className="text-[#6D6E6D] font-lato hover:text-indigo-950"
            >
              {index === 0 ?
                <div className="flex items-center">
                  <div className="iconoHome h-4 w-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12 14.4998H9.16667V10.9998C9.16667 10.3565 8.64333 9.83318 8 9.83318C7.35667 9.83318 6.83333 10.3565 6.83333 10.9998V14.4998H4C2.388 14.4998 1.5 13.6118 1.5 11.9998V7.76653C1.5 6.3512 1.89066 5.95584 2.52799 5.42718L6.60799 2.00652C7.41399 1.32986 8.58601 1.32986 9.39201 2.00652L13.472 5.42718C14.1093 5.95584 14.5 6.35187 14.5 7.76653V11.9998C14.5 13.6118 13.612 14.4998 12 14.4998ZM10.1667 13.4998H12C13.0513 13.4998 13.5 13.0512 13.5 11.9998V7.76653C13.5 6.7492 13.332 6.60988 12.834 6.19655L8.75 2.77256C8.31533 2.40856 7.68467 2.40856 7.25 2.77256L3.16602 6.19655C2.66802 6.60988 2.5 6.7492 2.5 7.76653V11.9998C2.5 13.0512 2.94867 13.4998 4 13.4998H5.83333V10.9998C5.83333 9.80518 6.80533 8.83318 8 8.83318C9.19467 8.83318 10.1667 9.80518 10.1667 10.9998V13.4998Z"
                        fill="#25314C"
                      />
                    </svg>
                  </div>
                  <p className="pl-2">Inicio</p>
                </div>
                :
                item.segment}
            </a>
            {index !== breadcrumbs.length - 1 && (
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.64645 3.64645C5.45118 3.84171 5.45118 4.15829 5.64645 4.35355L9.29289 8L5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536C5.84171 12.5488 6.15829 12.5488 6.35355 12.3536L10.3536 8.35355C10.5488 8.15829 10.5488 7.84171 10.3536 7.64645L6.35355 3.64645C6.15829 3.45118 5.84171 3.45118 5.64645 3.64645Z"
                    fill="#C3C3CB"
                  />
                </svg>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
