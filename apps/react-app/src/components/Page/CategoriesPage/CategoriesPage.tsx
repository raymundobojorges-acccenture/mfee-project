import { Grid } from "@mui/material";

import { PageContainer } from "./CategoriesPage.styles";
 import { Category } from "../../../types";

 import IconButton from '@mui/material/IconButton';
 import AddIcon from '@mui/icons-material/Add';
 import EditIcon from '@mui/icons-material/Edit';
 import DeleteIcon from '@mui/icons-material/Delete';

 import Table from '@mui/material/Table';
 import TableBody from '@mui/material/TableBody';
 import TableCell from '@mui/material/TableCell';
 import TableContainer from '@mui/material/TableContainer';
 import TableHead from '@mui/material/TableHead';
 import TableRow from '@mui/material/TableRow';
 import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";

const categories: Category[] = [
  { id: "663fef70d513515319551d1f", name: "Travel" },
  { id: "663fef70d513515319546d1f", name: "Food" },
];

function CategoriesPage() {
  // ACT 6 - Create a state called "rows"
  // ACT 6 - Call setRows when the component is mounted for first time, use "categories" variable as new value.

  //ACT 6 - Create two empty functions called "handleEditItem" and "handleDeleteItem"

  const [rows, setRows] = useState<Category[]>([]);
  useEffect(() => {
    setRows(categories)
  }, []);

  function handleEditItem(){

  }
  
  function handleDeleteItem(){
    
  }

  return (
    <PageContainer container>
      Categories Page
      <Grid item sx={{ justifyContent: "flex-end", display: "flex" }}>
      <IconButton aria-label="add">
        <AddIcon />
      </IconButton>
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        {/* ACT 6 - Create a component called "Table" to display category names */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="edit">
                      <EditIcon onClick={handleEditItem} />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <DeleteIcon onClick={handleDeleteItem} />
                    </IconButton>                    
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      //Modal
    </PageContainer>
  );
}

export default CategoriesPage;
