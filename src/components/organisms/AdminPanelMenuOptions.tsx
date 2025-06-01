import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Link } from '@tanstack/react-router'

const AdminPanelMenuOptions = () => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/admin/companies">
          <ListItemText primary="Firmy" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/admin/workshops">
          <ListItemText primary="Warsztaty" />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default AdminPanelMenuOptions
