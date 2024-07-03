import React, { useEffect, useState } from "react";
import { bell } from "@/iconos/icons";
import { useDispatch, useSelector } from "react-redux";
import { getNotificaciones } from "@/redux/reducer/reducerNotifications";
import {
  getNoReadsNotificationsPhotographer,
  updateNoReadStateNotifications,
} from "../../../peticiones/notifications";
import { authSetLoading } from "@/redux/reducer/reducerAuth";
import Modal from "../DashboardComponets/Modal";

const NotificationModal = ({ onClose, notifications }) => {
  const [activeTab, setActiveTab] = useState("General");
  const dispatch = useDispatch();

  const handleMarkIsRead = (id) => {
    const notificationIds = id;
    updateNoReadStateNotifications({
      notificationIds,
      succes: () => {
        //si lo marca como leído exitosamente, actualiza la lista de notificaciones sin leer.
        getNoReadsNotificationsPhotographer({
          succes: (v) => {
            dispatch(getNotificaciones(v));
          },
          error: (e) => console.log("error", e),
          loading: (l) => dispatch(authSetLoading(l)), // Debes pasar el parámetro 'l' a authSetLoading
        });
      },
      error: (e) => console.log("error", e),
      loading: (l) => dispatch(authSetLoading(l)), // Debes pasar el parámetro 'l' a authSetLoading
    });
  };

  //para el empty state cuando no tiene notificaciones en esa seccion
  const emptyTab = notifications.filter((not) => not.eventType === activeTab);

  return (
    <div className="modal absolute bg-white rounded-[10px] shadow-lg py-4 px-5 fixed right-10 top-40 transform translate-x-1/5 font-lato w-[600px] z-1000">
      <button
        type="button"
        className="close close-button float-right mt-3 mr-2"
        onClick={onClose}
      >
        <span aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5297 12.4698C13.8227 12.7628 13.8227 13.2378 13.5297 13.5308C13.3837 13.6768 13.1917 13.7508 12.9997 13.7508C12.8077 13.7508 12.6158 13.6778 12.4698 13.5308L6.99975 8.06075L1.52975 13.5308C1.38375 13.6768 1.19175 13.7508 0.999749 13.7508C0.807749 13.7508 0.61575 13.6778 0.46975 13.5308C0.17675 13.2378 0.17675 12.7628 0.46975 12.4698L5.93975 6.99978L0.46975 1.52981C0.17675 1.23681 0.17675 0.761773 0.46975 0.468773C0.76275 0.175773 1.23775 0.175773 1.53075 0.468773L7.00076 5.93881L12.4707 0.468773C12.7637 0.175773 13.2387 0.175773 13.5317 0.468773C13.8247 0.761773 13.8247 1.23681 13.5317 1.52981L8.06175 6.99978L13.5297 12.4698Z"
              fill="#25314C"
            />
          </svg>
        </span>
      </button>
      <div className="modal-header">
        <h3 className="modal-title font-lato font-bold text-xl text-indigo-950">
          Notificaciones
        </h3>
      </div>

      <div className="tabs flex space-x-2 mt-4 w-full border-indigo-100 border-b-2 ">
        {["General", "Evento", "Billetera", "Multimedia"].map((tab) => (
          <button
            key={tab}
            className={`tab-button font-lato text-sm ${
              activeTab === tab
                ? "border-indigo-950 border-b-2 pb-1 text-indigo-950"
                : " text-gray-400"
            } px-4 py-2`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            
          </button>
        ))}
      </div>

      <div className="notifications mt-4">
        {!emptyTab.length && activeTab !== "General" && (
          <p className="mt-4 font-lato text-indigo-950 font-normal leading-loose ">
            No tienes notificaciones nuevas en esta sección.
          </p>
        )}
        {notifications.length === 0 && activeTab === "General" && (
          <p className="mt-4 font-lato text-indigo-950 font-normal leading-loose ">
            No tienes notificaciones nuevas.
          </p>
        )}

        {activeTab === "General" &&
          notifications.map((notification) => {
            // sacar cuanto hace que se creo la notificacion
            const fechaCreacionNotificacion = new Date(notification.created_at);
            const fechaActual = new Date();

            // Calculamos la diferencia en milisegundos
            const diferenciaMilisegundos =
              fechaActual - fechaCreacionNotificacion;

            // Convertimos la diferencia a minutos, horas y días
            const minutosTranscurridos = Math.floor(
              diferenciaMilisegundos / (1000 * 60)
            );
            const horasTranscurridas = Math.floor(minutosTranscurridos / 60);
            const diasTranscurridos = Math.floor(horasTranscurridas / 24);

            const time = () => {
              if (diasTranscurridos >= 1) return diasTranscurridos + " días";
              if (horasTranscurridas >= 1 && diasTranscurridos < 1)
                return horasTranscurridas + " horas";
              if (minutosTranscurridos <= 60 && horasTranscurridas < 1)
                return minutosTranscurridos + " minutos";
            };

            return (
              <div
                key={notification.id}
                className={`notification mt-3 ${
                  notification.isRead
                    ? "bg-white border-gray-300 border"
                    : "bg-zinc-100 border-gray-200 border"
                } p-2 rounded-[10px] mt-2 `}
              >
                {" "}
                <button
                  type="button"
                  className="close-button float-right pr-3 pt-4"
                  onClick={() => handleMarkIsRead(notification.id)}
                >
                  <span aria-hidden="true">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.185809 0.189191C0.429887 -0.054887 0.825615 -0.0548869 1.06969 0.189191L4.99662 4.11612L8.92354 0.189191C9.16762 -0.0548867 9.56335 -0.054887 9.80743 0.189191C10.0515 0.433269 10.0515 0.828997 9.80743 1.07307L5.8805 5L9.80743 8.92693C10.0515 9.171 10.0515 9.56673 9.80743 9.81081C9.56335 10.0549 9.16762 10.0549 8.92354 9.81081L4.99662 5.88388L1.06969 9.81081C0.825615 10.0549 0.429887 10.0549 0.185809 9.81081C-0.058269 9.56673 -0.0582689 9.171 0.185809 8.92693L4.11273 5L0.185809 1.07307C-0.0582689 0.828997 -0.058269 0.433269 0.185809 0.189191Z"
                        fill="#C3C3CB"
                      />
                    </svg>
                  </span>
                </button>
                <div className="flex flex-col justify-center items-start w-[90%]">
                  <div className="flex flex-row items-center w-[90%] pt-2">
                    <div className="rounded-full flex items-center justify-center mr-2 p-2 h-[50px] w-[50px] bg-[#DBDBDB]">
                      {notification.eventType === "Evento" && (
                        <span className="bg-[#E6E6E9] p-2 rounded-full">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.6667 2.54167H14.6041C14.4991 1.60667 13.7125 0.875 12.75 0.875H5.25C4.2875 0.875 3.50169 1.60667 3.39585 2.54167H2.33333C1.52917 2.54167 0.875 3.19583 0.875 4V5.37502C0.875 7.49669 2.49083 8.55919 3.84833 8.75169C4.63833 10.5525 6.34417 11.8625 8.375 12.0883V13.42C6.76 13.6342 5.875 14.7058 5.875 16.5V17.125H12.125V16.5C12.125 14.7058 11.24 13.635 9.625 13.42V12.0883C11.655 11.8625 13.3608 10.5525 14.1517 8.75169C15.5092 8.55919 17.125 7.49669 17.125 5.37502V4C17.125 3.19583 16.4708 2.54167 15.6667 2.54167ZM2.125 5.37502V4C2.125 3.885 2.21833 3.79167 2.33333 3.79167H3.375V6.5C3.375 6.78917 3.40413 7.07165 3.4458 7.34915C2.79413 7.07665 2.125 6.48419 2.125 5.37502ZM10.8225 15.875H7.1783C7.3458 15.0058 7.91748 14.625 9.00081 14.625C10.0841 14.625 10.6542 15.0058 10.8225 15.875ZM9.00254 10.875C9.00171 10.875 9.00083 10.8742 9 10.8742C8.99917 10.8742 8.99829 10.875 8.99746 10.875C6.58662 10.8733 4.625 8.91167 4.625 6.5V2.75C4.625 2.405 4.90583 2.125 5.25 2.125H12.75C13.0942 2.125 13.375 2.405 13.375 2.75V6.5C13.375 8.91167 11.4134 10.8733 9.00254 10.875ZM15.875 5.37502C15.875 6.48419 15.2059 7.07665 14.5542 7.34915C14.5967 7.07165 14.625 6.78917 14.625 6.5V3.79167H15.6667C15.7817 3.79167 15.875 3.885 15.875 4V5.37502Z"
                              fill="#25314C"
                            />
                          </svg>
                        </span>
                      )}
                      {notification.eventType === "Billetera" && (
                        <span className="bg-[#E6E6E9] p-2 rounded-full">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.625 4.2475V4C14.625 1.985 13.515 0.875 11.5 0.875H3.16667C1.9025 0.875 0.875 1.9025 0.875 3.16667V14C0.875 16.015 1.985 17.125 4 17.125H14C16.015 17.125 17.125 16.015 17.125 14V7.33333C17.125 5.5375 16.2433 4.46083 14.625 4.2475ZM15.875 12.125H12.75C11.9458 12.125 11.2917 11.4708 11.2917 10.6667C11.2917 9.8625 11.9458 9.20833 12.75 9.20833H15.875V12.125ZM3.16667 2.125H11.5C12.8142 2.125 13.375 2.68583 13.375 4V4.20833H3.16667C2.5925 4.20833 2.125 3.74083 2.125 3.16667C2.125 2.5925 2.5925 2.125 3.16667 2.125ZM14 15.875H4C2.68583 15.875 2.125 15.3142 2.125 14V5.20748C2.4375 5.36748 2.79167 5.45833 3.16667 5.45833H14C15.3142 5.45833 15.875 6.01917 15.875 7.33333V7.95833H12.75C11.2567 7.95833 10.0417 9.17333 10.0417 10.6667C10.0417 12.16 11.2567 13.375 12.75 13.375H15.875V14C15.875 15.3142 15.3142 15.875 14 15.875ZM13.175 9.83333H13.1833C13.6442 9.83333 14.0167 10.2067 14.0167 10.6667C14.0167 11.1267 13.6442 11.5 13.1833 11.5C12.7233 11.5 12.3458 11.1267 12.3458 10.6667C12.3458 10.2067 12.715 9.83333 13.175 9.83333Z"
                              fill="#25314C"
                            />
                          </svg>
                        </span>
                      )}
                      {notification.eventType === "Multimedia" && (
                        <span className="bg-[#E6E6E9] p-2 rounded-full">
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0.708008H4C1.985 0.708008 0.875 1.81801 0.875 3.83301V12.1663C0.875 14.1813 1.985 15.2913 4 15.2913H14C16.015 15.2913 17.125 14.1813 17.125 12.1663V3.83301C17.125 1.81801 16.015 0.708008 14 0.708008ZM4 1.95801H14C15.3142 1.95801 15.875 2.51884 15.875 3.83301V8.99048L12.5333 5.64962C11.9833 5.09878 11.0167 5.09878 10.4667 5.64962L6.5 9.61548L5.86666 8.98295C5.31666 8.43212 4.35001 8.43212 3.80001 8.98295L2.125 10.658V3.83301C2.125 2.51884 2.68583 1.95801 4 1.95801ZM14 14.0413H4C2.77333 14.0413 2.20997 13.5446 2.13914 12.4105L4.68329 9.86633C4.78912 9.76133 4.87663 9.76133 4.98246 9.86633L5.76503 10.6488C6.1542 11.0388 6.84502 11.038 7.23252 10.6488L11.3491 6.53219C11.455 6.42719 11.5425 6.42719 11.6483 6.53219L15.8734 10.7572V12.1663C15.875 13.4805 15.3142 14.0413 14 14.0413ZM4.625 5.49967C4.625 4.92467 5.09167 4.45801 5.66667 4.45801C6.24167 4.45801 6.70833 4.92467 6.70833 5.49967C6.70833 6.07467 6.24167 6.54134 5.66667 6.54134C5.09167 6.54134 4.625 6.07467 4.625 5.49967Z"
                              fill="#25314C"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                    <p className="font-lato font-semibold text-[#2E2E38]">
                      {notification.message}
                    </p>
                  </div>
                  <p className="text-gray-500 ml-[59px]">Hace {time()}</p>
                  <p className="text-indigo-500 cursor-pointer ml-[59px]">
                    {notification.eventType === "Billetera" && null}
                    {notification.eventType === "Multimedia" && "Cargar multimedia"}
                    {notification.eventType === "Evento" && "Inscribirme"}
                  </p>
                </div>
              </div>
            );
          })}

        {notifications
          .filter((notification) => notification.eventType === activeTab)
          .map((notification) => {
            // sacar cuanto hace que se creo la notificacion
            const fechaCreacionNotificacion = new Date(notification.created_at);
            const fechaActual = new Date();

            // Calculamos la diferencia en milisegundos
            const diferenciaMilisegundos =
              fechaActual - fechaCreacionNotificacion;

            // Convertimos la diferencia a minutos, horas y días
            const minutosTranscurridos = Math.floor(
              diferenciaMilisegundos / (1000 * 60)
            );
            const horasTranscurridas = Math.floor(minutosTranscurridos / 60);
            const diasTranscurridos = Math.floor(horasTranscurridas / 24);

            const time = () => {
              if (diasTranscurridos >= 1) return diasTranscurridos + " días";
              if (horasTranscurridas >= 1 && diasTranscurridos < 1)
                return horasTranscurridas + " horas";
              if (minutosTranscurridos <= 60 && horasTranscurridas < 1)
                return minutosTranscurridos + " minutos";
            };

            return (
              <div
                key={notification.id}
                className={`notification mt-3 ${
                  notification.isRead
                    ? "bg-white border-gray-300 border"
                    : "bg-zinc-100 border-gray-200 border"
                } p-2 rounded-[10px] mt-2 `}
              >
                {" "}
                <button
                  type="button"
                  className="close-button float-right pr-3 pt-4"
                  onClick={() => handleMarkIsRead(notification.id)}
                >
                  <span aria-hidden="true">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.185809 0.189191C0.429887 -0.054887 0.825615 -0.0548869 1.06969 0.189191L4.99662 4.11612L8.92354 0.189191C9.16762 -0.0548867 9.56335 -0.054887 9.80743 0.189191C10.0515 0.433269 10.0515 0.828997 9.80743 1.07307L5.8805 5L9.80743 8.92693C10.0515 9.171 10.0515 9.56673 9.80743 9.81081C9.56335 10.0549 9.16762 10.0549 8.92354 9.81081L4.99662 5.88388L1.06969 9.81081C0.825615 10.0549 0.429887 10.0549 0.185809 9.81081C-0.058269 9.56673 -0.0582689 9.171 0.185809 8.92693L4.11273 5L0.185809 1.07307C-0.0582689 0.828997 -0.058269 0.433269 0.185809 0.189191Z"
                        fill="#C3C3CB"
                      />
                    </svg>
                  </span>
                </button>
                <div className="flex flex-col justify-center items-start w-[90%]">
                  <div className="flex flex-row items-center w-[90%] pt-2">
                    <div className="rounded-full flex items-center justify-center mr-2 p-2 h-[50px] w-[50px] bg-[#DBDBDB]">
                      {activeTab === "Evento" && (
                        <span className="bg-[#E6E6E9] p-2 rounded-full">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.6667 2.54167H14.6041C14.4991 1.60667 13.7125 0.875 12.75 0.875H5.25C4.2875 0.875 3.50169 1.60667 3.39585 2.54167H2.33333C1.52917 2.54167 0.875 3.19583 0.875 4V5.37502C0.875 7.49669 2.49083 8.55919 3.84833 8.75169C4.63833 10.5525 6.34417 11.8625 8.375 12.0883V13.42C6.76 13.6342 5.875 14.7058 5.875 16.5V17.125H12.125V16.5C12.125 14.7058 11.24 13.635 9.625 13.42V12.0883C11.655 11.8625 13.3608 10.5525 14.1517 8.75169C15.5092 8.55919 17.125 7.49669 17.125 5.37502V4C17.125 3.19583 16.4708 2.54167 15.6667 2.54167ZM2.125 5.37502V4C2.125 3.885 2.21833 3.79167 2.33333 3.79167H3.375V6.5C3.375 6.78917 3.40413 7.07165 3.4458 7.34915C2.79413 7.07665 2.125 6.48419 2.125 5.37502ZM10.8225 15.875H7.1783C7.3458 15.0058 7.91748 14.625 9.00081 14.625C10.0841 14.625 10.6542 15.0058 10.8225 15.875ZM9.00254 10.875C9.00171 10.875 9.00083 10.8742 9 10.8742C8.99917 10.8742 8.99829 10.875 8.99746 10.875C6.58662 10.8733 4.625 8.91167 4.625 6.5V2.75C4.625 2.405 4.90583 2.125 5.25 2.125H12.75C13.0942 2.125 13.375 2.405 13.375 2.75V6.5C13.375 8.91167 11.4134 10.8733 9.00254 10.875ZM15.875 5.37502C15.875 6.48419 15.2059 7.07665 14.5542 7.34915C14.5967 7.07165 14.625 6.78917 14.625 6.5V3.79167H15.6667C15.7817 3.79167 15.875 3.885 15.875 4V5.37502Z"
                              fill="#25314C"
                            />
                          </svg>
                        </span>
                      )}
                      {activeTab === "Billetera" && (
                        <span className="bg-[#E6E6E9] p-2 rounded-full">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.625 4.2475V4C14.625 1.985 13.515 0.875 11.5 0.875H3.16667C1.9025 0.875 0.875 1.9025 0.875 3.16667V14C0.875 16.015 1.985 17.125 4 17.125H14C16.015 17.125 17.125 16.015 17.125 14V7.33333C17.125 5.5375 16.2433 4.46083 14.625 4.2475ZM15.875 12.125H12.75C11.9458 12.125 11.2917 11.4708 11.2917 10.6667C11.2917 9.8625 11.9458 9.20833 12.75 9.20833H15.875V12.125ZM3.16667 2.125H11.5C12.8142 2.125 13.375 2.68583 13.375 4V4.20833H3.16667C2.5925 4.20833 2.125 3.74083 2.125 3.16667C2.125 2.5925 2.5925 2.125 3.16667 2.125ZM14 15.875H4C2.68583 15.875 2.125 15.3142 2.125 14V5.20748C2.4375 5.36748 2.79167 5.45833 3.16667 5.45833H14C15.3142 5.45833 15.875 6.01917 15.875 7.33333V7.95833H12.75C11.2567 7.95833 10.0417 9.17333 10.0417 10.6667C10.0417 12.16 11.2567 13.375 12.75 13.375H15.875V14C15.875 15.3142 15.3142 15.875 14 15.875ZM13.175 9.83333H13.1833C13.6442 9.83333 14.0167 10.2067 14.0167 10.6667C14.0167 11.1267 13.6442 11.5 13.1833 11.5C12.7233 11.5 12.3458 11.1267 12.3458 10.6667C12.3458 10.2067 12.715 9.83333 13.175 9.83333Z"
                              fill="#25314C"
                            />
                          </svg>
                        </span>
                      )}
                      {activeTab === "Multimedia" && (
                        <span className="bg-[#E6E6E9] p-2 rounded-full">
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0.708008H4C1.985 0.708008 0.875 1.81801 0.875 3.83301V12.1663C0.875 14.1813 1.985 15.2913 4 15.2913H14C16.015 15.2913 17.125 14.1813 17.125 12.1663V3.83301C17.125 1.81801 16.015 0.708008 14 0.708008ZM4 1.95801H14C15.3142 1.95801 15.875 2.51884 15.875 3.83301V8.99048L12.5333 5.64962C11.9833 5.09878 11.0167 5.09878 10.4667 5.64962L6.5 9.61548L5.86666 8.98295C5.31666 8.43212 4.35001 8.43212 3.80001 8.98295L2.125 10.658V3.83301C2.125 2.51884 2.68583 1.95801 4 1.95801ZM14 14.0413H4C2.77333 14.0413 2.20997 13.5446 2.13914 12.4105L4.68329 9.86633C4.78912 9.76133 4.87663 9.76133 4.98246 9.86633L5.76503 10.6488C6.1542 11.0388 6.84502 11.038 7.23252 10.6488L11.3491 6.53219C11.455 6.42719 11.5425 6.42719 11.6483 6.53219L15.8734 10.7572V12.1663C15.875 13.4805 15.3142 14.0413 14 14.0413ZM4.625 5.49967C4.625 4.92467 5.09167 4.45801 5.66667 4.45801C6.24167 4.45801 6.70833 4.92467 6.70833 5.49967C6.70833 6.07467 6.24167 6.54134 5.66667 6.54134C5.09167 6.54134 4.625 6.07467 4.625 5.49967Z"
                              fill="#25314C"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                    <p className="font-lato font-semibold text-[#2E2E38]">
                      {notification.message}
                    </p>
                  </div>
                  <p className="text-gray-500 ml-14">Hace {time()}</p>
                  <p className="text-indigo-500 cursor-pointer ml-14">
                    {activeTab === "Billetera" && null}
                    {activeTab === "Multimedia" && "Cargar multimedia"}
                    {activeTab === "Evento" && "Inscribirme"}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const NotificationButton = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const notifications = useSelector(
    (state) => state.reducerNotifications.allNotifications
  );
  const userProfesion =
    useSelector((state) => state.reducerAuth?.usuarioAuth?.profesionType[0]) ||
    null;
  // console.log("user", userProfesion);

  // console.log('notifications', notifications)
  //para renderizar el nro de la cantidad de notificaciones sin leer
  const notificationsNotRead = [...notifications].filter(
    (not) => !not.isRead
  ).length;

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getNoReadsNotificationsPhotographer({
      succes: (v) => {
        dispatch(getNotificaciones(v));
      },
      error: (e) => console.log("error", e),
      loading: (l) => dispatch(authSetLoading(l)), // Debes pasar el parámetro 'l' a authSetLoading
    });
  }, []);

  return (
    <div className="relative h-[50px] w-[50px] flex items-center">
      <span
        className="flex items-center justify-center w-[44px] h-[44px] cursor-pointer"
        onClick={handleToggleModal}
      >
        {bell}
        {notificationsNotRead > 0 && (
          <span className="absolute flex items-center top-[-5px] right-[-8px] rounded-full p-2 h-6 bg-[#C70117] text-white font-lato font-normal">
            {notificationsNotRead}
          </span>
        )}
      </span>

      {isModalOpen &&
        (userProfesion === "Fotógrafo/Videos" ||
          userProfesion === "Fotografo") && (
          <Modal isOpen={isModalOpen}>
            <NotificationModal
              onClose={handleCloseModal}
              notifications={notifications}
            />
          </Modal>
        )}
    </div>
  );
};

export default NotificationButton;
