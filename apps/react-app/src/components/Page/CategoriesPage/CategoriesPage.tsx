import { Grid } from "@mui/material";

import { PageContainer } from "./CategoriesPage.styles";
 import { Category, NewCategory, CategoriesResponse } from "../../../types";

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
import { useEffect, useState, useCallback } from "react";

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import Loading from "../../Loading/Index";
import { getCategories, createCategory, updateCategory, deleteCategory } from "../../../api";

/*const categories: Category[] = [
  { id: "663fef70d513515319551d1f", name: "Travel" },
  { id: "663fef70d513515319546d1f", name: "Food" },
];*/

function CategoriesPage() {
  // ACT 6 - Create a state called "rows"
  // ACT 6 - Call setRows when the component is mounted for first time, use "categories" variable as new value.

  // ACT 6 - Create two empty functions called "handleEditItem" and "handleDeleteItem"
  // ACT 9 - Use the getList, create, edit, delete and update categories APIs

  const [loadingCategories, setLoadingCategories] = useState(false);
  const [rows, setRows] = useState<Category[]>([]);
    const onError = useCallback(() => {
    console.log("error")
  }, []);

  const onLoading = (isLoading: boolean) => {
    setLoadingCategories(isLoading);
  };
  
  /*get list*/
  const getCategoriesList = useCallback(async () => {
    const onSuccess = (data: CategoriesResponse[]) => {
      const newRows = data.map((category) => ({
        id: category._id,
        name: category.name,
      }));
      setRows(newRows);
        console.log("added rows")
    };

    await getCategories({ onSuccess, onError, onLoading });
  }, [onError]);
  /*+get list+*/

  /**create new category **/
  const addCategory = useCallback(
    async (newCategory: NewCategory) => {
      const onSuccess = async () => {
        await getCategoriesList();
        console.log("Category successfully created.");
      };

      await createCategory({ newCategory, onSuccess, onError, onLoading });
    },
    [onError, getCategoriesList]
  );
  /**create new category **/

  /** delete category **/
  const removeCategory = useCallback(
    async ({
      categoryID
    }: {
      categoryID: string;
    }) => {
      const onSuccess = async () => {
        await getCategoriesList();
        console.log("Category successfully deleted.");
      };
      await deleteCategory({ categoryID, onSuccess, onError, onLoading });
    },
    [onError, getCategoriesList]
  );
  /** delete category **/

  /** edit category **/
  const updateCategoryData = useCallback(
    async ({
      categoryID,
      updatedCategory
    }: {
      categoryID: string;
      updatedCategory: NewCategory;
    }) => {
      const onSuccess = async () => {
        await getCategoriesList();
        console.log("Category successfully updated.");
      };

      await updateCategory({ categoryID, updatedCategory, onSuccess, onError, onLoading });
    },
    [onError, getCategoriesList]
  );
  /** edit category */

  useEffect(() => {
   /// setRows(categories)
   getCategoriesList()
  }, [getCategoriesList]);

  function handleEditItem(categoryID: string){
    const updatedCategory = {name: "edited category"};
    updateCategoryData({categoryID, updatedCategory})
  }
  
  function handleDeleteItem(categoryID: string){
    //setRows((prevRows) => prevRows.filter((row) => row.id !== item.id));
    removeCategory({categoryID})
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);   
  };

  function addNewCategory(data: string){
    addCategory({name: data})
  }

  if (!rows || loadingCategories) return <Loading />;

  return (
    <PageContainer container>
      Categories Page
      <Grid item sx={{ justifyContent: "flex-end", display: "flex" }}>
        {/* ACT 8 - Use the IconButton component (from MUI) to open the Modal */}
        <IconButton aria-label="add" onClick={handleClickOpen}>
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
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="edit" onClick={() => handleEditItem(row.id)}>
                      <EditIcon  />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDeleteItem(row.id)} >
                      <DeleteIcon  />
                    </IconButton>                    
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* ACT 8 - Create a Modal to add new categories and update existing ones */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const category = formJson.category;
            handleClose();
            addNewCategory(category);
          },
        }}
      >
        <DialogTitle>Create new category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit vero quaerat vel, earum architecto enim dolorem in temporibus sit natus ipsum excepturi. Soluta excepturi necessitatibus iure consequuntur in ex unde?
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            name="category"
            label="Category"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
}

export default CategoriesPage;
