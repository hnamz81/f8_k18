import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import LogoutIcon from '@mui/icons-material/Logout'
import { Box, Button, Typography } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import { CustomerDialog, TableContainer } from '../components'
import { createData, deleteData, getData, updateData } from '../plugins/axios'
import type { Column, Customer, DialogField } from '../utils'

const columns: Column[] = [
    { value: 'name', text: 'Khách hàng', styles: { textAlign: 'Left' } },
    { value: 'email', text: 'Email', styles: { textAlign: 'Left' } },
    { value: 'phone', text: 'Số điện thoại', styles: { textAlign: 'Left' } },
    { value: 'address', text: 'Địa chỉ', styles: { textAlign: 'Left' } },
    { value: 'rank', text: 'Hạng', styles: { textAlign: 'Left' } },
    { value: 'action', text: '', styles: { textAlign: 'Left' } },
]

const dialogFields: DialogField[] = [
    { id: 1, label: 'Khách hàng', name: 'name' },
    { id: 2, label: 'Email', name: 'email' },
    { id: 3, label: 'Số điện thoại', name: 'phone' },
    { id: 4, label: 'Địa chỉ', name: 'address' },
    { id: 5, label: 'Hạng', name: 'rank' },
]

const formCustomer: Customer = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    rank: 'BRONZE',
}

function HomePage() {
    const navigate = useNavigate()
    const [customers, setCustomers] = useState<Customer[]>([])
    const [isOpenCustomerDialog, setIsOpenDialog] = useState(false)
    const [title, setTitle] = useState('')
    const [selectingCustomer, setSelectingCustomer] = useState<Customer | undefined>(undefined)

    useEffect(() => {
        const fetchData = async () => {
            const res = await getData<Customer[]>('customers')

            if (res.data) {
                setCustomers(res.data)
            } else {
                setCustomers([])
            }
        }

        fetchData()
    }, [])

    const onClickEdit = (customerId: number) => {
        const curS: Customer | undefined = customers.find(s => s.id === customerId)
        setSelectingCustomer(curS)
        setTitle('Chỉnh sửa khách hàng')
        setIsOpenDialog(true)
    }

    const onClickDelete = async (customerId: number) => {
        const isConfirmed = window.confirm('Bạn có chắc chắn xóa khách hàng này không?')

        let customerName: string
        const curS: Customer | undefined = customers.find(s => s.id === customerId)
        if (curS !== undefined && curS !== null) {
            customerName = curS.name
        } else {
            customerName = 'không có tên'
        }

        if (!isConfirmed) {
            return
        }

        const { error } = await deleteData('customers', customerId)
        if (error) {
            alert(error)
            return
        }

        setCustomers(prev => prev.filter(c => c.id !== customerId))
        toast.success(`Đã xóa thành công khách hàng ${customerName}`)
    }

    const openCreate = () => {
        setSelectingCustomer({ ...formCustomer, id: undefined as any })
        setTitle('Thêm khách hàng')
        setIsOpenDialog(true)
    }

    const handleChange = (name: string, value: string) => {
        setSelectingCustomer(prev => {
            if (!prev) return prev
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = async (formData: Customer) => {
        let res: any
        if (selectingCustomer && selectingCustomer.id) {
            res = await updateData('customers', selectingCustomer.id, formData)

            if (!res.error && res.data) {
                setCustomers(prev =>
                    prev.map(c => c.id === selectingCustomer.id ? res.data : c)
                )
                toast.success('Cập nhật thành công !!!')
            }
        } else {
            const { id, ...dataToCreate } = formData

            res = await createData('customers', dataToCreate)

            if (!res.error && res.data) {
                setCustomers(prev => [...prev, res.data])
                toast.success('Đã thêm thành công !!!')
            }
        }

        if (res?.error) {
            alert('Lỗi: ' + JSON.stringify(res.error))
        } else {
            setIsOpenDialog(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        navigate('/login', { replace: true })
    }

    return (
        <>
            <Box sx={{
                width: '70%',
                marginX: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
            }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
                    React - Lesson 42
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '70%',
                marginX: 'auto',
                mb: 2,
            }}>

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    color="success"
                    onClick={() => {
                        openCreate()
                        toast('Open Dialog!')
                    }}
                    sx={{ borderRadius: 2, textTransform: 'none' }}
                >
                    Thêm khách hàng
                </Button>
                <Button
                variant="outlined"
                endIcon={<LogoutIcon />}
                color="inherit"
                onClick={handleLogout}
                sx={{ borderRadius: 2, textTransform: 'none' }}
            >
                Đăng xuất
            </Button>
            </Box>

            <TableContainer
                columns={columns}
                rows={customers}
                maxWidth={'70%'}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
            />

            <CustomerDialog
                title={title}
                fields={dialogFields}
                isOpen={isOpenCustomerDialog}
                onClose={() => setIsOpenDialog(false)}
                customer={selectingCustomer}
                form={formCustomer}
                onChange={handleChange}
                onSave={handleSubmit}
            />
            <ToastContainer />
        </>
    )
}

export default HomePage
