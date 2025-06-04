import { Button, IconButton } from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";
import AppTable, { TableColumn } from "@/components/organisms/Table/Table";
import { WORKSHOPS_MOCKS } from "@/mocks/companies";

const WorkshopsListPage = () => {
  const columns: TableColumn[] = [
    { header: "Nazwa", accessor: "name" },
    { header: "Lokalizacja", accessor: "location" },
    { header: "Data", accessor: "date" },
    { header: "Prowadzący", accessor: "instructor" },
    {
      header: "Akcje",
      accessor: "actions",
      render: (_val, row) => (
        <div className="flex gap-2">
          <IconButton><Visibility /></IconButton>
          <IconButton><Edit /></IconButton>
          <IconButton><Delete /></IconButton>
        </div>
      )
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        {/* TODO: zamienić na reużywalny komponent breadcrumbs */}
        <div className="text-xl font-semibold">Admin Panel / Warsztaty</div>
        <Button variant="contained">Dodaj firmę</Button>
      </div>

      <AppTable columns={columns} data={mockWorkshops} />
    </div>
  );
};

export default WorkshopsListPage;
