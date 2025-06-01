import Drawer from '@mui/material/Drawer'
import AdminPanelMenuOptions from '../../organisms/AdminPanelMenuOptions'

const drawerWidth = 240

const AdminPanelMenu = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <AdminPanelMenuOptions />
    </Drawer>
  )
}

export default AdminPanelMenu
