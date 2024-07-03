import Link from "next/link";
import React, { useState } from "react";
import { AvatarComponent } from 'avatar-initials';
import {
  theHorseHouseIconSidebar,
  backArrowSidebar,
  LupaIconSidebar,
  panelDeControlIcon,
  calendarIconSidebar,
  eventosIconSidebar,
  billeteraIconSidebar,
  clientesIconSidebar,
  concursosIconSidebar,
  clubEquitacionIconSidebar,
  pasadasIconSidebar,
  configuracionIconSidebar,
  supportIconSidebar,
  estadisticasIconSidebar,
  logoutIconSidebar,
  arrowConcursosSidebar1,
  arrowConcursosSidebar2,
  arrowPasadasSidebar1,
  arrowPasadasSidebar2
} from "@/iconos/icons";
import { useRouter } from "next/router";

const SideBarLarge = ({
  isToggleContest,
  isTogglePasadas,
  close,
  handlePasadas,
  handleContests,
  usuario,
  handleDesloguearse
}) => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(router.pathname);
  let tipoUser =
    usuario?.rol?.profesion === "fotografo" ? "Allfoto" :
      usuario?.rol?.profesion === "videoMaker" ? "Allvideo" :
        "admin";

  console.log(router);



  return (
    <div className="flex flex-col h-[100%] fixed left-0 top-0 bg-[#23254C] z-20">

      <div className="flex flex-col mt-7 px-6">
        <div className="logoAndBackButton flex justify-between items-center ">
          <Link href="/dashboard">
            {theHorseHouseIconSidebar}
          </Link>
          <div className="cursor-pointer justify-center items-center  inline-flex w-10 h-10 p-2.5 rounded border border-gray-400" onClick={() => close()}>
            {backArrowSidebar}
          </div>
        </div>
        {/* Search Bar */}
        {/* <div className="w-full h-11 mt-6 px-3.5 py-2.5 mb-4 bg-white rounded-lg shadow border justify-start items-center gap-2 flex">
          <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
            <div className="w-5 h-5 relative ">
              {LupaIconSidebar}
            </div>
            <input type="text" name="" id="" className="text-black text-base font-normal font-lato leading-normal bg-white outline-0 placeholder:text-neutral-500 " placeholder="Buscar" />
          </div>
        </div> */}
      </div>

      {/* Sidebar Items */}
      <div className=" flex flex-col px-6 justify-between flex-1 mt-10">
        <div className=" flex flex-col">
          {tipoUser === 'admin' && (
            <>
              {/* Panel de control */}
              <div className={`w-full h-10 mb-1 px-3 py-2 justify-start items-center gap-28 inline-flex hover:cursor-pointer ${selectedOption === '/dashboard' && router?.asPath !== '/dashboard#calendar' && 'bg-[#4D50B1]'} rounded`}>
                <Link href="/dashboard" className="w-full">
                  <div className="justify-start items-center gap-3 flex w-full h-full">
                    {panelDeControlIcon}
                    <div className="text-white text-base font-normal font-lato leading-normal">
                      Panel de control
                    </div>
                  </div>
                </Link>
              </div>

              {/* Calendario */}
              <div className={`w-full mb-1 h-10 px-3 py-2 justify-start items-center gap-[105px] inline-flex hover:cursor-pointer ${router?.asPath === '/dashboard#calendar' && 'bg-[#4D50B1]'} rounded`}>
                <Link href="/dashboard#calendar" className="w-full">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="w-6 h-6 relative">
                      {calendarIconSidebar}
                    </div>
                    <div className="text-white text-base font-normal font-lato leading-normal">
                      Calendario
                    </div>
                  </div>
                </Link>
              </div>

              {/* Concursos */}
              <div onClick={handleContests} className={`ww-full mb-1 h-10 px-3 py-2 justify-start items-center gap-[105px] inline-flex hover:cursor-pointer ${selectedOption === '/dashboard/events' && 'bg-[#4D50B1]'} rounded`}>
                <Link href="/dashboard/events" className="w-full">
                  <div className="flex items-center justify-between w-full ">
                    <div className="containerIconConcursos flex gap-2">
                      <div className="w-6 h-6 relative">
                        {eventosIconSidebar}
                      </div>

                      <div className="text-white pl-1 text-base font-normal font-lato leading-normal">
                        Eventos
                      </div>

                    </div>
                    {/* {isToggleContest ? (
                     arrowConcursosSidebar1 
                  ) : (
                    arrowConcursosSidebar2 
                  )} */}
                  </div>
                  {/* {isToggleContest && (
                  <Link href="/dashboard/events">
                    <div className="ContestsPasados text-white pl-[33px] pt-3 text-sm">
                      Pasados
                    </div>
                  </Link>
                )}
                {isToggleContest && (
                  <Link href="/dashboard/events">
                    <div className="ContestsPasados text-white pl-[33px] py-3 text-sm">
                      Futuros
                    </div>
                  </Link>
                )} */}
                </Link>
              </div>
              {/* BilleteraUsuario */}
              <div className={`w-full mb-1 h-10 px-3 py-2 justify-start items-center gap-[105px] inline-flex hover:cursor-pointer ${router?.asPath === '/dashboard/wallet' && 'bg-[#4D50B1]'} rounded`}>
                <Link href="/dashboard/wallet" className="w-full">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="w-6 h-6 relative">
                      {billeteraIconSidebar}
                    </div>
                    <div className="text-white text-base font-normal font-lato leading-normal">
                      Billetera
                    </div>
                  </div>
                </Link>
              </div>

              {/* Pasadas */}
              <div onClick={handlePasadas} className="w-full mb-1 px-3 py-3 justify-start items-center gap-28 flex-col hover:cursor-pointer">
                {!tipoUser &&
                  <div className="flex items-center justify-between w-full ">
                    <Link href="/dashboard/events">
                      <div className="containerIconConcursos flex gap-2">
                        <div className="w-6 h-6 relative">
                          {pasadasIconSidebar}
                        </div>
                        <div className="text-white text-base font-normal font-lato leading-normal">
                          Pasadas
                        </div>
                      </div>
                    </Link>

                    {isTogglePasadas ? (
                      arrowPasadasSidebar1
                    ) : (

                      arrowPasadasSidebar2
                    )}
                  </div>
                }

                {isTogglePasadas && (
                  <Link href="/dashboard/events">
                    <div className="ContestsPasados text-white pl-[33px] pt-3 text-sm">
                      Pasados
                    </div>
                  </Link>
                )}
                {isTogglePasadas && (
                  <Link href="/dashboard/events">
                    <div className="ContestsPasados text-white pl-[33px] py-3 text-sm">
                      Futuros
                    </div>
                  </Link>
                )}
              </div>



              {/*  Clubes de equitación */}
              <div className="w-full mb-1 h-10 px-3 py-2  justify-start items-center gap-[105px] inline-flex hover:cursor-pointer">

                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    {clubEquitacionIconSidebar}
                  </div>
                  <div className="text-white text-base font-normal font-lato leading-normal">
                    Clubes de equitación <span className=" bg-indigo-900 bg-opacity-50 text-white rounded-xl py-1 px-2 text-[9px] font-lato leading-tight">Próximamente</span>
                  </div>
                </div>

              </div>


              {/* Miembros */}
              <div className="w-full mb-1 h-10 px-3 py-2 justify-start items-center gap-[105px] inline-flex hover:cursor-pointer">
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    {clientesIconSidebar}
                  </div>
                  <div className="text-white text-base font-normal font-lato leading-normal">
                    Miembros <span className=" bg-indigo-900 bg-opacity-50 text-white rounded-xl py-1 px-2 text-[11px] font-lato leading-tight">Próximamente</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {(tipoUser === 'Allfoto' || tipoUser === 'Allvideo') && (
            <>
              {/* Panel de control PH */}
              <div className={`w-full h-10 mb-1 px-3 py-2 justify-start items-center gap-28 inline-flex hover:cursor-pointer ${selectedOption === '/dashboardPh' && router?.asPath !== '/dashboard#calendar' && 'bg-[#4D50B1]'} rounded`}>
                <Link href="/dashboardPh" className="w-full">
                  <div className="justify-start items-center gap-3 flex w-full h-full">
                    {panelDeControlIcon}
                    <div className="text-white text-base font-normal font-lato leading-normal">
                      Panel de control
                    </div>
                  </div>
                </Link>
              </div>

              {/* Calendario PH */}
              <div className={`w-full mb-1 h-10 px-3 py-2 justify-start items-center gap-[105px] inline-flex hover:cursor-pointer ${router?.asPath === '/dashboardPh/calendario' && 'bg-[#4D50B1]'} rounded`}>
                <Link href="/dashboardPh/calendario" className="w-full">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="w-6 h-6 relative">
                      {calendarIconSidebar}
                    </div>
                    <div className="text-white text-base font-normal font-lato leading-normal">
                      Calendario
                    </div>
                  </div>
                </Link>
              </div>


              {/* Eventos PH */}
              <div onClick={handleContests} className={`ww-full mb-1 h-10 px-3 py-2 justify-start items-center gap-[105px] inline-flex hover:cursor-pointer ${selectedOption === '/dashboardPh/eventosPh' && 'bg-[#4D50B1]'} rounded`}>
                <Link href="/dashboardPh/eventosPh" className="w-full">
                  <div className="flex items-center justify-between w-full ">
                    <div className="containerIconConcursos flex gap-2">
                      <div className="w-6 h-6 relative">
                        {eventosIconSidebar}
                      </div>
                      <div className="text-white pl-1 text-base font-normal font-lato leading-normal">
                        Eventos
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Clientes PH */}
              <div className="ww-full mb-1 h-10 px-3 py-2 justify-start items-center gap-[105px] inline-flex hover:cursor-pointer rounded`">
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    {clientesIconSidebar}
                  </div>
                  <Link href={""}> <div className="text-white text-base font-normal font-lato leading-normal">
                    Clientes
                    <span className="ml-2 bg-indigo-900 bg-opacity-50 text-white rounded-xl py-1 px-2 text-[11px] font-lato leading-tight">Próximamente</span>
                  </div>
                  </Link>
                </div>
              </div>

              {/* Billetera PH */}
              <div className={`w-full mb-1 h-10 px-3 py-2 justify-start items-center gap-[105px] inline-flex hover:cursor-pointer ${router?.asPath === '/dashboardPh/billetera' && 'bg-[#4D50B1]'} rounded`}>
                <Link href="/dashboardPh/billetera" className="w-full">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="w-6 h-6 relative">
                      {billeteraIconSidebar}
                    </div>
                    <div className="text-white text-base font-normal font-lato leading-normal">
                      Billetera
                    </div>
                  </div>
                </Link>
              </div>

              {/* Estadisticas PH */}
              {/*  <div className="w-full mb-5 h-4 px-3 py-1 justify-start items-center gap-3 inline-flex hover:cursor-pointer">
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    {estadisticasIconSidebar}

                  </div>
                  <Link href={""}> <div className="text-white text-base font-normal font-lato leading-normal">
                    Estadísticas
                    <span className="ml-2 bg-indigo-900 bg-opacity-50 text-white rounded-xl py-1 px-2 text-[11px] font-lato leading-tight">Próximamente</span>
                  </div>
                  </Link>
                </div>
              </div> */}

              {/* Mis packs PH */}
              {/* <div className="w-full mb-5 h-4 px-3 py-2 justify-start items-center gap-3 inline-flex hover:cursor-pointer">
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    {billeteraIconSidebar}

                  </div>
                  <Link href={""}> <div className="text-white text-base font-normal font-lato leading-normal">
                    Mis packs
                    <span className=" ml-2 bg-indigo-900 bg-opacity-50 text-white rounded-xl py-1 px-2 text-[11px] font-lato leading-tight">Próximamente</span>
                  </div>
                  </Link>
                </div>
              </div> */}
            </>
          )}
        </div>

        <div className=" flex flex-col">

          {/* Soporte técnico Hidden */}
         {/*  <div className="w-full mb-1 h-10 px-3 py-2  justify-start items-center gap-28 inline-flex hover:cursor-pointer">
            <div className="justify-start items-center gap-2 flex">
              <div className="w-6 h-6 relative">
                {supportIconSidebar}
              </div>
              <div className="text-white text-base font-normal font-lato leading-normal">
                Soporte técnico <span className=" bg-indigo-900 bg-opacity-50 text-white rounded-xl py-1 px-2 text-[11px] font-lato leading-tight">Próximamente</span>
              </div>
            </div>
          </div> */}

          {/* Configuración */}
          <div className={`w-full mb-1 h-10 px-3 py-2 justify-start items-center gap-[105px] inline-flex hover:cursor-pointer ${router?.asPath === '/dashboard/profile' && 'bg-[#4D50B1]'} rounded`}>
                <Link href="/dashboard/profile" className="w-full">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="w-6 h-6 relative">
                      {configuracionIconSidebar}
                    </div>
                    <div className="text-white text-base font-normal font-lato leading-normal">
                      Configuración
                    </div>
                  </div>
                </Link>
              </div>

          

          {/* Cerrar sesión */}
          <div className="w-full mb-1 h-10 px-3 py-2  justify-start items-center gap-28 inline-flex hover:cursor-pointer"
            onClick={() => handleDesloguearse()}>
            <div className="justify-start items-center gap-2 flex">
              <div className="w-6 h-6 relative">
                {logoutIconSidebar}
              </div>
              <div className="text-white text-base font-normal font-lato leading-normall">
                Cerrar sesión
              </div>
            </div>
          </div>

          <div className=" my-6">
            <div className="w-full border border-slate-400 border-b-0 "></div>
          </div>
          <div className=" px-2 pb-6">
            <div className="w-60 h-10 justify-between items-start inline-flex">
              <div className="justify-between items-center flex w-[100%]">
                <div className="w-[20%]">
                  {usuario?.lastName !== null ?

                    <AvatarComponent
                      classes="rounded-full flex items-center justify-center"
                      primarySource={usuario?.profilePic === "" || usuario?.profilePic === null || usuario?.profilePic === "https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" ? null : usuario?.profilePic}
                      useGravatar={false}
                      size={40}
                      color="#000000"
                      background="#93C5FD"
                      fontSize={17}
                      fontWeight={800}
                      offsetY={0}
                      initials={`${usuario?.firstName && usuario?.firstName.charAt(0).toUpperCase()}${usuario?.lastName ? usuario?.lastName.charAt(0).toUpperCase() : ""}`}
                    />

                    :

                    <AvatarComponent
                      classes="rounded-full flex items-center justify-center"
                      primarySource={usuario?.profilePic === "" || usuario?.profilePic === null || usuario?.profilePic === "https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" ? null : usuario?.profilePic}
                      useGravatar={false}
                      size={40}
                      color="#000000"
                      background="#93C5FD"
                      fontSize={17}
                      fontWeight={800}
                      offsetY={0}
                      initials={`${usuario?.firstName && usuario?.firstName.charAt(0).toUpperCase()}`}
                    />
                  }
                </div>
                <div className="flex-col justify-end items-start flex-1 flex w-[70%]">
                  <div className="text-white text-sm font-semibold font-lato leading-tight">
                    {usuario?.firstName}
                  </div>
                  <div className="text-gray-100 text-sm font-normal font-lato leading-tight">
                    {usuario?.email} 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarLarge;
