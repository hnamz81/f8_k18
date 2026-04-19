import { Table, TableHead, TableRow, TableCell, TableBody, Stack  } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import type { Column, Row} from "../../utils"

interface Props {
    columns: Column[];
    rows: Row[];
    maxWidth?: number | string;
    onClickEdit: (id: number) => void;
    onClickDelete: (id: number) => void;
    // onClickCreate?: () => void;
}

const TableContainer = ({columns, rows, maxWidth, onClickEdit, onClickDelete}: Props) => {

    const openEdit = (id : number) => {
        if (onClickEdit) {
            onClickEdit(id)
        }
    }

    const onDelete = (id : number) => {
        if (onClickDelete) {
            onClickDelete(id)
        }
    }

    const renderHeaders = () => {
        return columns.map((header, index) => (
                <TableCell key={index} style={{ backgroundColor: "#5B7E3C" }}>{header.text} </TableCell>
            )
        )
    }

    const renderBody = () => {
        return rows.map((row, index) => (
            <TableRow key={index}>
                {
                    columns.map((column, i) => {
                            if (column.value === "action") {
                                return (
                                    <TableCell key={i} style={column.styles}>
                                        <Stack direction="row">
                                            <EditIcon color={"info"} onClick={() => openEdit(row.id)}/>
                                            <DeleteIcon color={"error"} onClick={() => onDelete(row.id)}/>
                                        </Stack>
                                    </TableCell>
                                )
                            }

                            return (
                                <TableCell key={i} style={column.styles}>
                                    {row[column.value]}
                                </TableCell>
                            )
                        }
                    )
                }
            </TableRow>
        ));
    }

    return (
        <>
            <Table sx={{ maxWidth, margin: 'auto' }} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {renderHeaders()}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderBody()}
                </TableBody>
            </Table>

        </>
    )
}

export default TableContainer