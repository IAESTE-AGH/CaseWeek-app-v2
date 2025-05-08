import { WORKSHOPS } from "../../../page_data/workshops";
import { useState, useEffect } from "react";
import s from "./WorkshopsList.module.scss";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import WorkshopCard from "./WorkshopCard";
import { useNavigate } from "@tanstack/react-router";

const WorkshopsList = () => {
  const navigate = useNavigate({ from: "/workshops" });
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [currentPage, setCurrentPage] = useState(Number(new URLSearchParams(window.location.search).get('page')) || 1);
  const itemsPerPage = 5; // Możesz zmienić liczbę warsztatów na stronie

  useEffect(() => {
    if (selectedField !== "" || selectedUniversity !== "") {
      setCurrentPage(1);
    }
  }, [selectedUniversity, selectedField]);

  useEffect(() => {
    console.log("Current page:", currentPage);
    navigate({
      search: () => ({ page: currentPage }),
    })
  }, [currentPage]);

  // Pobieranie unikalnych uczelni
  const universities = [
    ...new Set(WORKSHOPS.flatMap((workshop) => workshop.university.name)),
  ]
  // Pobieranie unikalnych kierunków studiów
  const fields = [
    ...new Set(
      WORKSHOPS.flatMap((workshop) =>
        workshop.preferableFieldsOfStudy && workshop.preferableFieldsOfStudy.map(
          (field: { name: string }) => field.name
        )
      ).filter((field) => field !== undefined && field !== null)
    ),
  ];

  const filteredWorkshops = WORKSHOPS.filter((workshop) => {
    const matchesUniversity =
      !selectedUniversity || (Array.isArray(workshop.university) ? workshop.university.flatMap(university => university.name) : workshop.university.name === selectedUniversity);

    const matchesField =
      !selectedField ||
      workshop.preferableFieldsOfStudy && workshop.preferableFieldsOfStudy.some(
        (field: { name: string }) => field.name === selectedField
      );

    return matchesUniversity && matchesField;
  });

  //ile jest workshopow total
  const totalPages = Math.ceil(filteredWorkshops.length / itemsPerPage);

  const paginatedWorkshops = filteredWorkshops.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (page: number) => {
    if (page === currentPage) return;
    window.scrollTo({ top: 0, behavior: "instant" });
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => {
        window.scrollTo({ top: 0, behavior: "instant" });
        return prev - 1;
      });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => {
        window.scrollTo({ top: 0, behavior: "instant" });
        return prev + 1;
      });
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
                <MenuItem value="">
                  <em>wszystkie</em>
                </MenuItem>
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
                <MenuItem value="">
                  <em>wszystkie</em>
                </MenuItem>
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

      <div className={s.workshopsWrapper}>
        {paginatedWorkshops.map((workshop, index) => (
          <WorkshopCard workshop={workshop} isSeparator={index < paginatedWorkshops.length - 1} />
        ))}
      </div>

      <div className={s.pagingDown}>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={s.pageButtonNextAndPrevious2}
        >
          &lt; Poprzednia
        </button>

        {renderPagination()}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={s.pageButtonNextAndPrevious2}
        >
          Następna &gt;
        </button>
      </div>
    </section>
  );
};

export default WorkshopsList;
