import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Alert, Box, Button, Paper, TextField, Typography } from '@mui/material'
import { login } from '../plugins/axios'

function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError('')
        setIsLoading(true)

        const res = await login({ email, password })

        setIsLoading(false)

        if (res.error) {
            setError(res.error)
            return
        }

        navigate('/', { replace: true })
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#f4f6f8',
                px: 2,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    width: '100%',
                    maxWidth: 420,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <LockOutlinedIcon color="primary" sx={{ fontSize: 42, mb: 1 }} />
                    <Typography variant="h5" component="h1" sx={{ fontWeight: 700 }}>
                        Đăng nhập
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Nhập tài khoản để vào trang quản lý
                    </Typography>
                </Box>

                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {error && <Alert severity="error">{error}</Alert>}
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        required
                        fullWidth
                        autoComplete="email"
                    />
                    <TextField
                        label="Mật khẩu"
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                        fullWidth
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isLoading}
                        sx={{ py: 1.2, textTransform: 'none', borderRadius: 2 }}
                    >
                        {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default LoginPage
