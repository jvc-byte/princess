import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Passcode constants
const MET_DAY = '01022025' // Format: DDMMYYYY (01 February 2025)
const B_DAY = '1906'       // Format: DDMM (19 June)

function Passcode() {
    const [passcode, setPasscode] = useState([])
    const [message, setMessage] = useState('')
    const navigate = useNavigate();

    const validatePasscode = (enteredPasscode) => {
        if (enteredPasscode === MET_DAY || enteredPasscode === B_DAY) {
            setMessage('Yayy!! :)')
            setTimeout(() => {
                setMessage('Redirecting...')
                navigate("/question");
            }, 500)
        } else {
            setMessage('Incorrect passcode :(, hint: Enter either:\n1. The date I met you (DD/MM/YYYY)\n2. Your birthday (DD/MM)')
            setTimeout(() => {
                setPasscode([])
                setMessage('')
            }, 5000)
        }
    }

    const handleNumberClick = (number) => {
        if (passcode.length < 8) {
            const newPasscode = [...passcode, number]
            setPasscode(newPasscode)
        }
    }

    const handleDelete = () => {
        if (passcode.length > 0) {
            setPasscode(passcode.slice(0, -1))
            setMessage('')
        }
    }

    const handleEnter = () => {
        const enteredPasscode = passcode.join('')
        if (enteredPasscode.length === 8 || enteredPasscode.length === 4) {
            validatePasscode(enteredPasscode)
        } else {
            setMessage('Please enter either 8 digits (DDMMYYYY) or 4 digits (DDMM)')
            setTimeout(() => {
                setMessage('')
            }, 3000)
        }
    }

    const handleCancel = () => {
        setPasscode([])
        setMessage('')
    }

    return (
        <div className="min-h-screen w-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center max-w-full">
                {/* Title and Format Instructions */}
                <h1 className="text-2xl font-light mb-4">Enter Passcode</h1>
                <p className="text-sm text-zinc-400 mb-8 text-center">
                    Enter either:<br />
                    • Date format: DD/MM/YYYY (8 digits)<br />
                    • Birthday format: DD/MM (4 digits)
                </p>

                {/* Passcode Dots */}
                <div className="flex gap-4 mb-16">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-3.5 h-3.5 rounded-full ${
                                i < passcode.length ? 'bg-white' : 'border-2 border-zinc-500'
                            }`}
                        />
                    ))}
                </div>

                {/* Message */}
                {message && (
                    <div className={`mb-4 -mt-9 text-sm font-bold ${
                        message === 'Yayy!! :)' ? 'text-green-500' : 'text-red-500'
                    }`}>
                        {message.split('\n').map((line, i) => (
                            <div key={i}>{line}</div>
                        ))}
                    </div>
                )}

                {/* Number Pad */}
                <div className="grid grid-cols-3 gap-4 mb-8 max-w-full">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <button
                            key={num}
                            onClick={() => handleNumberClick(num)}
                            className="w-16 h-16 rounded-full bg-zinc-800/50 flex items-center justify-center hover:bg-zinc-700/50 active:bg-zinc-600/50 transition-colors"
                        >
                            <span className="text-3xl font-light">{num}</span>
                        </button>
                    ))}
                    <button
                        onClick={handleDelete}
                        className="w-16 h-16 rounded-full bg-red-800/50 flex items-center justify-center hover:bg-red-700/50 active:bg-yellow-600/50 transition-colors"
                    >
                        <span className="text-xl font-light">×</span>
                    </button>
                    <button
                        onClick={() => handleNumberClick(0)}
                        className="w-16 h-16 rounded-full bg-zinc-800/50 flex items-center justify-center hover:bg-zinc-700/50 active:bg-zinc-600/50 transition-colors"
                    >
                        <span className="text-3xl font-light">0</span>
                    </button>
                    <button
                        onClick={handleEnter}
                        className="w-16 h-16 rounded-full bg-green-800/50 flex items-center justify-center hover:bg-green-700/50 active:bg-green-600/50 transition-colors"
                    >
                        <span className="text-xl font-light">✓</span>
                    </button>
                </div>

                {/* Cancel Button */}
                <button
                    onClick={handleCancel}
                    className="text-lg text-white/90 hover:text-white active:text-white/70 transition-colors"
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default Passcode