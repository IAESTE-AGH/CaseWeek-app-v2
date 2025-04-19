import { WORKSHOPS_MOCKS } from "src/mocks/workshops";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import s from "./WorkshopsList.module.css";
import tempListImg from "src/assets/img/overview_2.png";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import timeAttackIcon from "src/assets/img/timeAttackIcon.png";
import universityIcon from "src/assets/img/universityIcon.png"
import alarmClockIcon from "src/assets/img/alarmClockIcon.png"

const WorkshopsList = () => {
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Możesz zmienić liczbę warsztatów na stronie

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedUniversity, selectedField]);
  

  // Pobieranie unikalnych uczelni
  const universities = [
    ...new Set(WORKSHOPS_MOCKS.map((workshop) => workshop.university.name)),
  ];

  // Pobieranie unikalnych kierunków studiów
  const fields = [
    ...new Set(
      WORKSHOPS_MOCKS.flatMap((workshop) =>
        workshop.preferableFieldsOfStudy.map((field : { name: string }) => field.name)
      )
    ),
  ];

  const filteredWorkshops = WORKSHOPS_MOCKS.filter((workshop) => {
    const matchesUniversity =
      !selectedUniversity || workshop.university.name === selectedUniversity;
    const matchesField =
      !selectedField ||
      workshop.preferableFieldsOfStudy.some(
        (field: { name: string }) => field.name === selectedField
      );

    return matchesUniversity && matchesField;
  });

  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleString("pl-PL", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Warsaw", // jeśli chcesz lokalnie w Polsce
    });
  };

  //ile jest workshopow total 
  const totalPages = Math.ceil(filteredWorkshops.length / itemsPerPage);


  const paginatedWorkshops = filteredWorkshops.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  //considers number of pages to render 
  const renderPagination = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
  
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
  
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
  
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
  
    return pages.map((page, index) =>
      typeof page === "number" ? (
        <button
          key={index}
          className={`${s.pageButton} ${page === currentPage ? s.activePage : ""}`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ) : (
        <span key={index} className={s.ellipsis}>
          {page}
        </span>
      )
    );
  };

  return (
    <section className={s.all}>

      <div className={s.titleAndfiltersContainer}>
        
        <text className={s.siteTitle}>Warsztaty</text>

        <div className={s.aligner}>
            <div className={s.shadowDiv}></div>
            <div className={s.filters}>
              <div className={s.individualFilter1}>
                <label htmlFor="university">Uczelnia:</label>
                {/* <select
                  id="university"
                  value={selectedUniversity}
                  onChange={(e) => setSelectedUniversity(e.target.value)}
                  className={s.filterSelect}
                >
                  <option value="">wybierz</option>
                  {universities.map((university) => (
                    <option key={university} value={university}>
                      {university}
                    </option>
                  ))}
                </select> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="university"
                  value={selectedUniversity}
                  onChange={(e) => setSelectedUniversity(e.target.value)}
                  displayEmpty
                  className={s.filterSelect}
                >
                  <MenuItem value="" ><em>wybierz</em></MenuItem>
                  {universities.map((university) => (
                    
                    <MenuItem key={university} value={university}>
                      {university}
                    </MenuItem>
                  ))}
                  </Select>
              </div>

              <div className={s.individualFilter2}>
                <label htmlFor="field">Kierunek studiów:</label>
                {/* <select
                  id="field"
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className={s.filterSelect}
                >
                  <option value="">wybierz</option>
                  {fields.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="field"
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  displayEmpty
                  className={s.filterSelect}
                >
                  <MenuItem value=""><em>wybierz</em></MenuItem>
                  {fields.map((field) => (
                    
                    <MenuItem key={field} value={field}>
                      {field}
                    </MenuItem>
                  ))}
                  </Select>
              </div>
            </div>
          </div>
        </div>

      <div>
        
        {paginatedWorkshops.map((workshop,index) => (
          <div key={workshop.id} className={s.card}>
                <div className={s.displayCard}>
                  
                   
                    <img 
                      src={tempListImg}
                      alt="Workshop"
                      className={s.image}
                    />                   
                      
                    <text className={s.workshopTitle}>{workshop.title}</text>
                      
                    <text className={s.company}>{workshop.company.name}</text>

                    <text className={s.description}>{workshop.longDescription}</text>

                    <div className={s.details}>
                      <div className={s.detailsLi}> <img src={universityIcon}/>  Uczelnia: {workshop.university.name}</div>
                      <div className={s.detailsLi}> <img src={timeAttackIcon}/>  Data i godzina: {formatDate(workshop.startsAt)}</div>
                      <div className={s.detailsLi}> <img src={alarmClockIcon}/>  Czas trwania: {workshop.durationMinutes}</div>
                    </div>
                              
                    <button className={s.detailsLinkButton}>
                              <Link to={workshop.id ? `/warsztaty/${workshop.id}` : "/warsztaty"} className={s.workshopLink}>
                                  Przejdź do szczegółów
                              </Link> 
                    </button>
                          
                </div>

              {index < paginatedWorkshops.length - 1 && <div className={s.separator}></div>} 
              
          </div>    
        ))}
      </div>

      <div className={s.pagingDown}>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={s.pageButtonNextAndPrevious2}
              >
                ← Poprzednia
              </button>
              
              {renderPagination()}
              
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={s.pageButtonNextAndPrevious2}
              >
                Następna →
              </button>
          </div>

    </section>
  );
};

export default WorkshopsList;
